import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CloudRain, RefreshCw } from "lucide-react";
import heroImage from "@/assets/tours/lanikai-pillbox.jpg";

const WeatherSafetyChanges = () => {
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
            Weather, Safety & Tour Changes
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mt-4">
            Your safety is our top priority. Here's how we handle unexpected situations.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Policy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              
              {/* Operator Initiated Cancellations */}
              <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                <div className="bg-gradient-to-r from-ocean to-primary p-6">
                  <div className="flex items-center gap-3">
                    <CloudRain className="w-8 h-8 text-primary-foreground" />
                    <h3 className="text-xl font-serif font-bold text-primary-foreground">
                      Operator-Initiated Cancellations
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We monitor weather and trail conditions closely. If we determine that conditions are unsafe, we will cancel the tour and notify you as soon as possible.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-palm/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">When We May Cancel</h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-palm">•</span>
                          Severe weather warnings (high winds, lightning, flash flood alerts)
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-palm">•</span>
                          Trail closures or hazardous conditions
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-palm">•</span>
                          Ocean conditions that exceed safe limits
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-palm">•</span>
                          Emergency situations or natural disasters
                        </li>
                      </ul>
                    </div>

                    <div className="bg-ocean/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Your Options</h4>
                      <p className="text-muted-foreground text-sm">
                        When we cancel a tour due to weather or safety, you'll receive your choice of:
                      </p>
                      <ul className="text-muted-foreground space-y-1 text-sm mt-2">
                        <li className="flex items-center gap-2">
                          <span className="text-ocean font-bold">✓</span>
                          Full refund to original payment method
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-ocean font-bold">✓</span>
                          Reschedule to another date at no cost
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="text-ocean font-bold">✓</span>
                          Credit toward a future booking
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rescheduling Options */}
              <div className="bg-card rounded-2xl shadow-card overflow-hidden">
                <div className="bg-gradient-to-r from-sunset to-coral p-6">
                  <div className="flex items-center gap-3">
                    <RefreshCw className="w-8 h-8 text-primary-foreground" />
                    <h3 className="text-xl font-serif font-bold text-primary-foreground">
                      Rescheduling Options
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We understand that Hawaii weather can be unpredictable. Here's how we help you get the best experience possible.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-sunset/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Same-Day Alternatives</h4>
                      <p className="text-muted-foreground text-sm">
                        If conditions are marginal, we may offer an alternative tour or adjusted itinerary that allows us to explore safely. Our guides are experts at finding the best conditions on any given day.
                      </p>
                    </div>

                    <div className="bg-coral/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Easy Rescheduling</h4>
                      <ul className="text-muted-foreground space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          <span><span className="font-semibold text-foreground">Weather holds:</span> Reschedule free within 30 days</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          <span><span className="font-semibold text-foreground">Credit never expires:</span> Use it anytime for future visits</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-coral">•</span>
                          <span><span className="font-semibold text-foreground">Flexible transfers:</span> Credits can be used by friends/family</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-secondary rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Light Rain Policy</h4>
                      <p className="text-muted-foreground text-sm">
                        Light rain is common in Hawaii and usually doesn't affect our tours. In fact, some of our most beautiful moments happen during passing showers when rainbows appear! We only cancel for safety concerns, not for typical tropical weather.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center">
                How We Keep You Informed
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Before Your Tour</h4>
                  <p className="leading-relaxed">
                    We monitor conditions 48 hours before your tour and will contact you if we anticipate any issues. You'll receive a confirmation text or email the evening before with the latest update.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Day-Of Decisions</h4>
                  <p className="leading-relaxed">
                    If conditions change unexpectedly on the morning of your tour, we'll contact you at least 2 hours before your scheduled pickup time with your options.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Questions about weather or tour conditions?
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WeatherSafetyChanges;