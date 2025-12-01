import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, ArrowLeft } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-professional-navy via-professional-blue to-background py-20">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-4 mb-8">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => window.history.back()}
              className="text-foreground hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
          </div>
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold text-foreground mb-6">
              READY TO TAKE YOUR 
              <span className="block text-transparent bg-gradient-to-r from-corporate-gold to-warm-coral bg-clip-text">
                ONLINE BUSINESS
              </span>
              TO THE NEXT LEVEL?
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Talk to us – or better yet, drop by one of our offices for a face-to-face consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-border bg-card shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Let's talk! Get in touch
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Complete this form and one of our experts will contact you:
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" required className="mt-1" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" required className="mt-1" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" required className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" className="mt-1" />
                  </div>
                  
                  <div>
                    <Label htmlFor="service">Service Interest</Label>
                    <Select>
                      <SelectTrigger className="mt-1">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compliance">iGaming Compliance Services</SelectItem>
                        <SelectItem value="corporate">iGaming Corporate Services</SelectItem>
                        <SelectItem value="license">iGaming License Services</SelectItem>
                        <SelectItem value="consultation">General Consultation</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      required 
                      className="mt-1 min-h-[120px]"
                      placeholder="Please describe your needs and how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-to-r from-corporate-gold to-warm-coral hover:from-corporate-gold/90 hover:to-warm-coral/90 text-background font-semibold shadow-elegant"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">Our Office</h2>
                
                <Card className="border-border bg-card shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <MapPin className="h-6 w-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">CYPRUS OFFICE</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          United Nations Street, 44<br />
                          Orthodoxou Tower, 3rd-4th Floor<br />
                          6042, Larnaka<br />
                          Cyprus
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <Card className="border-border bg-card shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Mail className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Email</h3>
                        <p className="text-muted-foreground">info@nsgs.pro</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <Phone className="h-6 w-6 text-primary" />
                      <div>
                        <h3 className="font-semibold text-foreground">Phone</h3>
                        <p className="text-muted-foreground">+357 24 030 500</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-gradient-to-br from-professional-navy/20 to-professional-blue/20 rounded-lg p-6 border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">Business Hours</h3>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;