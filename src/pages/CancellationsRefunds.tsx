import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Clock, Ban, AlertTriangle } from "lucide-react";
import heroImage from "@/assets/tours/lanikai-pillbox.jpg";

const CancellationsRefunds = () => {
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
            Cancellations & Refunds
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mt-4">
            We understand plans can change. Here's our policy to help you plan with confidence.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Policy Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              
              {/* 48-Hour Cancellation */}
              <div className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-16 h-16 bg-palm/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-palm" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  48-Hour Cancellation Window
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cancel your tour at least 48 hours before your scheduled start time and receive a <span className="font-semibold text-foreground">full refund</span>. No questions asked.
                </p>
                <div className="mt-4 bg-palm/10 rounded-lg p-3">
                  <span className="text-palm font-semibold">100% Refund</span>
                </div>
              </div>

              {/* Non-Refundable Period */}
              <div className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-16 h-16 bg-sunset/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Ban className="w-8 h-8 text-sunset" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  Non-Refundable Period
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Cancellations made less than 48 hours before your tour are <span className="font-semibold text-foreground">non-refundable</span>. However, we'll work with you to reschedule when possible.
                </p>
                <div className="mt-4 bg-sunset/10 rounded-lg p-3">
                  <span className="text-sunset font-semibold">No Refund (Reschedule Available)</span>
                </div>
              </div>

              {/* No-Show Policy */}
              <div className="bg-card rounded-2xl shadow-card p-6 text-center">
                <div className="w-16 h-16 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-coral" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-3">
                  No-Show Policy
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Guests who do not show up for their scheduled tour without prior notice will be considered a <span className="font-semibold text-foreground">no-show</span> and are not eligible for refunds or rescheduling.
                </p>
                <div className="mt-4 bg-coral/10 rounded-lg p-3">
                  <span className="text-coral font-semibold">No Refund or Reschedule</span>
                </div>
              </div>
            </div>

            {/* Detailed Policy Section */}
            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center">
                Policy Details
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">How to Cancel</h4>
                  <p>
                    To cancel your booking, please contact us via email at <span className="text-primary">aloha@waveandwander.com</span> or call us at <span className="text-primary">(808) 555-1234</span>. Be sure to include your booking confirmation number and the name on the reservation.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Refund Processing</h4>
                  <p>
                    Approved refunds will be processed within 5-7 business days and returned to the original payment method. Please note that your bank may take additional time to reflect the refund in your account.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Rescheduling</h4>
                  <p>
                    If you need to reschedule, please contact us as soon as possible. Rescheduling requests made more than 48 hours in advance are accommodated at no additional charge, subject to availability. Requests made within 48 hours may incur a $25 rescheduling fee.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-2">Group Bookings</h4>
                  <p>
                    For group bookings of 6 or more guests, a 50% deposit is required at booking. The remaining balance is due 72 hours before the tour. Cancellation policies apply to the full booking amount.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-4">
                Have questions about our cancellation policy?
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

export default CancellationsRefunds;