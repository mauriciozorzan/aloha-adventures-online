import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import samanthaMoonImg from "@/assets/guides/samantha-moon.jpg";
import joelSearlesImg from "@/assets/guides/joel-searles.jpg";

const guides = [
  {
    name: "Samantha Moon",
    role: "Lead Guide & Founder",
    bio: "With a deep love for Hawaii's natural beauty, Samantha co-founded Wave & Wander to share authentic island experiences with adventurers worldwide.",
    image: samanthaMoonImg
  },
  {
    name: "Joel Searles",
    role: "Lead Guide & Founder",
    bio: "Joel's passion for exploration and storytelling brings every tour to life, creating unforgettable memories on Oahu's trails and beaches.",
    image: joelSearlesImg
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        {/* About Wave & Wander */}
        <div className="max-w-3xl mx-auto text-center mb-20">
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

        {/* Meet Your Guides */}
        <div>
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Your Local Experts
            </span>
            <h3 className="text-2xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Meet Your Guides
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {guides.map((guide) => (
              <div
                key={guide.name}
                className="bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 text-center"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-xl text-card-foreground mb-1">
                    {guide.name}
                  </h4>
                  <p className="text-primary text-sm font-medium mb-3">
                    {guide.role}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {guide.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
