import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-hawaii.jpg";

const Hero = () => {
  const scrollToTours = () => {
    document.getElementById('tours')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful aerial view of Na Pali Coast, Hawaii with emerald cliffs and turquoise ocean"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl font-medium mb-4 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            Discover the Magic of Hawaii
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s' }}>
            Unforgettable Adventures <br />Await You
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            From breathtaking helicopter rides over active volcanoes to serene snorkeling in crystal-clear waters, 
            experience Hawaii like never before with our expert-guided tours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <Button variant="hero" size="xl" onClick={scrollToTours}>
              Explore Tours
            </Button>
            <Button variant="outlineLight" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToTours}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground animate-bounce cursor-pointer"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;
