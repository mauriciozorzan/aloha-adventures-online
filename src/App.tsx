import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Tours from "./pages/Tours";
import TourDetail from "./pages/TourDetail";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import TravelingWithAloha from "./pages/TravelingWithAloha";
import Contact from "./pages/Contact";
import PricingWhatsIncluded from "./pages/PricingWhatsIncluded";
import CancellationsRefunds from "./pages/CancellationsRefunds";
import WeatherSafetyChanges from "./pages/WeatherSafetyChanges";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/pricing-whats-included" element={<PricingWhatsIncluded />} />
          <Route path="/cancellations-refunds" element={<CancellationsRefunds />} />
          <Route path="/weather-safety-changes" element={<WeatherSafetyChanges />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/traveling-with-aloha" element={<TravelingWithAloha />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
