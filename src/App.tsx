import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Health from "./pages/Health";
import Education from "./pages/Education";
import Business from "./pages/Business";
import Tourism from "./pages/Tourism";
import AboutUs from "./pages/AboutUs";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import Executive from "./pages/Executive";
import Legislative from "./pages/Legislative";
import Judiciary from "./pages/Judiciary";
import ContactUs from "./pages/ContactUs";
import Feedback from "./pages/Feedback";
import SocialMedia from "./pages/SocialMedia";
import Hotlines from "./pages/Hotlines";
import DisasterInfo from "./pages/DisasterInfo";
import CovidUpdates from "./pages/CovidUpdates";
import DigitalPayment from "./pages/DigitalPayment";
import VaccinationUpdates from "./pages/VaccinationUpdates";
import EconomicPlan from "./pages/EconomicPlan";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/health" element={<Health />} />
          <Route path="/education" element={<Education />} />
          <Route path="/business" element={<Business />} />
          <Route path="/tourism" element={<Tourism />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/executive" element={<Executive />} />
          <Route path="/legislative" element={<Legislative />} />
          <Route path="/judiciary" element={<Judiciary />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/social-media" element={<SocialMedia />} />
          <Route path="/hotlines" element={<Hotlines />} />
          <Route path="/disaster-info" element={<DisasterInfo />} />
          <Route path="/covid-updates" element={<CovidUpdates />} />
          <Route path="/digital-payment" element={<DigitalPayment />} />
          <Route path="/vaccination-updates" element={<VaccinationUpdates />} />
          <Route path="/economic-plan" element={<EconomicPlan />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;