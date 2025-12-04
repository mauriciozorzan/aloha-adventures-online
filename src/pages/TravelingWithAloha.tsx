import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Users, Footprints } from "lucide-react";
import heroImage from "@/assets/tours/makapuu.jpg";

const TravelingWithAloha = () => {
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
          <span className="text-coral-light font-semibold text-sm uppercase tracking-wider">
            Our Philosophy
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mt-2">
            Traveling with Aloha
          </h1>
          <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto mt-4">
            How you travel matters as much as where you go.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed text-center mb-12">
              At Wave & Wander, we believe that how you travel matters as much as where you go. 
              Traveling with aloha means approaching every experience with respect, gratitude, and mindfulness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Respect the Land</h3>
                <p className="text-muted-foreground text-sm">
                  We tread lightly, follow Leave No Trace principles, and teach guests to honor the 'āina (land) that hosts us.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Honor the Culture</h3>
                <p className="text-muted-foreground text-sm">
                  We share Hawaiian history and traditions authentically, fostering understanding and appreciation for this special place.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Footprints className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">Travel Mindfully</h3>
                <p className="text-muted-foreground text-sm">
                  Small groups, slow paces, and intentional moments—we believe the journey is just as important as the destination.
                </p>
              </div>
            </div>

            <div className="bg-secondary rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-6 text-center">
                What Traveling with Aloha Means
              </h2>
              <div className="text-muted-foreground space-y-4 leading-relaxed">
                <p>
                  Aloha is more than a greeting—it's a way of being. It embodies love, compassion, and a deep respect for all living things. When we travel with aloha, we carry this spirit with us wherever we go.
                </p>
                <p>
                  For us, this means taking only photographs and leaving only footprints. It means listening to the stories of the land and the people who have called it home for generations. It means slowing down enough to truly see, hear, and feel the beauty around us.
                </p>
                <p>
                  We invite our guests to embrace this philosophy—to approach each trail, each beach, each sunrise with gratitude and wonder. Together, we can ensure that the Hawaiʻi we love today remains beautiful for generations to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TravelingWithAloha;