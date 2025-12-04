import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Compass, MapPin } from "lucide-react";
import logo from "@/assets/logo.jpg";
import heroImage from "@/assets/tours/kaneohe.jpg";

import samanthaMoonImg from "@/assets/guides/samantha-moon.jpg";
import joelSearlesImg from "@/assets/guides/joel-searles.jpg";

const team = [
  {
    name: "Samantha Moon",
    role: "Founder & Lead Guide",
    bio: "After seven years of exploring Oʻahu's trails, beaches, and hidden gems, Samantha founded Wave & Wander to share authentic island experiences with travelers seeking more than the typical tourist route.",
    image: samanthaMoonImg
  },
  {
    name: "Joel Searles",
    role: "Lead Guide",
    bio: "Joel's passion for exploration and storytelling brings every tour to life, creating unforgettable memories on Oahu's trails and beaches with his infectious enthusiasm for adventure.",
    image: joelSearlesImg
  }
];

const values = [
  {
    icon: Heart,
    title: "Aloha Spirit",
    description: "We share the true spirit of aloha—kindness, respect, and genuine hospitality in everything we do."
  },
  {
    icon: Shield,
    title: "Safety Excellence",
    description: "Your safety is our top priority. All guides are certified and equipped for any situation."
  },
  {
    icon: Compass,
    title: "Authentic Experiences",
    description: "We take you beyond the tourist spots to experience the real Hawaii that locals treasure."
  },
  {
    icon: MapPin,
    title: "Environmental Respect",
    description: "We practice and teach Leave No Trace principles, protecting Hawaii for future generations."
  }
];

const About = () => {
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
          <img 
            src={logo} 
            alt="Wave & Wander Adventure Tours Logo" 
            className="w-24 h-24 mx-auto rounded-full shadow-xl object-cover mb-6"
          />
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-2">
            About Wave & Wander
          </h1>
          <p className="text-lg text-coral-light italic">Adventure Tours</p>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mt-4">
            Where adventure meets aloha — local guides, authentic experiences, unforgettable memories.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
                Born from a Love of the 'Āina
              </h2>
            </div>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>
                Wave & Wander Adventure Tours was born in 2025 from a simple belief: the best way to experience Hawaiʻi is to slow down, lace up your shoes, feel the earth beneath you, and let the trail tell its story.
              </p>
              <p>
                Founded by Samantha Moon, Wave & Wander began as a passion project—an idea shaped by seven years of living, exploring, hiking, and falling deeply in love with the island of Oʻahu. Although not originally from Hawaiʻi, Samantha arrived with a traveler's curiosity and stayed because the land, the ocean, and the people continually revealed new layers of beauty, history, and aloha. Over time, friends and visitors began asking for hikes, hidden gems, and off-the-beaten-path adventures—something more personal than a large commercial tour and more intentional than a sightseeing shuttle.
              </p>
              <p className="text-primary font-semibold text-xl text-center italic">
                Wave & Wander was built to fill that space.
              </p>
              <p>
                We are not a high-volume, "hop in, hop out" tour company. We're a boutique, adventure-minded experience crafted for travelers who want to <em>feel</em> Hawaiʻi rather than just observe it. Our tours blend hiking, ocean views, breathtaking sunrises, and local history with genuine connection and small-group warmth. We go places big tour buses don't touch—quiet ridgelines, tucked-away lookouts, and stories that live between the waves and the wind.
              </p>
              <p>
                At our core, Wave & Wander exists to share the aloha spirit in a way that is respectful, responsible, and deeply human. We honor the land, tread lightly, and prioritize experiences that uplift Hawaiʻi's natural beauty rather than overwhelm it. Every tour is intentionally crafted: the pace, the storytelling, the moments of silence, the scenic pauses, and the shared excitement of discovery.
              </p>
              <p className="text-foreground font-medium text-center">
                Wave & Wander is for those who wander with heart—people who love adventure, culture, and finding meaning in the places they explore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">2025</div>
              <div className="text-muted-foreground">Founded</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">8 max</div>
              <div className="text-muted-foreground">Guests Per Tour</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">5★</div>
              <div className="text-muted-foreground">Service Quality</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Local Guides</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {values.map((value) => (
              <div key={value.title} className="flex gap-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              The People Behind the Adventures
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
              Meet Your Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl overflow-hidden shadow-card text-center">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif font-bold text-xl text-card-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-ocean text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Ready to Explore?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join us for an unforgettable Oahu adventure and see why thousands of guests rate us 5 stars.
          </p>
          <Button variant="coral" size="xl" asChild>
            <Link to="/tours">Browse Our Tours</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
