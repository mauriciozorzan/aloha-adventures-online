const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Transparent Pricing
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            🌺 Rates
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Boutique Island Adventures — the more friends you bring, the more you save!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Sunrise Tours */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-to-r from-sunset to-coral p-6 text-center">
              <h3 className="text-2xl font-serif font-bold text-primary-foreground">
                🌅 Sunrise Tours
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1">4 hours</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">1 guest</span>
                  <span className="text-xl font-bold text-primary">$320</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">2 guests</span>
                  <span className="text-xl font-bold text-primary">$210 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">3 guests</span>
                  <span className="text-xl font-bold text-primary">$180 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                </div>
                <div className="flex justify-between items-center py-3 bg-palm/5 -mx-6 px-6 rounded-lg">
                  <span className="text-foreground font-semibold">4+ guests</span>
                  <span className="text-xl font-bold text-palm">$150 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* 8-Hour Boutique Tours */}
          <div className="bg-card rounded-2xl shadow-card overflow-hidden">
            <div className="bg-gradient-ocean p-6 text-center">
              <h3 className="text-2xl font-serif font-bold text-primary-foreground">
                🏝️ 8-Hour Boutique Tours
              </h3>
              <p className="text-primary-foreground/80 text-sm mt-1">Full day adventure</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">1 guest</span>
                  <span className="text-xl font-bold text-primary">$520</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">2 guests</span>
                  <span className="text-xl font-bold text-primary">$320 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-foreground font-medium">3 guests</span>
                  <span className="text-xl font-bold text-primary">$270 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                </div>
                <div className="flex justify-between items-center py-3 bg-ocean/5 -mx-6 px-6 rounded-lg">
                  <span className="text-foreground font-semibold">4+ guests</span>
                  <span className="text-xl font-bold text-ocean">$240 <span className="text-sm font-normal text-muted-foreground">each</span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center mt-10">
          <p className="text-muted-foreground text-lg">
            🌺 <span className="font-semibold text-foreground">Up to 8 guests available</span> — Contact us for larger groups
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Prices shown are per person. All tours include professional guide, refreshments, and photos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
