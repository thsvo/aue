
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { UseFormReturn } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(1, "Company name is required"),
  numberOfServers: z.string().min(1, "Number of servers is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  _honeypot: z.string().refine(val => val === '', {
    message: 'Error submitting the form'
  })
});

type FormFieldsProps = {
  form: UseFormReturn<z.infer<typeof formSchema>>;
};

const FormFields = ({ form }: FormFieldsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Name</FormLabel>
              <FormControl>
                <Input placeholder="Your name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="you@company.com" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Company Name</FormLabel>
              <FormControl>
                <Input placeholder="Your company name" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="numberOfServers"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Number of Servers</FormLabel>
              <FormControl>
                <Input placeholder="How many servers do you need?" className="bg-white/10 border-white/20 text-white placeholder:text-gray-400" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={form.control}
        name="message"
        render={({ field }) => (
          <FormItem>
            <FormLabel className="text-white">Message</FormLabel>
            <FormControl>
              <Textarea 
                placeholder="Tell us about your server requirements..." 
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[120px]"
                {...field} 
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Honeypot field - hidden from real users */}
      <FormField
        control={form.control}
        name="_honeypot"
        render={({ field }) => (
          <FormItem style={{ display: 'none' }}>
            <FormControl>
              <Input 
                type="text" 
                tabIndex={-1} 
                autoComplete="off"
                {...field} 
              />
            </FormControl>
          </FormItem>
        )}
      />
    </>
  );
};

export { formSchema, type FormFieldsProps };
export default FormFields;
