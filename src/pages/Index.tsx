import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Directory from "@/components/Directory";
import Services from "@/components/Services";
import News from "@/components/News";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />
        <Services />
        <Directory />
        <News />
      </main>
      <Footer />
    </div>
  );
};

export default Index;