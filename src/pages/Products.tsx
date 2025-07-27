import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import productImage from "@/assets/product-whiskey.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Himalayan Single Malt 12 Years",
      type: "Single Malt Whiskey",
      age: "12 Years",
      abv: "43%",
      price: "$89.99",
      description: "A sophisticated single malt aged in oak barrels, featuring notes of honey, vanilla, and mountain herbs.",
      tasting: ["Honey", "Vanilla", "Mountain Herbs", "Caramel"],
      featured: true
    },
    {
      id: 2,
      name: "Mountain Reserve Bourbon",
      type: "Bourbon Whiskey",
      age: "8 Years",
      abv: "45%",
      price: "$69.99",
      description: "A rich bourbon with deep amber color and complex flavors of spice, chocolate, and dried fruits.",
      tasting: ["Spice", "Dark Chocolate", "Dried Fruits", "Oak"],
      featured: false
    },
    {
      id: 3,
      name: "Alpine Collection Rum",
      type: "Premium Rum",
      age: "15 Years",
      abv: "40%",
      price: "$99.99",
      description: "An exceptional aged rum with tropical fruit notes and a smooth, lingering finish.",
      tasting: ["Tropical Fruits", "Molasses", "Cinnamon", "Coconut"],
      featured: true
    },
    {
      id: 4,
      name: "Everest Peak Gin",
      type: "Craft Gin",
      age: "N/A",
      abv: "42%",
      price: "$59.99",
      description: "A unique gin infused with Himalayan botanicals and juniper berries from high altitudes.",
      tasting: ["Juniper", "Himalayan Herbs", "Citrus", "Pine"],
      featured: false
    },
    {
      id: 5,
      name: "Sherpa's Choice Vodka",
      type: "Premium Vodka",
      age: "N/A",
      abv: "40%",
      price: "$49.99",
      description: "Crystal clear vodka distilled from organic grains and filtered through Himalayan spring water.",
      tasting: ["Clean", "Crisp", "Subtle Grain", "Pure"],
      featured: false
    },
    {
      id: 6,
      name: "Legacy Reserve 25 Years",
      type: "Ultra Premium Whiskey",
      age: "25 Years",
      abv: "48%",
      price: "$299.99",
      description: "Our finest expression, aged for a quarter-century in the finest oak barrels.",
      tasting: ["Aged Oak", "Leather", "Dark Berries", "Smoke"],
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Our Premium Collection</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of premium spirits, each crafted with passion and aged to perfection in the pristine Himalayan environment.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-2xl transition-all duration-500 border-border/50 relative overflow-hidden">
                {product.featured && (
                  <Badge className="absolute top-4 left-4 z-10 bg-amber-rich text-primary-foreground">
                    Featured
                  </Badge>
                )}
                
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={productImage} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl text-foreground group-hover:text-amber-rich transition-colors">
                      {product.name}
                    </CardTitle>
                    <span className="text-xl font-bold text-amber-rich">{product.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                    <span>{product.type}</span>
                    {product.age !== "N/A" && (
                      <>
                        <span>•</span>
                        <span>{product.age}</span>
                      </>
                    )}
                    <span>•</span>
                    <span>{product.abv} ABV</span>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Tasting Notes:</h4>
                    <div className="flex flex-wrap gap-1">
                      {product.tasting.map((note, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {note}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-4">
                    <Button variant="premium" className="flex-1">
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="sm">
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-amber-rich to-amber-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg mb-6 opacity-90">
            Contact our spirits experts for personalized recommendations and exclusive offerings.
          </p>
          <Button variant="secondary" size="lg">
            Contact Our Experts
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;