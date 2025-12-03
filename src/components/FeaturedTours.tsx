import { tours } from "@/data/tours";
import TourCard from "./TourCard";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const FeaturedTours = () => {
  const featuredTours = tours.slice(0, 3);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Popular Adventures
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Featured Tours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Discover Oahu's most breathtaking experiences with our top-rated adventures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>

        <div className="text-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/tours" className="flex items-center gap-2">
              View All Tours
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
