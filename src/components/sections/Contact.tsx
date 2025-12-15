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
    <section id="contact" className="py-32 lg:py-40 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-24 max-w-5xl">
          {/* Left column - Contact info */}
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6 leading-tight">
              Get in Touch
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10">
              Ready to discuss your iGaming project? We're here to help you navigate licensing, compliance, and operations.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-foreground">info@nsgs.pro</p>
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

            <p className="text-sm text-muted-foreground">
              Confidential by default.
            </p>
          </div>

          {/* Right column - Form */}
          <div>
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
                <Label htmlFor="message" className="text-sm">
                  Message <span className="text-primary">*</span>
                </Label>
                <Textarea 
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  rows={5}
                  className="border-border/60 resize-none"
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

            {/* What happens next */}
            <div className="mt-12 pt-8 border-t border-border/40">
              <p className="text-sm font-medium text-foreground mb-4">What happens next</p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                  We review your request
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                  We schedule a short call
                </li>
                <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/50 mt-2 flex-shrink-0" />
                  We share clear next steps
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;