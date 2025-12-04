import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials, reviewPlatforms } from "@/data/testimonials";
import { Star, ExternalLink, Camera, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/tours/windward.jpg";

const Testimonials = () => {
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
            Guest Testimonials
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            Real stories from real adventurers who explored Oahu with Wave & Wander.
          </p>
        </div>
      </section>

      {/* Review Platform Stats */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href={reviewPlatforms.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all min-w-[200px]"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-sunset fill-sunset" />
                ))}
              </div>
              <span className="text-4xl font-bold text-foreground mb-1">{reviewPlatforms.google.rating}</span>
              <span className="text-muted-foreground mb-2">{reviewPlatforms.google.reviewCount} reviews</span>
              <span className="text-primary font-semibold flex items-center gap-2">
                Google Reviews
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>

            <a 
              href={reviewPlatforms.tripadvisor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-card p-8 rounded-2xl shadow-card hover:shadow-elevated transition-all min-w-[200px]"
            >
              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-sunset fill-sunset" />
                ))}
              </div>
              <span className="text-4xl font-bold text-foreground mb-1">{reviewPlatforms.tripadvisor.rating}</span>
              <span className="text-muted-foreground mb-2">{reviewPlatforms.tripadvisor.reviewCount} reviews</span>
              <span className="text-palm font-semibold flex items-center gap-2">
                TripAdvisor
                <ExternalLink className="w-4 h-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Guest Photos Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
              Guest Photos & Videos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See the magic through our guests' eyes. Tag us @waveandwander to be featured!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {/* Placeholder for guest photos - these would be real images in production */}
            {Array.from({ length: 8 }).map((_, i) => (
              <div 
                key={i} 
                className="aspect-square bg-gradient-to-br from-primary/20 to-coral/20 rounded-xl flex items-center justify-center"
              >
                {i % 3 === 0 ? (
                  <Video className="w-8 h-8 text-primary/40" />
                ) : (
                  <Camera className="w-8 h-8 text-primary/40" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button variant="outline" asChild>
              <a href="https://instagram.com/waveandwander" target="_blank" rel="noopener noreferrer">
                Follow Us on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* All Reviews */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-12">
            What Our Guests Are Saying
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
            Had an Amazing Experience?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            We'd love to hear about your adventure! Leave us a review and help other travelers discover Oahu.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" asChild>
              <a href={reviewPlatforms.google.url} target="_blank" rel="noopener noreferrer">
                Review on Google
              </a>
            </Button>
            <Button variant="outline" asChild>
              <a href={reviewPlatforms.tripadvisor.url} target="_blank" rel="noopener noreferrer">
                Review on TripAdvisor
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
