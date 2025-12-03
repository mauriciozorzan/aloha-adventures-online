import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon, Minus, Plus, Check } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import type { Tour } from "@/data/tours";

interface BookingFormProps {
  tour: Tour;
}

const BookingForm = ({ tour }: BookingFormProps) => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState<string>("");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isBooked, setIsBooked] = useState(false);

  const totalPrice = (adults * tour.price) + (children * tour.price * 0.5);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!date || !time || !name || !email || !phone) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to complete your booking.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsBooked(true);
    
    toast({
      title: "Booking Confirmed! 🎉",
      description: `Your ${tour.name} adventure is booked for ${format(date, 'PPP')} at ${time}.`,
    });
  };

  if (isBooked) {
    return (
      <div className="bg-card rounded-2xl p-8 shadow-elevated text-center">
        <div className="w-16 h-16 bg-palm/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Check className="w-8 h-8 text-palm" />
        </div>
        <h3 className="text-2xl font-serif font-bold text-card-foreground mb-2">
          Booking Confirmed!
        </h3>
        <p className="text-muted-foreground mb-4">
          Thank you for booking with Aloha Tours. We've sent a confirmation email with all the details.
        </p>
        <div className="bg-secondary rounded-xl p-4 text-left mb-6">
          <p className="text-sm text-muted-foreground mb-1">Confirmation Number</p>
          <p className="font-mono font-bold text-primary">AT-{Math.random().toString(36).substring(2, 8).toUpperCase()}</p>
        </div>
        <Button variant="hero" onClick={() => setIsBooked(false)}>
          Book Another Tour
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-8 shadow-elevated">
      <h3 className="text-xl font-serif font-bold text-card-foreground mb-6">
        Book This Tour
      </h3>

      {/* Date Selection */}
      <div className="mb-4">
        <Label className="mb-2 block">Select Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              disabled={(date) => date < new Date()}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Selection */}
      <div className="mb-4">
        <Label className="mb-2 block">Select Time</Label>
        <Select value={time} onValueChange={setTime}>
          <SelectTrigger>
            <SelectValue placeholder="Choose departure time" />
          </SelectTrigger>
          <SelectContent>
            {tour.startTimes.map((t) => (
              <SelectItem key={t} value={t}>{t}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Guest Count */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <Label className="mb-2 block">Adults</Label>
          <div className="flex items-center gap-3 bg-secondary rounded-lg p-2">
            <button
              type="button"
              onClick={() => setAdults(Math.max(1, adults - 1))}
              className="w-8 h-8 rounded-md bg-background flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="flex-1 text-center font-semibold">{adults}</span>
            <button
              type="button"
              onClick={() => setAdults(adults + 1)}
              className="w-8 h-8 rounded-md bg-background flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div>
          <Label className="mb-2 block">Children (50% off)</Label>
          <div className="flex items-center gap-3 bg-secondary rounded-lg p-2">
            <button
              type="button"
              onClick={() => setChildren(Math.max(0, children - 1))}
              className="w-8 h-8 rounded-md bg-background flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="flex-1 text-center font-semibold">{children}</span>
            <button
              type="button"
              onClick={() => setChildren(children + 1)}
              className="w-8 h-8 rounded-md bg-background flex items-center justify-center hover:bg-muted transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-4 mb-6">
        <div>
          <Label htmlFor="name" className="mb-2 block">Full Name</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 block">Email</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="mb-2 block">Phone</Label>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="(808) 555-0123"
            required
          />
        </div>
      </div>

      {/* Price Summary */}
      <div className="bg-secondary rounded-xl p-4 mb-6">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-muted-foreground">{adults} Adult(s) × ${tour.price}</span>
          <span>${adults * tour.price}</span>
        </div>
        {children > 0 && (
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">{children} Child(ren) × ${tour.price * 0.5}</span>
            <span>${children * tour.price * 0.5}</span>
          </div>
        )}
        <div className="border-t border-border pt-2 mt-2 flex justify-between font-bold text-lg">
          <span>Total</span>
          <span className="text-primary">${totalPrice.toFixed(2)}</span>
        </div>
      </div>

      <Button
        type="submit"
        variant="hero"
        size="xl"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Processing..." : "Complete Booking"}
      </Button>

      <p className="text-xs text-center text-muted-foreground mt-4">
        Free cancellation up to 24 hours before the tour
      </p>
    </form>
  );
};

export default BookingForm;
