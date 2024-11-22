import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { Cloud, Wind, Waves, ThermometerSun } from "lucide-react";

const DisasterInfo = () => {
  return (
    <PageTemplate
      title="Disaster Information"
      subtitle="Stay informed about natural disasters and emergency situations"
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Cloud className="h-8 w-8 text-blue-600" />
              <h3 className="text-xl font-medium">Weather Updates</h3>
            </div>
            <p className="text-gray-600">Get real-time weather updates and forecasts.</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Wind className="h-8 w-8 text-gray-600" />
              <h3 className="text-xl font-medium">Typhoon Tracking</h3>
            </div>
            <p className="text-gray-600">Track typhoons and their projected paths.</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Waves className="h-8 w-8 text-blue-400" />
              <h3 className="text-xl font-medium">Flood Alerts</h3>
            </div>
            <p className="text-gray-600">Monitor flood warnings and water levels.</p>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <ThermometerSun className="h-8 w-8 text-orange-500" />
              <h3 className="text-xl font-medium">Heat Advisories</h3>
            </div>
            <p className="text-gray-600">Stay updated on heat warnings and advisories.</p>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Emergency Preparedness</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Learn how to prepare for natural disasters and what to do during emergencies.
              Keep emergency supplies ready and stay informed about evacuation procedures.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Prepare an emergency kit</li>
              <li>Know your evacuation routes</li>
              <li>Keep important documents safe</li>
              <li>Stay tuned to official announcements</li>
            </ul>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default DisasterInfo;