import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "./ui/button";

const news = [
  {
    category: "Technology",
    title: "New Digital Payment System Launched",
    date: "November 15, 2023",
  },
  {
    category: "Health",
    title: "National Vaccination Drive Updates",
    date: "November 14, 2023",
  },
  {
    category: "Economy",
    title: "Economic Recovery Plan Announced",
    date: "November 13, 2023",
  },
];

const News = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary mb-12 text-center font-serif">
          Latest News and Updates
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item) => (
            <div
              key={item.title}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <span className="text-accent text-sm font-medium tracking-wide">{item.category}</span>
              <h3 className="font-semibold text-lg mt-2 mb-4 text-primary font-sans tracking-wide">{item.title}</h3>
              <div className="flex items-center text-gray-500 text-sm mb-6 font-light">
                <Calendar className="h-4 w-4 mr-2" />
                {item.date}
              </div>
              <Button
                variant="outline"
                className="w-full group hover:bg-gradient-to-r from-ph-blue to-primary-dark hover:text-white transition-all duration-300 font-medium tracking-wider"
              >
                Read more
                <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;