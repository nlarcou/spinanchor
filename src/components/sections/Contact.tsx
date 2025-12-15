import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Loader2 } from "lucide-react";
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().trim().min(1, 'First name is required').max(100),
  lastName: z.string().trim().min(1, 'Last name is required').max(100),
  email: z.string().trim().email('Please enter a valid email').max(255),
  company: z.string().trim().max(200).optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000),
});

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
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
      service: null,
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
        message: '',
      });
    }
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-muted/10 relative overflow-hidden">
      {/* Top border for separation */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border/50 to-transparent" />
      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-transparent to-muted/20" />
        
        {/* Abstract geometric lines */}
        <svg className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" viewBox="0 0 400 600" fill="none">
          <line x1="50" y1="0" x2="50" y2="600" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <line x1="150" y1="0" x2="150" y2="600" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <line x1="250" y1="0" x2="250" y2="600" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <line x1="350" y1="0" x2="350" y2="600" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <line x1="0" y1="100" x2="400" y2="100" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <line x1="0" y1="300" x2="400" y2="300" stroke="currentColor" strokeWidth="1" className="text-foreground" />
          <line x1="0" y1="500" x2="400" y2="500" stroke="currentColor" strokeWidth="1" className="text-foreground" />
        </svg>
        
        {/* Soft corner accent */}
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20 max-w-5xl mx-auto">
          {/* Left column - Contact info */}
          <div className="relative">
            {/* Vertical accent line */}
            <div className="absolute -left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent hidden lg:block" />
            
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Get in Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to discuss your iGaming project? We're here to help you navigate licensing, compliance, and operations.
            </p>

            <div className="space-y-6 mb-10">
              <div className="group">
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1.5">Email</p>
                <p className="text-foreground group-hover:text-primary transition-colors">info@nsgs.pro</p>
              </div>
              <div className="group">
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1.5">Phone</p>
                <p className="text-foreground group-hover:text-primary transition-colors">+357 96 281 311</p>
              </div>
              <div className="group">
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-1.5">Office</p>
                <p className="text-foreground leading-relaxed">
                  Van Dyke, 6<br />
                  Solonion Building<br />
                  6037, Larnaca, Cyprus
                </p>
              </div>
            </div>

            {/* Trust indicator */}
            <div className="flex items-center gap-3 pt-6 border-t border-border/30">
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <p className="text-sm text-muted-foreground">
                Confidential by default
              </p>
            </div>
          </div>

          {/* Right column - Form with elevated panel */}
          <div className="relative">
            {/* Form panel */}
            <div className="bg-background/80 backdrop-blur-sm rounded-xl border border-border/40 p-8 lg:p-10 shadow-sm">
              {/* Subtle top accent */}
              <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-normal">
                      First name <span className="text-primary">*</span>
                    </Label>
                    <Input 
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => handleChange('firstName', e.target.value)}
                      className="h-12 border-border/50 bg-background/50 focus:bg-background transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-normal">
                      Last name <span className="text-primary">*</span>
                    </Label>
                    <Input 
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => handleChange('lastName', e.target.value)}
                      className="h-12 border-border/50 bg-background/50 focus:bg-background transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-normal">
                      Email <span className="text-primary">*</span>
                    </Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className="h-12 border-border/50 bg-background/50 focus:bg-background transition-colors"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-normal">
                      Company
                    </Label>
                    <Input 
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="h-12 border-border/50 bg-background/50 focus:bg-background transition-colors"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-normal">
                    Message <span className="text-primary">*</span>
                  </Label>
                  <Textarea 
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className="border-border/50 bg-background/50 focus:bg-background transition-colors resize-none"
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

            {/* What happens next - outside panel */}
            <div className="mt-8 px-2">
              <p className="text-sm font-medium text-foreground mb-4">What happens next</p>
              <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-primary font-medium">1</span>
                  </span>
                  <span className="text-sm text-muted-foreground">We review your request</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-primary font-medium">2</span>
                  </span>
                  <span className="text-sm text-muted-foreground">We schedule a short call</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-xs text-primary font-medium">3</span>
                  </span>
                  <span className="text-sm text-muted-foreground">We share clear next steps</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;