import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brown-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-amber-rich to-amber-light rounded-full"></div>
              <span className="text-xl font-bold">Himalayan Distillery</span>
            </div>
            <p className="text-white/80 mb-4">
              Crafting premium spirits in the heart of the Himalayas since 1995. 
              Where tradition meets excellence.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-white hover:text-amber-light">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-amber-light">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-amber-light">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-amber-light">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-white/80 hover:text-amber-light transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-amber-light transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-amber-light transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-amber-light transition-colors">Contact</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-amber-light transition-colors">Tours</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-amber-light transition-colors">News</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Spirits</h3>
            <ul className="space-y-2">
              <li><Link to="#" className="text-white/80 hover:text-amber-light transition-colors">Single Malt Whiskey</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-amber-light transition-colors">Bourbon</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-amber-light transition-colors">Premium Rum</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-amber-light transition-colors">Craft Gin</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-amber-light transition-colors">Vodka</Link></li>
              <li><Link to="#" className="text-white/80 hover:text-amber-light transition-colors">Limited Editions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/80 mb-4">
              Subscribe to receive news about new releases and exclusive events.
            </p>
            <div className="space-y-3">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="premium" className="w-full">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm">
              © 2024 Himalayan Distillery Limited. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="#" className="text-white/60 hover:text-amber-light transition-colors">Privacy Policy</Link>
              <Link to="#" className="text-white/60 hover:text-amber-light transition-colors">Terms of Service</Link>
              <Link to="#" className="text-white/60 hover:text-amber-light transition-colors">Responsible Drinking</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;