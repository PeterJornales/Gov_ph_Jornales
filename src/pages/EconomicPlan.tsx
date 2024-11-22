import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { TrendingUp, Target, BarChart, LineChart } from "lucide-react";

const EconomicPlan = () => {
  return (
    <PageTemplate
      title="Economic Recovery Plan"
      subtitle="Learn about the government's economic recovery initiatives"
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <TrendingUp className="h-8 w-8 text-green-600" />
              <h3 className="text-xl font-medium">Growth Targets</h3>
            </div>
            <p className="text-gray-600">
              The government aims to achieve sustainable economic growth through various initiatives
              and reforms in key sectors.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Target className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-medium">Key Objectives</h3>
            </div>
            <p className="text-gray-600">
              Focus areas include job creation, infrastructure development, and support for
              MSMEs and agricultural sectors.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <BarChart className="h-8 w-8 text-purple-600" />
              <h3 className="text-xl font-medium">Economic Indicators</h3>
            </div>
            <p className="text-gray-600">
              Monitor key economic indicators including GDP growth, inflation rate, and
              employment statistics.
            </p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <LineChart className="h-8 w-8 text-red-600" />
              <h3 className="text-xl font-medium">Progress Tracking</h3>
            </div>
            <p className="text-gray-600">
              Regular updates on the implementation of economic recovery programs and
              their impact.
            </p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Recovery Initiatives</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Key programs and initiatives under the economic recovery plan:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Infrastructure development projects</li>
              <li>Support for micro, small, and medium enterprises</li>
              <li>Agricultural modernization programs</li>
              <li>Digital transformation initiatives</li>
            </ul>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default EconomicPlan;