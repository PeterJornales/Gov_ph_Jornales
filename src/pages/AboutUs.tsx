import PageTemplate from "@/components/PageTemplate";
import { Card } from "@/components/ui/card";

const AboutUs = () => {
  return (
    <PageTemplate
      title="About GOV.PH"
      subtitle="Learn more about the Philippine Government Portal and our mission to serve the Filipino people"
    >
      <div className="grid md:grid-cols-2 gap-8">
        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-serif text-primary mb-4">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed font-light">
            To provide accessible, efficient, and transparent government services to all Filipinos through a unified digital platform.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-serif text-primary mb-4">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed font-light">
            A digitally empowered Philippines where every citizen can easily access government services and information.
          </p>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow duration-300 md:col-span-2">
          <h2 className="text-2xl font-serif text-primary mb-4">Core Values</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-primary mb-2">Transparency</h3>
              <p className="text-sm text-gray-600 font-light">Open and honest governance</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-primary mb-2">Efficiency</h3>
              <p className="text-sm text-gray-600 font-light">Streamlined service delivery</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-primary mb-2">Innovation</h3>
              <p className="text-sm text-gray-600 font-light">Embracing digital solutions</p>
            </div>
          </div>
        </Card>
      </div>
    </PageTemplate>
  );
};

export default AboutUs;