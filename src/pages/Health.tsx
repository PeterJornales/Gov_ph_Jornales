import { ArrowLeft, Phone, Calendar, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Health = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">Department of Health</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access healthcare services, find medical facilities, and stay updated with health guidelines
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-ph-blue" />
                Medical Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Schedule consultations with healthcare professionals</p>
              <Button className="w-full">Book Appointment</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-ph-blue" />
                Health Records
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Access your medical history and vaccination records</p>
              <Button className="w-full">View Records</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-ph-blue" />
                Emergency Hotlines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Important contact numbers for medical emergencies</p>
              <Button className="w-full">View Contacts</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary mb-4">Latest Health Updates</h2>
          <div className="space-y-4">
            {[
              "COVID-19 Vaccination Drive Schedule",
              "New Healthcare Facilities in Metro Manila",
              "Updated Health Protocols for International Travel"
            ].map((update, index) => (
              <div key={index} className="p-4 border rounded hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold text-gray-800">{update}</h3>
                <p className="text-gray-600 mt-2">Click to learn more about this update</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Health;