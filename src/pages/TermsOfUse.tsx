import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";

const TermsOfUse = () => {
  return (
    <PageTemplate
      title="Terms of Use"
      subtitle="Please read these terms carefully before using our services"
    >
      <div className="space-y-8">
        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Acceptance of Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using this website, you accept and agree to be bound by these
            terms and conditions and our privacy policy.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Use License</h2>
          <p className="text-gray-600 leading-relaxed">
            Permission is granted to temporarily access the materials on our website for
            personal, non-commercial use only.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Disclaimer</h2>
          <p className="text-gray-600 leading-relaxed">
            The materials on this website are provided on an 'as is' basis. We make no
            warranties, expressed or implied, and hereby disclaim all other warranties.
          </p>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default TermsOfUse;