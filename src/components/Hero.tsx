import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-primary to-primary-dark text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in font-serif">
          Welcome to the Philippine Government Portal
        </h1>
        <p className="text-xl mb-8 animate-fade-in opacity-90 font-light tracking-wide">
          Your gateway to government services and information
        </p>
        
        <div className="max-w-2xl mx-auto relative animate-fade-in">
          <input
            type="text"
            placeholder="Search for services, departments, or information..."
            className="w-full px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors">
            <Search className="h-6 w-6" />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {[
            { name: "Health", path: "/health" },
            { name: "Education", path: "/education" },
            { name: "Business", path: "/business" },
            { name: "Tourism", path: "/tourism" }
          ].map((service) => (
            <Link
              key={service.name}
              to={service.path}
              className="bg-white/10 hover:bg-white/20 rounded-lg p-4 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-medium tracking-wide"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;