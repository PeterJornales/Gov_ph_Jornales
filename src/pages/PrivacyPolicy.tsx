import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <PageTemplate
      title="Privacy Policy"
      subtitle="Learn about how we collect, use, and protect your personal information"
    >
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Information Collection</h2>
          <p className="text-gray-600 leading-relaxed">
            We collect information that you provide directly to us when using our services.
            This may include personal information such as your name, email address, and contact details.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Information Usage</h2>
          <p className="text-gray-600 leading-relaxed">
            The information we collect is used to provide and improve our services,
            communicate with you, and ensure the security of our platform.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Data Protection</h2>
          <p className="text-gray-600 leading-relaxed">
            We implement appropriate security measures to protect your personal information
            from unauthorized access, alteration, or disclosure.
          </p>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default PrivacyPolicy;