import { Shield, Heart, Award, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Safety First",
    description: "All our tours meet the highest safety standards with certified guides and equipment."
  },
  {
    icon: Heart,
    title: "Local Expertise",
    description: "Our guides are born and raised in Hawaii, sharing authentic stories and hidden gems."
  },
  {
    icon: Award,
    title: "Top Rated",
    description: "Consistently rated 5 stars by thousands of satisfied adventurers."
  },
  {
    icon: Users,
    title: "Small Groups",
    description: "Intimate group sizes ensure personalized attention and better experiences."
  }
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Creating Memories Since 1985
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              For nearly four decades, Aloha Tours has been the premier choice for travelers 
              seeking authentic Hawaiian experiences. What started as a small family operation 
              has grown into Hawaii's most trusted tour company, while maintaining the warmth 
              and aloha spirit that defines our islands.
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Every tour is led by local experts who share not just the beauty of Hawaii, 
              but its rich history, culture, and the stories passed down through generations.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-primary mb-1">38+</div>
                <div className="text-sm text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-primary mb-1">150K+</div>
                <div className="text-sm text-muted-foreground">Happy Travelers</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-primary mb-1">50+</div>
                <div className="text-sm text-muted-foreground">Tour Options</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold text-primary mb-1">4.9★</div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="bg-card p-6 rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-card-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
