import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heritageImage from "@/assets/distillery-heritage.jpg";

const About = () => {
  const milestones = [
    { year: "1995", event: "Foundation of Himalayan Distillery Limited" },
    { year: "1998", event: "First premium whiskey launched" },
    { year: "2005", event: "International recognition and awards" },
    { year: "2010", event: "Expansion to premium rum production" },
    { year: "2015", event: "Sustainable distilling practices implemented" },
    { year: "2020", event: "25th Anniversary Legacy Collection release" },
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We never compromise on quality, using only the finest ingredients and traditional crafting methods."
    },
    {
      title: "Himalayan Heritage",
      description: "Our spirits capture the essence of the Himalayas - pure, powerful, and timeless."
    },
    {
      title: "Sustainable Practices",
      description: "We're committed to environmental responsibility and sustainable production methods."
    },
    {
      title: "Master Craftsmanship",
      description: "Our master distillers bring decades of experience and passion to every bottle."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-foreground mb-6">
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                For over 25 years, Himalayan Distillery Limited has been crafting exceptional 
                spirits in the pristine environment of the Himalayas, where the pure mountain 
                air and glacial waters create the perfect conditions for aging premium spirits.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded with a vision to create world-class spirits that honor both tradition 
                and innovation, we have grown from a small family distillery to an internationally 
                recognized brand while maintaining our commitment to quality and heritage.
              </p>
            </div>
            <div className="relative">
              <img 
                src={heritageImage} 
                alt="Our Distillery"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="border-amber-rich/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To craft exceptional spirits that embody the purity and majesty of the Himalayas, 
                  creating memorable experiences that connect people to our mountain heritage through 
                  every sip. We are committed to excellence, sustainability, and the timeless art 
                  of distillation.
                </p>
              </CardContent>
            </Card>

            <Card className="border-amber-rich/20 shadow-lg">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To become the world's most respected Himalayan spirits brand, recognized for 
                  our unwavering commitment to quality, environmental stewardship, and the 
                  preservation of traditional crafting methods while embracing innovation 
                  and sustainable practices.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Journey</h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-amber-rich"></div>
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-card p-6 rounded-lg shadow-md border border-border/50">
                      <h3 className="text-xl font-bold text-amber-rich mb-2">{milestone.year}</h3>
                      <p className="text-muted-foreground">{milestone.event}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-amber-rich rounded-full border-4 border-background"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-foreground mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-rich to-amber-light rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-brown-dark to-amber-rich text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Visit Our Distillery</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Experience the art of distillation firsthand with guided tours of our facilities 
            and tastings of our premium collection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/contact">Book a Tour</Link>
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

export default About;