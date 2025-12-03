import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Tours', path: '/tours' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/95 backdrop-blur-md shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="Wave & Wander Adventure Tours" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <span className={cn(
                "text-lg md:text-xl font-serif font-bold transition-colors leading-tight block",
                isScrolled ? "text-foreground" : "text-primary-foreground"
              )}>
                Wave & Wander
              </span>
              <span className={cn(
                "text-xs font-medium transition-colors",
                isScrolled ? "text-primary" : "text-primary-foreground/80"
              )}>
                Adventure Tours
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "font-medium transition-colors relative py-1",
                  isScrolled 
                    ? isActive(link.path) ? "text-primary" : "text-foreground/80 hover:text-primary"
                    : isActive(link.path) ? "text-primary-foreground" : "text-primary-foreground/80 hover:text-primary-foreground",
                  isActive(link.path) && "after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-current"
                )}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+18085551234" 
              className={cn(
                "flex items-center gap-2 transition-colors",
                isScrolled ? "text-muted-foreground hover:text-primary" : "text-primary-foreground/80 hover:text-primary-foreground"
              )}
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(808) 555-1234</span>
            </a>
            <Button variant="hero" size="lg" asChild>
              <Link to="/tours">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-background rounded-b-2xl shadow-lg">
            <nav className="flex flex-col gap-2 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "font-medium py-3 px-4 rounded-lg transition-colors",
                    isActive(link.path) 
                      ? "bg-primary/10 text-primary" 
                      : "text-foreground/80 hover:bg-muted"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <a href="tel:+18085551234" className="flex items-center gap-2 text-muted-foreground py-3 px-4">
                <Phone className="w-4 h-4" />
                <span className="font-medium">(808) 555-1234</span>
              </a>
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <Link to="/tours" onClick={() => setIsMenuOpen(false)}>Book Now</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
