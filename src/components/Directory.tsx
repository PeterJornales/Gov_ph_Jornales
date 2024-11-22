import { Building } from "lucide-react";

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
    <section id="directory" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Government Directory
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {departments.map((dept) => (
            <div
              key={dept.abbr}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-primary mr-3" />
                <h3 className="font-semibold text-lg">{dept.abbr}</h3>
              </div>
              <p className="text-gray-600">{dept.name}</p>
              <a
                href="#"
                className="mt-4 inline-block text-accent hover:text-accent-dark transition-colors"
              >
                Visit website →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Directory;