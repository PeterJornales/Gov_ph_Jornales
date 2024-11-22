import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";

const Judiciary = () => {
  return (
    <PageTemplate
      title="Judiciary Branch"
      subtitle="Learn about the judicial branch of the Philippine government"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Supreme Court</h2>
          <p className="text-gray-600 leading-relaxed">
            The Supreme Court is the highest court in the Philippines and heads the judiciary branch.
            It is composed of a Chief Justice and 14 Associate Justices.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Lower Courts</h2>
          <p className="text-gray-600 leading-relaxed">
            The lower courts include the Court of Appeals, Regional Trial Courts,
            and Metropolitan Trial Courts, among others.
          </p>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default Judiciary;