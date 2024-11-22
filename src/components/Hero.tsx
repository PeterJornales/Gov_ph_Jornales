import { Search, Calendar, Bell, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

const Hero = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: "Searching through government services...",
    });
  };

  const quickLinks = [
    { name: "Health", path: "/health", description: "Access medical services" },
    { name: "Education", path: "/education", description: "Learning resources" },
    { name: "Business", path: "/business", description: "Start your business" },
    { name: "Tourism", path: "/tourism", description: "Explore Philippines" }
  ];

  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in font-serif">
            Welcome to the Philippine Government Portal
          </h1>
          <p className="text-xl mb-8 animate-fade-in opacity-90 font-light tracking-wide">
            Your gateway to government services and information
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto animate-fade-in">
            <Input
              type="text"
              placeholder="Search for services, departments, or information..."
              className="w-full px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-accent pr-12"
            />
            <Button 
              type="submit"
              variant="ghost" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
            </Button>
          </form>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="group bg-white/10 hover:bg-white/20 rounded-lg p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="font-medium text-lg mb-2">{link.name}</h3>
                <p className="text-sm text-white/80">{link.description}</p>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white/20"
              onClick={() => toast({
                title: "Latest Updates",
                description: "Checking for government announcements...",
              })}
            >
              <Bell className="h-4 w-4 mr-2" />
              Latest Updates
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white/20"
              onClick={() => toast({
                title: "Calendar",
                description: "Loading government calendar...",
              })}
            >
              <Calendar className="h-4 w-4 mr-2" />
              Event Calendar
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 hover:bg-white/20 border-white/20"
              onClick={() => toast({
                title: "Resources",
                description: "Loading resource library...",
              })}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Resources
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;