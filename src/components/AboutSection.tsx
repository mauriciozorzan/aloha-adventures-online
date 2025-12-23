import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* About Wave & Wander */}
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
            Wave & Wander Adventure Tours
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Where adventure meets aloha. We're a small, locally-owned tour company based on Oahu, 
            dedicated to sharing the authentic beauty of Hawaii with travelers from around the world.
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            Our intimate, small-group tours (max 8 guests) ensure personalized attention and 
            genuine connections. Whether you're chasing sunrises from volcanic craters, exploring 
            hidden beaches, or discovering the stories behind sacred sites—we'll show you the 
            Hawaii that locals love.
          </p>
          <Link to="/about">
            <Button variant="outline" size="lg">
              Learn More About Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
