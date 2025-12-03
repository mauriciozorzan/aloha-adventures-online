import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedTours from "@/components/FeaturedTours";
import Footer from "@/components/Footer";
import { Shield, Heart, Award, MapPin } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Local Expertise",
    description: "Born and raised in Oahu—we know the hidden gems."
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Certified guides and top-rated safety standards."
  },
  {
    icon: Heart,
    title: "Small Groups",
    description: "Intimate experiences with personalized attention."
  },
  {
    icon: Award,
    title: "5-Star Rated",
    description: "Hundreds of 5-star reviews on Google & TripAdvisor."
  }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />

        {/* Why Choose Us */}
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="text-center">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <FeaturedTours />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
