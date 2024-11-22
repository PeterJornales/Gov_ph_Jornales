import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";

const Executive = () => {
  return (
    <PageTemplate
      title="Executive Branch"
      subtitle="Learn about the executive branch of the Philippine government"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Office of the President</h2>
          <p className="text-gray-600 leading-relaxed">
            The President of the Philippines is both the head of state and head of government, 
            leading the executive branch of the Philippine government.
          </p>
        </Card>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Cabinet Secretaries</h2>
          <p className="text-gray-600 leading-relaxed">
            The President is assisted by the Cabinet, composed of the heads of executive departments,
            acting as advisers on their respective areas of responsibility.
          </p>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default Executive;