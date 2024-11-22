import { Building2, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const departments = [
  { name: "Department of Education", abbr: "DepEd" },
  { name: "Department of Health", abbr: "DOH" },
  { name: "Department of Finance", abbr: "DOF" },
  { name: "Department of Agriculture", abbr: "DA" },
  { name: "Department of Tourism", abbr: "DOT" },
  { name: "Department of Labor", abbr: "DOLE" },
];

const Directory = () => {
  return (
    <section id="directory" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center font-serif">
          Government Directory
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.abbr}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <Building2 className="h-8 w-8 text-ph-blue" />
                <div className="ml-4">
                  <h3 className="font-semibold text-lg text-primary font-sans tracking-wide">{dept.abbr}</h3>
                  <p className="text-gray-600 text-sm font-light">{dept.name}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full group hover:bg-gradient-to-r from-ph-blue to-primary-dark hover:text-white transition-all duration-300 font-medium tracking-wider"
              >
                Visit website
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directory;