import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ToursSection from "@/components/ToursSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ToursSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
