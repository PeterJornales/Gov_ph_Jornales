import { ArrowLeft, Book, GraduationCap, School } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl font-bold text-primary mb-4">Department of Education</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access educational resources, enrollment services, and academic programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="h-5 w-5 mr-2 text-ph-blue" />
                Online Learning
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Access digital learning materials and resources</p>
              <Button className="w-full">Start Learning</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <School className="h-5 w-5 mr-2 text-ph-blue" />
                School Finder
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Find schools and educational institutions near you</p>
              <Button className="w-full">Search Schools</Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow animate-fade-in">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2 text-ph-blue" />
                Scholarships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">Explore scholarship opportunities and programs</p>
              <Button className="w-full">View Scholarships</Button>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 animate-fade-in">
          <h2 className="text-2xl font-bold text-primary mb-4">Education News</h2>
          <div className="space-y-4">
            {[
              "2024 Academic Calendar Updates",
              "New K-12 Curriculum Guidelines",
              "National Achievement Test Schedule"
            ].map((news, index) => (
              <div key={index} className="p-4 border rounded hover:bg-gray-50 transition-colors">
                <h3 className="font-semibold text-gray-800">{news}</h3>
                <p className="text-gray-600 mt-2">Click to read more about this update</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;