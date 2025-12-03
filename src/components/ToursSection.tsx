import { tours } from "@/data/tours";
import TourCard from "./TourCard";

const ToursSection = () => {
  return (
    <section id="tours" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Adventures
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Discover Our Tours
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Choose from our carefully curated selection of Hawaiian adventures, 
            each designed to create memories that last a lifetime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tours.map((tour, index) => (
            <TourCard key={tour.id} tour={tour} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
