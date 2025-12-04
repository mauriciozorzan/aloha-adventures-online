import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TourCard from "@/components/TourCard";
import { tours } from "@/data/tours";
import { useState } from "react";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/tours/north-shore.jpg";

const categories = [
  { id: 'all', name: 'All Tours' },
  { id: 'hiking', name: 'Hiking Adventures' },
  { id: 'sightseeing', name: 'Island Tours' },
  { id: 'custom', name: 'Custom Experiences' },
];

const Tours = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredTours = activeCategory === 'all' 
    ? tours 
    : tours.filter(tour => tour.category === activeCategory);

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
            Our Adventures
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            From sunrise hikes to hidden beaches, find your perfect Oahu adventure.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "px-5 py-2 rounded-full font-medium transition-all",
                  activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                )}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Tours Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour, index) => (
              <TourCard key={tour.id} tour={tour} index={index} />
            ))}
          </div>

          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No tours found in this category.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Tours;
