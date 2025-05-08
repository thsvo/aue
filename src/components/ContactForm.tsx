
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Mail } from "lucide-react";
import { useState } from "react";
import { WebhookConfig } from "./WebhookConfig";
import FormFields, { formSchema } from "./FormFields";
import { z } from "zod";
import { useContactForm } from "@/hooks/useContactForm";

const ContactForm = () => {
  const [webhookUrl, setWebhookUrl] = useState(() => localStorage.getItem('zapierWebhookUrl') || '');
  const [leadCollectionMethod, setLeadCollectionMethod] = useState<'console' | 'zapier' | 'email'>(() => 
    (localStorage.getItem('leadCollectionMethod') as 'console' | 'zapier' | 'email') || 'email'
  );
  const [emailServiceId, setEmailServiceId] = useState(() => localStorage.getItem('emailServiceId') || '');
  const [emailTemplateId, setEmailTemplateId] = useState(() => localStorage.getItem('emailTemplateId') || '');
  const [emailUserId, setEmailUserId] = useState(() => localStorage.getItem('emailUserId') || '');
  
  const { form, isSubmitting, onSubmit } = useContactForm({
    webhookUrl,
    leadCollectionMethod,
    emailServiceId,
    emailTemplateId,
    emailUserId
  });

  return (
    <section className="py-16 bg-[#1A1F2C]" id="contact">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Contact Our Server Experts
          </h2>
          <p className="text-gray-300 text-lg">
            Get in touch with us for custom server configurations and pricing
          </p>
        </div>

        <WebhookConfig 
          onWebhookChange={setWebhookUrl}
          onMethodChange={setLeadCollectionMethod}
          onEmailConfigChange={{
            setServiceId: setEmailServiceId,
            setTemplateId: setEmailTemplateId,
            setUserId: setEmailUserId
          }}
          emailConfig={{
            serviceId: emailServiceId,
            templateId: emailTemplateId,
            userId: emailUserId
          }}
        />

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormFields form={form} />
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting || 
                (leadCollectionMethod === 'zapier' && !webhookUrl) || 
                (leadCollectionMethod === 'email' && (!emailServiceId || !emailTemplateId || !emailUserId))}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Mail className="ml-2 h-5 w-5" />
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
