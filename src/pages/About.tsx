import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Shield, Heart, Award, Users, MapPin, Compass } from "lucide-react";
import logo from "@/assets/logo.jpg";

const team = [
  {
    name: "Kai Nakamura",
    role: "Founder & Lead Guide",
    bio: "Born and raised on Oahu's windward side, Kai has been exploring the island since childhood. After 10 years in outdoor education, he founded Wave & Wander to share his love of Hawaii with visitors from around the world."
  },
  {
    name: "Leilani Torres",
    role: "Operations Manager",
    bio: "Leilani brings her background in hospitality and passion for sustainable tourism to ensure every guest has a seamless, memorable experience while respecting the 'āina (land)."
  },
  {
    name: "Marcus Chen",
    role: "Senior Guide",
    bio: "A certified wilderness first responder and ocean safety expert, Marcus specializes in our hiking adventures and ensures the highest safety standards on every tour."
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
      <section className="pt-32 pb-16 bg-gradient-tropical text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
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
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2 mb-6">
              Born from a Love of the 'Āina
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p>
                Wave & Wander Adventure Tours was founded in 2018 by Kai Nakamura, a lifelong Oahu resident who grew up 
                hiking the same trails and swimming the same beaches we now share with our guests. After 
                years of watching tour buses rush visitors through Hawaii without showing them its true 
                beauty, Kai decided to create something different.
              </p>
              <p>
                We believe the best way to experience Hawaii isn't from a bus window—it's with your feet 
                on the trail, the salt spray on your face, and a local by your side sharing stories passed 
                down through generations. Our small group tours take you to the places that make Oahu 
                special: hidden beaches, sunrise viewpoints, and local favorites that aren't in any guidebook.
              </p>
              <p>
                Today, our team of passionate local guides continues that mission, helping thousands of 
                visitors each year discover the authentic Hawaii they came looking for.
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
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">6+</div>
              <div className="text-muted-foreground">Years of Adventures</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15K+</div>
              <div className="text-muted-foreground">Happy Guests</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">4.9★</div>
              <div className="text-muted-foreground">Average Rating</div>
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
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl p-6 shadow-card text-center">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-serif font-bold text-xl text-card-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-medium text-sm mb-4">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
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
