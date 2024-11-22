import { ArrowRight, FileText, Building2, CreditCard, UserPlus } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { toast } from "./ui/use-toast";

const services = [
  {
    title: "Business Permits",
    description: "Apply for and renew business permits online",
    icon: Building2,
    action: () => toast({
      title: "Business Permits",
      description: "Redirecting to business permit application system...",
    })
  },
  {
    title: "Civil Registry",
    description: "Request birth, marriage, and death certificates",
    icon: FileText,
    action: () => toast({
      title: "Civil Registry",
      description: "Loading document request form...",
    })
  },
  {
    title: "Tax Services",
    description: "File and pay taxes electronically",
    icon: CreditCard,
    action: () => toast({
      title: "Tax Services",
      description: "Connecting to electronic tax filing system...",
    })
  },
  {
    title: "Government IDs",
    description: "Apply for various government identification cards",
    icon: UserPlus,
    action: () => toast({
      title: "Government IDs",
      description: "Opening ID application portal...",
    })
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center font-serif">
          Essential Services
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Access government services quickly and efficiently through our digital platform
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card
                key={service.title}
                className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-3 text-primary font-sans tracking-wide">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 font-light">{service.description}</p>
                <Button
                  onClick={service.action}
                  className="w-full group hover:bg-gradient-to-r from-ph-blue to-primary-dark hover:text-white transition-all duration-300 font-medium tracking-wider"
                >
                  Access Service
                  <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;