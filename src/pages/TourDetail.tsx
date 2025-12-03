import { useParams, Link } from "react-router-dom";
import { getTourById, tourFAQs } from "@/data/tours";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowLeft, Clock, MapPin, Users, CheckCircle, Mountain, Sparkles, Car } from "lucide-react";

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
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-primary-foreground mb-2">
              {tour.name}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 italic">
              Small-group, boutique-guided experience
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            
            {/* ⭐ Tour Description */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">⭐</span>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Tour Description
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                {tour.fullDescription}
              </p>
            </section>

            {/* 🌿 What You'll Experience */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌿</span>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  What You'll Experience
                </h2>
              </div>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                {tour.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-palm mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {tour.emotionalWords.map((word, index) => (
                  <span
                    key={index}
                    className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </section>

            {/* 🚙 What's Included */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🚙</span>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  What's Included
                </h2>
              </div>
              <div className="bg-palm/5 rounded-xl p-6">
                <ul className="space-y-2">
                  {tour.included.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-foreground">
                      <CheckCircle className="w-4 h-4 text-palm mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Tour Details Grid */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 🕒 Duration */}
              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Duration</h3>
                </div>
                <p className="text-muted-foreground text-lg">{tour.duration}</p>
              </div>

              {/* 👣 Activity Level */}
              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Mountain className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Activity Level</h3>
                </div>
                <p className="text-muted-foreground text-lg">{tour.difficulty}</p>
              </div>

              {/* Group Size */}
              <div className="bg-secondary rounded-xl p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Users className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">Group Size</h3>
                </div>
                <p className="text-muted-foreground text-lg">{tour.groupSize}</p>
              </div>
            </section>

            {/* 📍 Regions We Explore */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">📍</span>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Regions We Explore
                </h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {tour.regions.map((region, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-ocean/10 text-ocean border border-ocean/20 rounded-lg font-medium"
                  >
                    {region}
                  </span>
                ))}
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

            {/* ❓ FAQ */}
            <section>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">❓</span>
                <h2 className="text-2xl font-serif font-bold text-foreground">
                  Frequently Asked Questions
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {tourFAQs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left text-foreground hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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
