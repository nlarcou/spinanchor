import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import FAQ from "@/components/sections/FAQ";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  lastName: z.string().trim().min(1, 'Last name is required').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  company: z.string().trim().max(200).optional(),
  service: z.string().optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

const Contact = () => {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam) {
      setFormData(prev => ({ ...prev, service: serviceParam }));
    }
  }, [searchParams]);

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      toast({
        title: 'Please check your input',
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
      service: formData.service || null,
      message: formData.message.trim(),
    });

    setIsSubmitting(false);

    if (error) {
      toast({
        title: 'Something went wrong',
        description: 'Please try again or email us directly.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Message sent',
        description: "We'll be in touch shortly.",
      });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        service: '',
        message: '',
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground leading-[1.1] tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you are planning a new iGaming launch or scaling an existing operation, we are here to help. All inquiries are handled confidentially.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 lg:py-24 bg-muted/20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 max-w-5xl">
            {/* Left - Contact Details */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
                Contact details
              </h2>
              
              <div className="space-y-8">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="text-foreground">info@nsgs.pro</p>
                  <p className="text-foreground">partners@nsgs.pro</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="text-foreground">+357 96 281 311</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Office</p>
                  <p className="text-foreground">
                    Van Dyke, 6<br />
                    Solonion Building<br />
                    6037, Larnaca, Cyprus
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-border/40">
                <p className="text-sm text-muted-foreground">
                  Confidential by default. NDA available on request.
                </p>
              </div>
            </div>

            {/* Right - Form */}
            <div>
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-8">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm">
                      First name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="h-12 border-border/60"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm">
                      Last name <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="h-12 border-border/60"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="h-12 border-border/60"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm">
                      Company
                    </Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="h-12 border-border/60"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-sm">
                    Service interest
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange('service', value)}
                    disabled={isSubmitting}
                  >
                    <SelectTrigger className="h-12 border-border/60">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-background border-border">
                      <SelectItem value="license">Licensing and Regulatory Support</SelectItem>
                      <SelectItem value="compliance">Compliance and AML</SelectItem>
                      <SelectItem value="processing">Payments and PSP Enablement</SelectItem>
                      <SelectItem value="banking">Banking and Treasury Support</SelectItem>
                      <SelectItem value="corporate">Corporate Services</SelectItem>
                      <SelectItem value="discovery">Discovery Call</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className="border-border/60 resize-none"
                    rows={5}
                    placeholder="Tell us about your project..."
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <Button 
                  type="submit"
                  variant="accent"
                  className="font-medium h-12 px-8"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
                </Button>
              </form>

            </div>
          </div>
        </div>
      </section>

      <FAQ variant="compact" />

      <Footer />
    </div>
  );
};

export default Contact;