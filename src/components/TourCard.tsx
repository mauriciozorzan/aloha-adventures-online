import { Link } from "react-router-dom";
import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Tour } from "@/data/tours";

// Import tour images
import naPaliImg from "@/assets/tours/na-pali.jpg";
import volcanoImg from "@/assets/tours/volcano.jpg";
import molokiniImg from "@/assets/tours/molokini.jpg";
import luauImg from "@/assets/tours/luau.jpg";
import haleakalaImg from "@/assets/tours/haleakala.jpg";
import whaleImg from "@/assets/tours/whale.jpg";

const tourImages: Record<string, string> = {
  'na-pali-coast': naPaliImg,
  'volcano-helicopter': volcanoImg,
  'snorkel-molokini': molokiniImg,
  'luau-experience': luauImg,
  'sunrise-haleakala': haleakalaImg,
  'whale-watching': whaleImg,
};

interface TourCardProps {
  tour: Tour;
  index: number;
}

const TourCard = ({ tour, index }: TourCardProps) => {
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
        <div className="absolute top-4 right-4">
          <span className="bg-coral text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
            ${tour.price}
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

        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{tour.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            <span>{tour.groupSize}</span>
          </div>
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
