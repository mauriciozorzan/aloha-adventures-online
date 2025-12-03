import { useParams, Link } from "react-router-dom";
import { getTourById } from "@/data/tours";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, Users, CheckCircle, XCircle, Mountain } from "lucide-react";

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

const TourDetail = () => {
  const { id } = useParams<{ id: string }>();
  const tour = getTourById(id || "");

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <Header />
        <div className="text-center pt-20">
          <h1 className="text-4xl font-serif font-bold mb-4">Tour Not Found</h1>
          <p className="text-muted-foreground mb-6">The tour you're looking for doesn't exist.</p>
          <Button variant="hero" asChild>
            <Link to="/tours">Browse All Tours</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] mt-16 md:mt-20">
        <img
          src={tourImages[tour.id]}
          alt={tour.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 flex items-end">
          <div className="container mx-auto px-4 pb-8 md:pb-12">
            <Link
              to="/tours"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-4 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Tours
            </Link>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-4">
              {tour.name}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-primary-foreground/90">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span>{tour.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{tour.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>{tour.groupSize}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mountain className="w-5 h-5" />
                <span>{tour.difficulty}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                About This Tour
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {tour.fullDescription}
              </p>
            </section>

            {/* Highlights */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                Tour Highlights
              </h2>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* What's Included */}
            <section className="mb-10">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                What's Included
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-palm/5 rounded-xl p-6">
                  <h3 className="font-semibold text-palm mb-3">Included</h3>
                  <ul className="space-y-2">
                    {tour.included.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground">
                        <CheckCircle className="w-4 h-4 text-palm mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-lava/5 rounded-xl p-6">
                  <h3 className="font-semibold text-lava mb-3">Not Included</h3>
                  <ul className="space-y-2">
                    {tour.notIncluded.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-foreground">
                        <XCircle className="w-4 h-4 text-lava mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Meeting Point */}
            <section className="bg-secondary rounded-xl p-6">
              <h2 className="text-xl font-serif font-bold text-foreground mb-3">
                Meeting Point
              </h2>
              <p className="text-muted-foreground flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                {tour.meetingPoint}
              </p>
            </section>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-gradient-ocean text-primary-foreground rounded-t-2xl p-6 text-center">
                <p className="text-sm opacity-90">Starting from</p>
                <p className="text-4xl font-bold">${tour.price}</p>
                <p className="text-sm opacity-90">per person</p>
              </div>
              <BookingForm tour={tour} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TourDetail;
