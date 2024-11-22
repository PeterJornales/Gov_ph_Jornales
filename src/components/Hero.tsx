import { Search, Calendar, Bell, BookOpen, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";
import { Card } from "./ui/card";

const Hero = () => {
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Search initiated",
      description: "Searching through government services...",
      duration: 3000,
    });
  };

  const quickLinks = [
    { 
      name: "Health", 
      path: "/health", 
      description: "Access medical services",
      icon: "🏥",
      color: "bg-red-50 hover:bg-red-100" 
    },
    { 
      name: "Education", 
      path: "/education", 
      description: "Learning resources",
      icon: "🎓",
      color: "bg-blue-50 hover:bg-blue-100"
    },
    { 
      name: "Business", 
      path: "/business", 
      description: "Start your business",
      icon: "💼",
      color: "bg-green-50 hover:bg-green-100"
    },
    { 
      name: "Tourism", 
      path: "/tourism", 
      description: "Explore Philippines",
      icon: "🌴",
      color: "bg-yellow-50 hover:bg-yellow-100"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative bg-gradient-to-r from-primary/95 to-primary-dark/95 text-white py-24">
        <div className="container mx-auto px-4 space-y-12">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in heading-serif">
              Welcome to the Philippine Government Portal
            </h1>
            <p className="text-xl mb-8 animate-fade-in opacity-90 font-light tracking-wide text-balance">
              Your gateway to government services and information
            </p>
            
            <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto animate-fade-in group">
              <Input
                type="text"
                placeholder="Search for services, departments, or information..."
                className="w-full px-6 py-4 rounded-lg text-gray-900 focus:ring-2 focus:ring-accent pr-12 glass-effect"
              />
              <Button 
                type="submit"
                variant="ghost" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors group-hover:translate-x-1"
              >
                <Search className="h-5 w-5" />
              </Button>
            </form>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`group ${link.color} rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg text-gray-900`}
                >
                  <div className="text-3xl mb-3 animate-float">{link.icon}</div>
                  <h3 className="font-medium text-lg mb-2">{link.name}</h3>
                  <p className="text-sm text-gray-600">{link.description}</p>
                </Link>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-12">
              <Button
                variant="outline"
                className="glass-effect hover:bg-white/30 border-white/20 hover-lift"
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
                className="glass-effect hover:bg-white/30 border-white/20 hover-lift"
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
                className="glass-effect hover:bg-white/30 border-white/20 hover-lift"
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

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;