
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { z } from "zod";
import { formSchema } from "@/components/FormFields";
import { initializeEmailJS, sendEmail } from "../services/emailService";

interface UseContactFormProps {
  webhookUrl: string;
  leadCollectionMethod: 'console' | 'zapier' | 'email';
  emailServiceId: string;
  emailTemplateId: string;
  emailUserId: string;
}

export const useContactForm = ({
  webhookUrl,
  leadCollectionMethod,
  emailServiceId,
  emailTemplateId,
  emailUserId
}: UseContactFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  useEffect(() => {
    // Initialize EmailJS if we have the required configuration
    if (emailServiceId && emailTemplateId && emailUserId) {
      initializeEmailJS(emailUserId);
    } else {
      console.warn("EmailJS not initialized - missing configuration");
    }
  }, [emailServiceId, emailTemplateId, emailUserId]);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      numberOfServers: "",
      message: "",
      _honeypot: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // If honeypot is filled, silently reject the submission
    if (values._honeypot !== '') {
      console.log('Potential bot submission detected');
      return;
    }

    try {
      setIsSubmitting(true);
      
      const formData = {
        name: values.name,
        email: values.email,
        company: values.company,
        numberOfServers: values.numberOfServers,
        message: values.message,
        submittedAt: new Date().toISOString(),
        source: window.location.href
      };
      
      console.log("Lead form submission:", formData);
      
      // Track the conversion - ensure this runs regardless of collection method
      try {
        if (typeof window.gtag_report_conversion === 'function') {
          console.log("Triggering conversion tracking");
          window.gtag_report_conversion();
        } else {
          console.warn("gtag_report_conversion is not available");
        }
      } catch (conversionError) {
        console.error("Conversion tracking error:", conversionError);
      }
      
      // Handle email sending with EmailJS
      if (leadCollectionMethod === 'email') {
        if (!emailServiceId || !emailTemplateId || !emailUserId) {
          console.error("Email configuration is incomplete");
          toast.error("Email configuration is incomplete. Please configure Email.js settings.");
          setIsSubmitting(false);
          return;
        }
        
        try {
          const emailParams = {
            name: values.name,
            email: values.email,
            company: values.company,
            number_of_servers: values.numberOfServers,
            message: values.message,
            submitted_at: new Date().toISOString(),
            source: window.location.href,
            to_name: "Admin", // Customize this
            from_name: values.name,
            reply_to: values.email
          };
          
          const response = await sendEmail(
            emailServiceId,
            emailTemplateId,
            emailParams
          );
          
          console.log("EmailJS success response:", response);
          toast.success("Lead sent to your email successfully!");
        } catch (emailError: any) {
          console.error("Email sending error:", emailError);
          
          // Show more detailed error message
          const errorMessage = emailError?.text || emailError?.message || "Unknown error";
          toast.error(`Failed to send email: ${errorMessage}. Please check your EmailJS configuration.`);
        }
      }
      // Handle Zapier webhook
      else if (leadCollectionMethod === 'zapier' && webhookUrl) {
        try {
          console.log("Sending data to Zapier webhook:", webhookUrl);
          const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            mode: "no-cors",
            body: JSON.stringify(formData),
          });
          
          console.log("Zapier webhook response:", response);
          toast.success("Lead sent successfully!");
        } catch (webhookError) {
          console.error("Webhook error:", webhookError);
          toast.error("Failed to send lead. Data was logged to console.");
        }
      } else if (leadCollectionMethod === 'zapier' && !webhookUrl) {
        console.error("Zapier webhook URL is not configured");
        toast.error("Zapier webhook URL is not configured");
        return;
      } else {
        console.log("Using console method - form submitted successfully");
        toast.success("Lead logged successfully!");
      }
      
      // Reset form regardless of method
      form.reset();
    } catch (error) {
      console.error('Contact form submission error:', error);
      toast.error("Failed to process form submission. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form,
    isSubmitting,
    onSubmit
  };
};
