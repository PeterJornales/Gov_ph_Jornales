import { ArrowLeft, Map, Plane, Camera } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Tourism = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">Department of Tourism</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the beauty of the Philippines and plan your next adventure
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Map className="h-5 w-5 mr-2 text-ph-blue" />
                Destinations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Explore popular tourist spots and hidden gems</p>
              <Button className="w-full">Discover Places</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Plane className="h-5 w-5 mr-2 text-ph-blue" />
                Travel Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Essential information for travelers</p>
              <Button className="w-full">Plan Your Trip</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Camera className="h-5 w-5 mr-2 text-ph-blue" />
                Photo Gallery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">View stunning photos of Philippine destinations</p>
              <Button className="w-full">View Gallery</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary mb-4">Tourism Updates</h2>
          <div className="space-y-4">
            {[
              "New Tourist Destinations Opening",
              "Travel Requirements Update",
              "Upcoming Cultural Festivals"
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

export default Tourism;