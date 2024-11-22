import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Directory from "@/components/Directory";
import Services from "@/components/Services";
import News from "@/components/News";
import Footer from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { toast } from "@/components/ui/use-toast";

const Index = () => {
  useEffect(() => {
    // Welcome toast for first-time visitors
    if (!localStorage.getItem("welcomed")) {
      toast({
        title: "Welcome to GOV.PH",
        description: "Your gateway to Philippine government services",
        duration: 5000,
      });
      localStorage.setItem("welcomed", "true");
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">
      <Header />
      <ScrollArea className="flex-grow">
        <main className="relative">
          {/* Decorative Elements */}
          <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white pointer-events-none" />
          
          {/* Content */}
          <div className="relative z-10">
            <Hero />
            <div className="max-w-7xl mx-auto px-4 space-y-24 py-12">
              <Services />
              <Directory />
              <News />
            </div>
          </div>
        </main>
      </ScrollArea>
      <Footer />
    </div>
  );
};

export default Index;