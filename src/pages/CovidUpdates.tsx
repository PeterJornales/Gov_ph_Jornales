import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { Virus, Syringe, Activity, Users } from "lucide-react";

const CovidUpdates = () => {
  return (
    <PageTemplate
      title="COVID-19 Updates"
      subtitle="Stay informed about the latest COVID-19 developments in the Philippines"
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Virus className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="text-lg font-medium">Active Cases</h3>
                <p className="text-2xl font-bold text-primary">1,234</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Syringe className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-lg font-medium">Vaccinated</h3>
                <p className="text-2xl font-bold text-primary">75.6M</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Activity className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-medium">Recovered</h3>
                <p className="text-2xl font-bold text-primary">4.1M</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="text-lg font-medium">Alert Level</h3>
                <p className="text-2xl font-bold text-primary">Level 1</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Latest Guidelines</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Current health protocols and guidelines to prevent the spread of COVID-19.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Wear face masks in crowded places</li>
              <li>Practice physical distancing</li>
              <li>Regular hand washing and sanitizing</li>
              <li>Get vaccinated and boosted</li>
            </ul>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default CovidUpdates;