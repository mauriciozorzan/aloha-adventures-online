import { Star, Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  const platformColors = {
    google: 'bg-blue-500',
    tripadvisor: 'bg-green-500',
    direct: 'bg-primary'
  };

  return (
    <div className="bg-card rounded-2xl p-6 shadow-card hover:shadow-elevated transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
          {testimonial.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
          <p className="text-sm text-muted-foreground">{testimonial.location}</p>
        </div>
        {testimonial.platform && (
          <div className={`w-2 h-2 rounded-full ${platformColors[testimonial.platform]}`} title={testimonial.platform} />
        )}
      </div>

      <div className="flex items-center gap-1 mb-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? 'text-sunset fill-sunset' : 'text-muted'}`}
          />
        ))}
        <span className="text-sm text-muted-foreground ml-2">{testimonial.date}</span>
      </div>

      <p className="text-sm font-medium text-primary mb-3">{testimonial.tourName}</p>

      <div className="relative">
        <Quote className="absolute -top-1 -left-1 w-6 h-6 text-primary/10" />
        <p className="text-muted-foreground leading-relaxed pl-4">
          {testimonial.review}
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
