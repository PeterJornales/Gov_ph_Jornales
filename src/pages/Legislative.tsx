import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";

const Legislative = () => {
  return (
    <PageTemplate
      title="Legislative Branch"
      subtitle="Learn about the legislative branch of the Philippine government"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Senate</h2>
          <p className="text-gray-600 leading-relaxed">
            The Senate is the upper chamber of the Congress of the Philippines,
            consisting of 24 senators elected nationwide.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">House of Representatives</h2>
          <p className="text-gray-600 leading-relaxed">
            The House of Representatives is the lower chamber of Congress,
            composed of district and party-list representatives.
          </p>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default Legislative;