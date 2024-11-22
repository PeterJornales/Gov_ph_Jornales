import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactUs = () => {
  return (
    <PageTemplate
      title="Contact Us"
      subtitle="Get in touch with us for any inquiries or concerns"
    >
      <Card className="max-w-2xl mx-auto p-6">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <Input id="name" placeholder="Your name" />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input id="email" type="email" placeholder="your.email@example.com" />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <Textarea id="message" placeholder="Your message" className="min-h-[150px]" />
          </div>
          
          <Button className="w-full">Send Message</Button>
        </form>
      </Card>
    </PageTemplate>
  );
};

export default ContactUs;