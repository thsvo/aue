
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Mail, MessageSquare } from "lucide-react";

interface EmailConfigProps {
  setServiceId: (id: string) => void;
  setTemplateId: (id: string) => void;
  setUserId: (id: string) => void;
}

interface EmailConfig {
  serviceId: string;
  templateId: string;
  userId: string;
}

interface WebhookConfigProps {
  onWebhookChange: (url: string) => void;
  onMethodChange: (method: 'console' | 'zapier' | 'email') => void;
  onEmailConfigChange: EmailConfigProps;
  emailConfig: EmailConfig;
}

export const WebhookConfig = ({ 
  onWebhookChange, 
  onMethodChange, 
  onEmailConfigChange,
  emailConfig 
}: WebhookConfigProps) => {
  const [showConfig, setShowConfig] = useState(false);
  const [webhookUrl, setWebhookUrl] = useState(() => {
    return localStorage.getItem('zapierWebhookUrl') || '';
  });
  const [leadMethod, setLeadMethod] = useState<'console' | 'zapier' | 'email'>(() => {
    return (localStorage.getItem('leadCollectionMethod') as 'console' | 'zapier' | 'email') || 'email';
  });
  
  const [emailServiceId, setEmailServiceId] = useState(() => {
    return localStorage.getItem('emailServiceId') || emailConfig.serviceId || '';
  });
  
  const [emailTemplateId, setEmailTemplateId] = useState(() => {
    return localStorage.getItem('emailTemplateId') || emailConfig.templateId || '';
  });
  
  const [emailUserId, setEmailUserId] = useState(() => {
    return localStorage.getItem('emailUserId') || emailConfig.userId || '';
  });

  useEffect(() => {
    localStorage.setItem('zapierWebhookUrl', webhookUrl);
    onWebhookChange(webhookUrl);
  }, [webhookUrl, onWebhookChange]);

  useEffect(() => {
    localStorage.setItem('leadCollectionMethod', leadMethod);
    onMethodChange(leadMethod);
  }, [leadMethod, onMethodChange]);
  
  useEffect(() => {
    localStorage.setItem('emailServiceId', emailServiceId);
    onEmailConfigChange.setServiceId(emailServiceId);
  }, [emailServiceId, onEmailConfigChange]);
  
  useEffect(() => {
    localStorage.setItem('emailTemplateId', emailTemplateId);
    onEmailConfigChange.setTemplateId(emailTemplateId);
  }, [emailTemplateId, onEmailConfigChange]);
  
  useEffect(() => {
    localStorage.setItem('emailUserId', emailUserId);
    onEmailConfigChange.setUserId(emailUserId);
  }, [emailUserId, onEmailConfigChange]);

  return (
    <>
      <div className="mb-6 text-right">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={() => setShowConfig(!showConfig)}
          className="text-gray-400 hover:text-white"
        >
          {showConfig ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </Button>
      </div>

      {showConfig && (
        <div className="mb-6 bg-gray-800 p-4 rounded-md">
          <h3 className="text-white text-sm font-medium mb-2">Lead Collection Method</h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <Button 
              variant={leadMethod === 'console' ? "default" : "outline"}
              size="sm"
              onClick={() => setLeadMethod('console')}
              className="text-xs"
            >
              <MessageSquare className="h-3 w-3 mr-1" />
              Console (Local)
            </Button>
            <Button 
              variant={leadMethod === 'zapier' ? "default" : "outline"}
              size="sm"
              onClick={() => setLeadMethod('zapier')}
              className="text-xs"
            >
              Zapier Webhook
            </Button>
            <Button 
              variant={leadMethod === 'email' ? "default" : "outline"}
              size="sm"
              onClick={() => setLeadMethod('email')}
              className="text-xs"
            >
              <Mail className="h-3 w-3 mr-1" />
              Email Delivery
            </Button>
          </div>
          
          {leadMethod === 'zapier' && (
            <div className="space-y-3">
              <p className="text-gray-300 text-xs">Enter your Zapier Webhook URL:</p>
              <Input
                value={webhookUrl}
                onChange={(e) => setWebhookUrl(e.target.value)}
                placeholder="https://hooks.zapier.com/hooks/catch/..."
                className="bg-gray-700 border-gray-600 text-white text-xs"
              />
              {!webhookUrl && (
                <Alert variant="destructive" className="bg-red-900/30 border-red-800">
                  <AlertDescription className="text-red-200 text-xs">
                    Zapier webhook URL is required to send leads to Zapier
                  </AlertDescription>
                </Alert>
              )}
            </div>
          )}
          
          {leadMethod === 'email' && (
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 text-xs mb-1">EmailJS Service ID:</p>
                <Input
                  value={emailServiceId}
                  onChange={(e) => setEmailServiceId(e.target.value)}
                  placeholder="service_xxxxxxx"
                  className="bg-gray-700 border-gray-600 text-white text-xs mb-2"
                />
              </div>
              
              <div>
                <p className="text-gray-300 text-xs mb-1">EmailJS Template ID:</p>
                <Input
                  value={emailTemplateId}
                  onChange={(e) => setEmailTemplateId(e.target.value)}
                  placeholder="template_xxxxxxx"
                  className="bg-gray-700 border-gray-600 text-white text-xs mb-2"
                />
              </div>
              
              <div>
                <p className="text-gray-300 text-xs mb-1">EmailJS User ID (Public Key):</p>
                <Input
                  value={emailUserId}
                  onChange={(e) => setEmailUserId(e.target.value)}
                  placeholder="user_xxxxxxxxxxxxxxxx or public key"
                  className="bg-gray-700 border-gray-600 text-white text-xs"
                />
              </div>
              
              {(!emailServiceId || !emailTemplateId || !emailUserId) && (
                <Alert variant="destructive" className="bg-red-900/30 border-red-800">
                  <AlertDescription className="text-red-200 text-xs">
                    All Email.js fields are required to send leads via email
                  </AlertDescription>
                </Alert>
              )}
              
              <div className="bg-gray-700/50 p-3 rounded-md text-xs text-gray-300 mt-2">
                <p className="font-medium mb-1">How to set up Email.js:</p>
                <ol className="list-decimal pl-4 space-y-1">
                  <li>Create a free account at <a href="https://www.emailjs.com/" target="_blank" rel="noreferrer" className="text-blue-400 hover:underline">EmailJS.com</a></li>
                  <li>Create an Email Service (Gmail, Outlook, etc.)</li>
                  <li>Create an Email Template with variables like: {"{{{name}}}"}, {"{{{email}}}"}, {"{{{message}}}"}, {"{{{company}}}"}, etc.</li>
                  <li>Copy your <span className="font-semibold text-white">Service ID</span>, <span className="font-semibold text-white">Template ID</span>, and <span className="font-semibold text-white">Public Key</span> (from Account {">"} API Keys) to these fields</li>
                  <li>Make sure your template includes all the variables mentioned above</li>
                </ol>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
