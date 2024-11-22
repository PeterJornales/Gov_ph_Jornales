import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { Phone, Ambulance, Police, FireExtinguisher } from "lucide-react";

const Hotlines = () => {
  return (
    <PageTemplate
      title="Emergency Hotlines"
      subtitle="Important contact numbers for emergencies"
    >
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Phone className="h-8 w-8 text-red-600" />
            <div>
              <h3 className="text-xl font-medium">National Emergency Hotline</h3>
              <p className="text-2xl font-bold text-primary">911</p>
            </div>
          </div>
          <p className="text-gray-600">For any emergency situation requiring immediate assistance.</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Police className="h-8 w-8 text-blue-600" />
            <div>
              <h3 className="text-xl font-medium">Police Hotline</h3>
              <p className="text-2xl font-bold text-primary">117</p>
            </div>
          </div>
          <p className="text-gray-600">For police assistance and crime reporting.</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Ambulance className="h-8 w-8 text-green-600" />
            <div>
              <h3 className="text-xl font-medium">Medical Emergency</h3>
              <p className="text-2xl font-bold text-primary">117</p>
            </div>
          </div>
          <p className="text-gray-600">For medical emergencies requiring ambulance service.</p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center space-x-4 mb-4">
            <FireExtinguisher className="h-8 w-8 text-red-600" />
            <div>
              <h3 className="text-xl font-medium">Fire Emergency</h3>
              <p className="text-2xl font-bold text-primary">117</p>
            </div>
          </div>
          <p className="text-gray-600">For fire-related emergencies and rescue operations.</p>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default Hotlines;