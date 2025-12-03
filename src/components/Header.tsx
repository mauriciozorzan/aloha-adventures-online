import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl md:text-3xl font-serif font-bold text-primary">
              Aloha Tours
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Home
            </Link>
            <Link to="/#tours" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Tours
            </Link>
            <Link to="/#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              About
            </Link>
            <Link to="/#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+18081234567" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">(808) 123-4567</span>
            </a>
            <Button variant="hero" size="lg">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/#tours"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Tours
              </Link>
              <Link
                to="/#about"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/#contact"
                className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a href="tel:+18081234567" className="flex items-center gap-2 text-muted-foreground py-2">
                <Phone className="w-4 h-4" />
                <span className="font-medium">(808) 123-4567</span>
              </a>
              <Button variant="hero" size="lg" className="mt-2">
                Book Now
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
