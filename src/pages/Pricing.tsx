import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tours/lanikai-pillbox.jpg";

const Pricing = () => {
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
            🌺 Rates
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Boutique Island Adventures — the more friends you bring, the more you save!
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
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
          <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
              What's Included in Every Tour
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Professional local guide",
                "Refreshments & snacks",
                "Photos of your adventure",
                "Small group experience",
                "Local stories & history",
                "Safety equipment as needed"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-secondary rounded-lg p-4">
                  <span className="text-palm">✓</span>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
