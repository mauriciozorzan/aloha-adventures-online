import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">Aloha Tours</h3>
            <p className="text-primary-foreground/70 mb-6">
              Experience the magic of Hawaii with our expert-guided tours. 
              Creating unforgettable memories since 1985.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-primary-foreground/20 transition-colors">
                <Youtube className="w-5 h-5" />
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
                <Link to="/#tours" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Our Tours
                </Link>
              </li>
              <li>
                <Link to="/#about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Popular Tours</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/tour/na-pali-coast" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Na Pali Coast Adventure
                </Link>
              </li>
              <li>
                <Link to="/tour/volcano-helicopter" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Volcano Helicopter Tour
                </Link>
              </li>
              <li>
                <Link to="/tour/snorkel-molokini" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Molokini Snorkeling
                </Link>
              </li>
              <li>
                <Link to="/tour/whale-watching" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  Whale Watching
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
                  123 Aloha Street<br />
                  Honolulu, HI 96815
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-coral" />
                <a href="tel:+18081234567" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  (808) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-coral" />
                <a href="mailto:aloha@alohatours.com" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  aloha@alohatours.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-primary-foreground/50">
          <p>© {new Date().getFullYear()} Aloha Tours. All rights reserved. Made with 🌺 in Hawaii.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
