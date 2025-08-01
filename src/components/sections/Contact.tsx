import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your business? Let's discuss how SpinAnchor can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  Email Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">General inquiries</p>
                <p className="font-medium text-foreground">info@spinanchor.com</p>
                <p className="text-muted-foreground mt-4 mb-2">Business partnerships</p>
                <p className="font-medium text-foreground">partners@spinanchor.com</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  Call Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Business hours</p>
                <p className="font-medium text-foreground">+1 (555) 123-4567</p>
                <p className="text-muted-foreground mt-4 mb-2">24/7 Support</p>
                <p className="font-medium text-foreground">+1 (555) 987-6543</p>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="font-heading text-xl font-semibold flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  Visit Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-2">Headquarters</p>
                <p className="font-medium text-foreground">
                  123 Innovation Drive<br />
                  Tech District, TC 12345<br />
                  United States
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-border/50 shadow-card">
              <CardHeader>
                <CardTitle className="font-heading text-2xl font-semibold text-foreground">
                  Send us a message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="font-medium">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="Enter your first name"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="font-medium">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Enter your last name"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email"
                      placeholder="Enter your email"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="font-medium">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Enter your company name"
                      className="border-border/50 focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="font-medium">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="What's this about?"
                    className="border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="font-medium">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your project or inquiry..."
                    rows={6}
                    className="border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                  size="lg"
                >
                  Send Message
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;