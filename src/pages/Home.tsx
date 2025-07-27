import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-distillery.jpg";
import productImage from "@/assets/product-whiskey.jpg";
import heritageImage from "@/assets/distillery-heritage.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Himalayan
            <br />
            <span className="text-amber-light">Distillery Limited</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Crafting premium spirits in the heart of the Himalayas, where tradition meets excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="premium" size="lg" asChild>
              <Link to="/products">Explore Our Collection</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/about">Our Heritage</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Premium Collection</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully crafted spirits, each bottle telling a story of Himalayan tradition
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Himalayan Single Malt", type: "Whiskey", age: "12 Years" },
              { name: "Mountain Reserve", type: "Bourbon", age: "8 Years" },
              { name: "Alpine Collection", type: "Rum", age: "15 Years" },
            ].map((product, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-border/50">
                <CardContent className="p-6">
                  <div className="aspect-square mb-6 overflow-hidden rounded-lg">
                    <img 
                      src={productImage} 
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{product.name}</h3>
                  <p className="text-muted-foreground mb-1">{product.type}</p>
                  <p className="text-sm text-amber-rich font-medium mb-4">{product.age}</p>
                  <Button variant="outline" className="w-full">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                A Legacy of Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Founded in the pristine valleys of the Himalayas, our distillery combines ancient 
                craftsmanship with modern innovation. Every drop carries the essence of our 
                mountain heritage and the passion of our master distillers.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From the pure glacial waters to the finest organic grains, we source only the 
                best ingredients to create spirits that embody the spirit of the mountains.
              </p>
              <Button variant="premium" size="lg" asChild>
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
            <div className="relative">
              <img 
                src={heritageImage} 
                alt="Heritage"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-brown-dark to-amber-rich text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Experience the Himalayan Difference</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us on a journey through the world's finest spirits, crafted with passion in the heart of the mountains
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Visit Our Distillery</Link>
            </Button>
            <Button variant="hero" size="lg" asChild>
              <Link to="/products">Shop Collection</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;