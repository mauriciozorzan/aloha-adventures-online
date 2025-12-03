import { testimonials, reviewPlatforms } from "@/data/testimonials";
import TestimonialCard from "./TestimonialCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { Star, ExternalLink } from "lucide-react";

const TestimonialsPreview = () => {
  const featuredTestimonials = testimonials.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Happy Adventurers
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            What Our Guests Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Real stories from real travelers who've explored Oahu with us.
          </p>

          {/* Review Platform Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a 
              href={reviewPlatforms.google.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-card hover:shadow-elevated transition-all"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-sunset fill-sunset" />
                ))}
              </div>
              <span className="font-bold text-foreground">{reviewPlatforms.google.rating}</span>
              <span className="text-muted-foreground">({reviewPlatforms.google.reviewCount} reviews)</span>
              <span className="text-sm text-primary font-medium">Google</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
            <a 
              href={reviewPlatforms.tripadvisor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-card px-6 py-3 rounded-full shadow-card hover:shadow-elevated transition-all"
            >
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-sunset fill-sunset" />
                ))}
              </div>
              <span className="font-bold text-foreground">{reviewPlatforms.tripadvisor.rating}</span>
              <span className="text-muted-foreground">({reviewPlatforms.tripadvisor.reviewCount} reviews)</span>
              <span className="text-sm text-palm font-medium">TripAdvisor</span>
              <ExternalLink className="w-4 h-4 text-muted-foreground" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/testimonials">Read All Reviews</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;
