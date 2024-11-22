import { ArrowLeft, Building2, FileText, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Business = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">Department of Trade and Industry</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start and grow your business with government support and resources
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Building2 className="h-5 w-5 mr-2 text-ph-blue" />
                Business Registration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Register your business and obtain permits</p>
              <Button className="w-full">Start Registration</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <FileText className="h-5 w-5 mr-2 text-ph-blue" />
                Business Permits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Apply for and renew business permits</p>
              <Button className="w-full">Apply Now</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-ph-blue" />
                Market Reports
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Access industry insights and market data</p>
              <Button className="w-full">View Reports</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary mb-4">Business Updates</h2>
          <div className="space-y-4">
            {[
              "New MSME Support Programs",
              "Export Regulations Update",
              "Upcoming Business Forums"
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

export default Business;