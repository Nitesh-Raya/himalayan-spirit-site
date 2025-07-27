import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Get in touch with our team for tours, tastings, partnerships, or any questions about our premium spirits.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <Card className="border-amber-rich/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <MapPin className="w-5 h-5 text-amber-rich" />
                    Visit Our Distillery
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Himalayan Valley Road<br />
                    Distillery District<br />
                    Mountain View, HM 12345<br />
                    Nepal
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-rich/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <Phone className="w-5 h-5 text-amber-rich" />
                    Call Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Main Office: +977 1-234-5678<br />
                    Tours & Tastings: +977 1-234-5679<br />
                    Sales: +977 1-234-5680
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-rich/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <Mail className="w-5 h-5 text-amber-rich" />
                    Email Us
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    General: info@himalayandistillery.com<br />
                    Tours: tours@himalayandistillery.com<br />
                    Sales: sales@himalayandistillery.com
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-rich/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-foreground">
                    <Clock className="w-5 h-5 text-amber-rich" />
                    Operating Hours
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed<br />
                    <br />
                    Tours: Daily 11:00 AM & 3:00 PM<br />
                    (Advance booking required)
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="border-amber-rich/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Send Us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="What is this regarding?" required />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Tell us more about your inquiry..."
                        className="min-h-32"
                        required 
                      />
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-2">
                        <input type="checkbox" id="newsletter" className="rounded" />
                        <Label htmlFor="newsletter" className="text-sm text-muted-foreground">
                          Subscribe to our newsletter for updates and exclusive offers
                        </Label>
                      </div>
                      
                      <Button type="submit" variant="premium" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-foreground mb-8">Find Us</h2>
          <div className="bg-card rounded-lg p-8 shadow-lg border border-border/50">
            <div className="aspect-video bg-gradient-to-br from-amber-rich/20 to-amber-light/20 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-amber-rich mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">Interactive Map</h3>
                <p className="text-muted-foreground">
                  Map integration would be implemented here<br />
                  showing our distillery location in the Himalayas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-rich to-amber-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Spirits?</h2>
          <p className="text-lg mb-6 opacity-90">
            Book a distillery tour or browse our premium collection online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Book a Tour
            </Button>
            <Button variant="hero" size="lg">
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;