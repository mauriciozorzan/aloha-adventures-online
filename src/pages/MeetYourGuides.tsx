import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/tours/windward.jpg";
import samanthaMoonImg from "@/assets/guides/samantha-moon.jpg";
import joelSearlesImg from "@/assets/guides/joel-searles.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const team = [
  {
    name: "Samantha Moon",
    role: "Co-Founder & Lead Guide",
    bio: "After seven years of exploring Oʻahu's trails, beaches, and hidden gems, Samantha co-founded Wave & Wander to share authentic island experiences with travelers seeking more than the typical tourist route.",
    image: samanthaMoonImg
  },
  {
    name: "Joel Searles",
    role: "Co-Founder & Lead Guide",
    bio: "Joel's passion for exploration and storytelling brings every tour to life, creating unforgettable memories on Oahu's trails and beaches with his infectious enthusiasm for adventure.",
    image: joelSearlesImg
  }
];

const MeetYourGuides = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 text-primary-foreground relative">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/60 to-foreground/80" />
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-coral-light font-semibold text-sm uppercase tracking-wider">
            The People Behind the Adventures
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2">
            Meet Your Guides
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mt-4">
            Get to know the passionate locals who will lead your Oʻahu adventure.
          </p>
        </div>
      </section>

      {/* Guides Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {team.map((member, index) => (
                <AccordionItem 
                  key={member.name} 
                  value={`guide-${index}`}
                  className="bg-card rounded-2xl shadow-card border-none overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline">
                    <div className="flex items-center gap-4 text-left">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-serif font-bold text-lg text-card-foreground">{member.name}</h3>
                        <p className="text-primary font-medium text-sm">{member.role}</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6">
                    <div className="flex flex-col md:flex-row gap-6 pt-2">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full md:w-48 h-48 rounded-xl object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MeetYourGuides;