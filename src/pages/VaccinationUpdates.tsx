import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";
import { Syringe, Calendar, MapPin, Users } from "lucide-react";

const VaccinationUpdates = () => {
  return (
    <PageTemplate
      title="Vaccination Updates"
      subtitle="Stay informed about the national vaccination program"
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Syringe className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-lg font-medium">Total Vaccinated</h3>
                <p className="text-2xl font-bold text-primary">75.6M</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-lg font-medium">Fully Vaccinated</h3>
                <p className="text-2xl font-bold text-primary">70.2M</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <Calendar className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="text-lg font-medium">Boosted</h3>
                <p className="text-2xl font-bold text-primary">20.1M</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center space-x-4 mb-4">
              <MapPin className="h-8 w-8 text-red-600" />
              <div>
                <h3 className="text-lg font-medium">Vaccination Sites</h3>
                <p className="text-2xl font-bold text-primary">1,500+</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-serif text-primary mb-4">Vaccination Information</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              Important information about the COVID-19 vaccination program:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Available vaccines and their efficacy</li>
              <li>Vaccination schedule and requirements</li>
              <li>Post-vaccination care guidelines</li>
              <li>Booster shot information</li>
            </ul>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default VaccinationUpdates;