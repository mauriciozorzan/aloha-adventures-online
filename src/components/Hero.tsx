import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-oahu.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Stunning aerial view of Oahu Hawaii coastline with mountains and turquoise ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground pt-20">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Explore Oahu's Hidden Treasures
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Wave & Wander
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-2 animate-fade-in opacity-0 font-serif italic" style={{ animationDelay: '0.5s' }}>
            Your Oahu Adventure Starts Here
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            From breathtaking sunrise hikes to pristine hidden beaches, 
            discover the real Hawaii with our locally-guided adventures.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="xl" asChild>
              <Link to="/tours">Explore Our Tours</Link>
            </Button>
            <Button variant="outlineLight" size="xl" asChild>
              <Link to="/testimonials">See Reviews</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <Link
        to="/tours"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </Link>
    </section>
  );
};

export default Hero;
