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
    <section id="services" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Essential Services
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100"
            >
              <h3 className="font-semibold text-lg mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <button className="text-accent hover:text-accent-dark transition-colors">
                Learn more →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;