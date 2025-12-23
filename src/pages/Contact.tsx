import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/contact-hero.jpg";
import sectionImage from "@/assets/contact-section.jpg";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    toast({
      title: "Message Sent! 🌺",
      description: "We'll get back to you within 24 hours. Mahalo!",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

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
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <a href="mailto:waveandwanderadventuretours@gmail.com" className="text-primary hover:underline text-sm break-all">waveandwanderadventuretours@gmail.com</a>
                    <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Location</h3>
                    <p className="text-muted-foreground">Honolulu, Oahu, Hawaii</p>
                    <p className="text-sm text-muted-foreground">Tours depart from various locations</p>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="bg-secondary rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-4">Frequently Asked Questions</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Cancellation Policy:</strong> Free cancellation up to 24 hours before your tour.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">What to Bring:</strong> Comfortable shoes, water, sunscreen, and a sense of adventure!
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      <strong className="text-foreground">Group Size:</strong> We keep groups small (4-8 max) for a better experience.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Section Image */}
              <div className="mt-8 rounded-2xl overflow-hidden shadow-card">
                <img 
                  src={sectionImage} 
                  alt="Beautiful Hawaiian beach with turquoise water and palm trees" 
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 shadow-elevated">
              <h2 className="text-2xl font-serif font-bold text-card-foreground mb-6">
                Send Us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="mb-2 block">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="mb-2 block">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="mb-2 block">Phone (Optional)</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(808) 555-0123"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="mb-2 block">Subject</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Tour inquiry"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="mb-2 block">Message</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your questions or what you're looking for..."
                    rows={5}
                    required
                  />
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
