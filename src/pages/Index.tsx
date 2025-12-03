import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeaturedTours />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
