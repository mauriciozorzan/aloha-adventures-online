import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X, Plus } from "lucide-react";
import heroImage from "@/assets/tours/lanikai-pillbox.jpg";

const PricingWhatsIncluded = () => {
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
            Booking & Pricing Policies
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2">
            Pricing & What's Included
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mt-4">
            Boutique Island Adventures — the more friends you bring, the more you save!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Sunrise Tours */}
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="bg-gradient-to-r from-sunset to-coral p-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-primary-foreground">
                  🌅 Sunrise Tours
                </h3>
                <p className="text-primary-foreground/80 text-sm mt-1">4 hours</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">1 guest</span>
                    <span className="text-xl font-bold text-primary">$320</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">2 guests</span>
                    <span className="text-xl font-bold text-primary">$210 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">3 guests</span>
                    <span className="text-xl font-bold text-primary">$180 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-palm/5 -mx-6 px-6 rounded-lg">
                    <span className="text-foreground font-semibold">4+ guests</span>
                    <span className="text-xl font-bold text-palm">$150 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/tours">View Sunrise Tours</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* 8-Hour Boutique Tours */}
            <div className="bg-card rounded-2xl shadow-card overflow-hidden">
              <div className="bg-gradient-ocean p-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-primary-foreground">
                  🏝️ 8-Hour Boutique Tours
                </h3>
                <p className="text-primary-foreground/80 text-sm mt-1">Full day adventure</p>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">1 guest</span>
                    <span className="text-xl font-bold text-primary">$520</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">2 guests</span>
                    <span className="text-xl font-bold text-primary">$320 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground font-medium">3 guests</span>
                    <span className="text-xl font-bold text-primary">$270 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                  </div>
                  <div className="flex justify-between items-center py-3 bg-ocean/5 -mx-6 px-6 rounded-lg">
                    <span className="text-foreground font-semibold">4+ guests</span>
                    <span className="text-xl font-bold text-ocean">$240 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                  </div>
                </div>
                <div className="mt-6">
                  <Button variant="hero" className="w-full" asChild>
                    <Link to="/tours">View Full-Day Tours</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              🌺 <span className="font-semibold text-foreground">Up to 8 guests available</span> — Contact us for larger groups
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Prices shown are per person. All tours include professional guide, refreshments, and photos.
            </p>
          </div>

          {/* What's Included */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
              What's Included in Every Tour
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Professional local guide",
                "Refreshments & snacks",
                "Small group experience (max 8 guests)",
                "Local stories & Hawaiian history",
                "Safety equipment as needed",
                "Hotel pickup & drop-off (Waikiki area)"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-palm/10 rounded-lg p-4">
                  <Check className="w-5 h-5 text-palm flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's Not Included */}
          <div className="mt-12 max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
              What's Not Included
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Gratuities (appreciated but not required)",
                "Personal expenses & souvenirs",
                "Travel insurance",
                "Meals beyond provided snacks",
                "Entrance fees (if applicable)"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-secondary rounded-lg p-4">
                  <X className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Add-Ons & Private Tours */}
          <div className="mt-16 max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
              Add-Ons & Private Tour Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Add-Ons */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-primary" /> Available Add-Ons
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">Professional photo package</span>
                    <span className="font-bold text-primary">+$50</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">Extended tour (+2 hours)</span>
                    <span className="font-bold text-primary">+$75/person</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">Gourmet lunch upgrade</span>
                    <span className="font-bold text-primary">+$35/person</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground">Sunset extension</span>
                    <span className="font-bold text-primary">+$60/person</span>
                  </div>
                </div>
              </div>

              {/* Private Tours */}
              <div className="bg-card rounded-2xl shadow-card p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  🌟 Private Tour Pricing
                </h3>
                <p className="text-muted-foreground mb-4">
                  Enjoy an exclusive experience with just your group and a dedicated guide.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">Private Sunrise Tour (4hr)</span>
                    <span className="font-bold text-primary">$800</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-border">
                    <span className="text-foreground">Private Full-Day Tour (8hr)</span>
                    <span className="font-bold text-primary">$1,400</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-foreground">Custom Itinerary</span>
                    <span className="font-bold text-primary">Contact Us</span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  Private tours include up to 4 guests. Additional guests +$150 each.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Questions? Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PricingWhatsIncluded;