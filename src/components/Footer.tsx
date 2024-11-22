import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-primary-dark to-[#0a1829] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">About GOV.PH</h3>
            <ul className="space-y-4">
              {[
                { text: "About Us", path: "/about-us" },
                { text: "Privacy Policy", path: "/privacy-policy" },
                { text: "Terms of Use", path: "/terms-of-use" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center hover:text-accent transition-colors duration-300"
                  >
                    <span className="font-light tracking-wide">{item.text}</span>
                    <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">Government</h3>
            <ul className="space-y-4">
              {[
                { text: "Executive", path: "/executive" },
                { text: "Legislative", path: "/legislative" },
                { text: "Judiciary", path: "/judiciary" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center hover:text-accent transition-colors duration-300"
                  >
                    <span className="font-light tracking-wide">{item.text}</span>
                    <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">Connect</h3>
            <ul className="space-y-4">
              {[
                { text: "Contact Us", path: "/contact-us" },
                { text: "Feedback", path: "/feedback" },
                { text: "Social Media", path: "/social-media" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center hover:text-accent transition-colors duration-300"
                  >
                    <span className="font-light tracking-wide">{item.text}</span>
                    <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-semibold mb-6 text-accent">Emergency</h3>
            <ul className="space-y-4">
              {[
                { text: "Hotlines", path: "/hotlines" },
                { text: "Disaster Info", path: "/disaster-info" },
                { text: "COVID-19 Updates", path: "/covid-updates" },
              ].map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group flex items-center hover:text-accent transition-colors duration-300"
                  >
                    <span className="font-light tracking-wide">{item.text}</span>
                    <ArrowRight className="h-4 w-4 ml-2 opacity-0 group-hover:opacity-100 transform group-hover:translate-x-1 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm font-light tracking-wider text-white/70">© 2023 Republic of the Philippines. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;