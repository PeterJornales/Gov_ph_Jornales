import { Globe, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <img src="/lovable-uploads/4e18e7ec-ccd1-4172-bcac-b4f2c30639f2.png" alt="Philippine Government Logo" className="h-10 w-auto" />
            <h1 className="ml-3 text-white font-semibold">GOV.PH</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <nav className="flex space-x-4">
              <a href="#services" className="text-white hover:text-accent transition-colors">Services</a>
              <a href="#directory" className="text-white hover:text-accent transition-colors">Directory</a>
              <a href="#news" className="text-white hover:text-accent transition-colors">News</a>
            </nav>
            <button className="flex items-center text-white hover:text-accent transition-colors">
              <Globe className="h-5 w-5 mr-1" />
              <span>EN</span>
            </button>
          </div>

          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-2">
              <a href="#services" className="text-white hover:text-accent transition-colors">Services</a>
              <a href="#directory" className="text-white hover:text-accent transition-colors">Directory</a>
              <a href="#news" className="text-white hover:text-accent transition-colors">News</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;