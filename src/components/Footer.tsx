import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Wave & Wander Adventure Tours" 
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h3 className="text-xl font-serif font-bold">Wave & Wander</h3>
                <p className="text-sm text-primary-foreground/70">Adventure Tours</p>
              </div>
            </div>
            <p className="text-sm italic text-coral-light mb-4">Where adventure meets aloha</p>
            <p className="text-primary-foreground/70 mb-6">
              Discover the authentic beauty of Oahu with our expert local guides. 
              Creating unforgettable Hawaiian adventures since 2018.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/tours" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  All Tours
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Tours</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tour/koko-head-sunrise" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Koko Head Sunrise Hike
                </Link>
              </li>
              <li>
                <Link to="/tour/north-shore-experience" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  North Shore Experience
                </Link>
              </li>
              <li>
                <Link to="/tour/windward-coast-adventure" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Windward Coast Adventure
                </Link>
              </li>
              <li>
                <Link to="/tour/custom-adventure" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Custom Adventure
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0 text-coral" />
                <span className="text-primary-foreground/70">
                  Honolulu, Oahu<br />
                  Hawaii, USA
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-coral" />
                <a href="tel:+18085551234" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (808) 555-1234
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-coral" />
                <a href="mailto:waveandwanderadventuretours@gmail.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm">
                  waveandwanderadventuretours@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Wave & Wander Adventure Tours. All rights reserved. Made with 🌺 in Oahu.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
