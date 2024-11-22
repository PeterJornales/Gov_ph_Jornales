import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const services = [
  {
    title: "Business Permits",
    description: "Apply for and renew business permits online",
  },
  {
    title: "Civil Registry",
    description: "Request birth, marriage, and death certificates",
  },
  {
    title: "Tax Services",
    description: "File and pay taxes electronically",
  },
  {
    title: "Government IDs",
    description: "Apply for various government identification cards",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center font-serif">
          Essential Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-3 text-primary font-sans tracking-wide">{service.title}</h3>
              <p className="text-gray-600 mb-6 font-light">{service.description}</p>
              <Button
                variant="outline"
                className="w-full group hover:bg-gradient-to-r from-ph-blue to-primary-dark hover:text-white transition-all duration-300 font-medium tracking-wider"
              >
                Learn more
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;