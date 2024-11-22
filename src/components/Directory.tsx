import { Building2, ArrowRight, Phone, Globe, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { toast } from "./ui/use-toast";

const departments = [
  { 
    name: "Department of Education",
    abbr: "DepEd",
    description: "Leading basic education in the Philippines",
    contact: "8631-7001",
    website: "www.deped.gov.ph"
  },
  { 
    name: "Department of Health",
    abbr: "DOH",
    description: "Ensuring quality healthcare for all",
    contact: "8651-7800",
    website: "www.doh.gov.ph"
  },
  { 
    name: "Department of Finance",
    abbr: "DOF",
    description: "Managing national financial resources",
    contact: "8526-7337",
    website: "www.dof.gov.ph"
  },
  { 
    name: "Department of Agriculture",
    abbr: "DA",
    description: "Supporting agricultural development",
    contact: "8273-2474",
    website: "www.da.gov.ph"
  },
  { 
    name: "Department of Tourism",
    abbr: "DOT",
    description: "Promoting Philippine tourism",
    contact: "8459-5200",
    website: "www.tourism.gov.ph"
  },
  { 
    name: "Department of Labor",
    abbr: "DOLE",
    description: "Protecting workers' rights and welfare",
    contact: "8527-3000",
    website: "www.dole.gov.ph"
  },
];

const Directory = () => {
  const handleContact = (dept: string, contact: string) => {
    toast({
      title: `Contact ${dept}`,
      description: `Connecting to ${contact}...`,
    });
  };

  const handleWebsite = (dept: string, website: string) => {
    toast({
      title: `Visit ${dept}`,
      description: `Redirecting to ${website}...`,
    });
  };

  const handleEmail = (dept: string) => {
    toast({
      title: `Email ${dept}`,
      description: "Opening email form...",
    });
  };

  return (
    <section id="directory" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-6 text-center font-serif">
          Government Directory
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
          Connect with government agencies and access their services
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <Card
              key={dept.abbr}
              className="p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-ph-blue" />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-primary font-sans tracking-wide">
                    {dept.abbr}
                  </h3>
                  <p className="text-gray-600 text-sm">{dept.name}</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{dept.description}</p>
              
              <div className="grid grid-cols-3 gap-2 mb-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleContact(dept.abbr, dept.contact)}
                  className="flex items-center justify-center"
                >
                  <Phone className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleWebsite(dept.abbr, dept.website)}
                  className="flex items-center justify-center"
                >
                  <Globe className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleEmail(dept.abbr)}
                  className="flex items-center justify-center"
                >
                  <Mail className="h-4 w-4" />
                </Button>
              </div>

              <Button
                variant="outline"
                className="w-full group hover:bg-gradient-to-r from-ph-blue to-primary-dark hover:text-white transition-all duration-300 font-medium tracking-wider"
                onClick={() => handleWebsite(dept.abbr, dept.website)}
              >
                Visit website
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directory;