import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  lastName: z.string().trim().min(1, 'Last name is required').max(100),
  email: z.string().trim().email('Invalid email address').max(255),
  company: z.string().trim().max(200).optional(),
  subject: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: 'Validation Error',
        description: validation.error.errors[0].message,
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    const { error } = await supabase.from('contact_requests').insert({
      first_name: formData.firstName.trim(),
      last_name: formData.lastName.trim(),
      email: formData.email.trim(),
      company: formData.company.trim() || null,
      service: formData.subject.trim() || null,
      message: formData.message.trim(),
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: 'Error',
        description: 'Failed to submit your message. Please try again.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to grow your online gaming business? Let's discuss how NSGS Global can help you achieve compliance and success.
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
                <p className="font-medium text-foreground">info@nsgs.pro</p>
                <p className="text-muted-foreground mt-4 mb-2">Business partnerships</p>
                <p className="font-medium text-foreground">partners@nsgs.pro</p>
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
                <p className="font-medium text-foreground">+357 96 281 311</p>
                <p className="text-muted-foreground mt-4 mb-2">Direct Line</p>
                <p className="font-medium text-foreground">+357 96 281 311</p>
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
                  Van Dyke, 6<br />
                  Solonion Building<br />
                  6037, Larnaca<br />
                  Cyprus
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
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="font-medium">First Name *</Label>
                      <Input 
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                        className="border-border/50 focus:border-primary"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="font-medium">Last Name *</Label>
                      <Input 
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                        className="border-border/50 focus:border-primary"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="font-medium">Email Address *</Label>
                      <Input 
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        placeholder="Enter your email"
                        className="border-border/50 focus:border-primary"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company" className="font-medium">Company</Label>
                      <Input 
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleChange('company', e.target.value)}
                        placeholder="Enter your company name"
                        className="border-border/50 focus:border-primary"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="font-medium">Subject</Label>
                    <Input 
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleChange('subject', e.target.value)}
                      placeholder="What's this about?"
                      className="border-border/50 focus:border-primary"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="font-medium">Message *</Label>
                    <Textarea 
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us more about your project or inquiry..."
                      rows={6}
                      className="border-border/50 focus:border-primary resize-none"
                      required
                      disabled={isSubmitting}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
