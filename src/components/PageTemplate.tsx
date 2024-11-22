import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

interface PageTemplateProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageTemplate = ({ title, subtitle, children }: PageTemplateProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Link>

          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-4xl font-bold text-primary mb-4 font-serif">{title}</h1>
            {subtitle && (
              <p className="text-gray-600 max-w-2xl mx-auto font-light tracking-wide">
                {subtitle}
              </p>
            )}
          </div>

          <div className="animate-fade-in">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PageTemplate;