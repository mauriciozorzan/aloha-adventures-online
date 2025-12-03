import { Link } from "react-router-dom";
import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Tour } from "@/data/tours";

// Import tour images
import kokoHeadImg from "@/assets/tours/koko-head.jpg";
import lanikaiPillboxImg from "@/assets/tours/lanikai-pillbox.jpg";
import windwardImg from "@/assets/tours/windward.jpg";
import westSideImg from "@/assets/tours/west-side.jpg";
import northShoreImg from "@/assets/tours/north-shore.jpg";
import kaneoheImg from "@/assets/tours/kaneohe.jpg";
import customImg from "@/assets/tours/custom.jpg";

const tourImages: Record<string, string> = {
  'koko-head-sunrise': kokoHeadImg,
  'lanikai-pillbox-sunrise': lanikaiPillboxImg,
  'windward-coast-adventure': windwardImg,
  'west-side-golden-coast': westSideImg,
  'north-shore-experience': northShoreImg,
  'kaneohe-scenic-tour': kaneoheImg,
  'custom-adventure': customImg,
};

interface TourCardProps {
  tour: Tour;
  index?: number;
}

const TourCard = ({ tour, index = 0 }: TourCardProps) => {
  return (
    <Link
      to={`/tour/${tour.id}`}
      className="group block bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-500 transform hover:-translate-y-2"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={tourImages[tour.id]}
          alt={tour.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 flex flex-col items-end gap-1">
          <span className="bg-coral text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            {tour.tourType === 'sunrise' ? '$150–$320/person' : '$195–$520/person'}
          </span>
          <span className="bg-coral/90 text-accent-foreground px-2 py-0.5 rounded-full text-xs">
            Varies by group size
          </span>
        </div>
        <div className="absolute top-4 left-4">
          <span className="bg-background/90 backdrop-blur-sm text-foreground px-3 py-1 rounded-full text-sm font-medium">
            {tour.location}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-card-foreground mb-2 group-hover:text-primary transition-colors">
          {tour.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {tour.shortDescription}
        </p>

        <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{tour.duration}</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>Up to 4 guests</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground/70">Adjustable to 8 people</p>
        </div>

        <div className="flex items-center justify-between">
          <span className={`text-xs font-medium px-2 py-1 rounded-full ${
            tour.difficulty === 'Easy' ? 'bg-palm/10 text-palm' :
            tour.difficulty === 'Moderate' ? 'bg-sunset/10 text-sunset' :
            'bg-lava/10 text-lava'
          }`}>
            {tour.difficulty}
          </span>
          <Button variant="ghost" className="text-primary font-semibold group-hover:bg-primary/10">
            View Details →
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default TourCard;
