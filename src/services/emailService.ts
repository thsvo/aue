
import emailjs from 'emailjs-com';

interface EmailParams {
  name: string;
  email: string;
  company: string;
  number_of_servers: string;
  message: string;
  submitted_at: string;
  source: string;
  to_name: string;
  from_name: string;
  reply_to: string;
}

export const initializeEmailJS = (userId: string): void => {
  console.log("Initializing EmailJS with User ID:", userId);
  emailjs.init(userId);
};

export const sendEmail = async (
  serviceId: string,
  templateId: string,
  params: EmailParams
): Promise<any> => {
  console.log("EmailJS Configuration:");
  console.log("- Service ID:", serviceId);
  console.log("- Template ID:", templateId);
  
  console.log("Sending email with params:", params);
  
  return emailjs.send(
    serviceId,
    templateId,
    params
  );
};
