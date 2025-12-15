import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-muted-foreground">
            Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground mb-6">
              NSGS Global ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect information about you in various ways, including:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li><strong>Personal Data:</strong> Name, email address, phone number, company name, and other contact information you provide when filling out forms or contacting us.</li>
              <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, pages visited, and time spent on pages.</li>
              <li><strong>Cookies:</strong> We use cookies and similar tracking technologies to enhance your experience on our website.</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you updates, marketing communications, and promotional materials</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">4. Sharing Your Information</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Access to your personal data</li>
              <li>Correction of inaccurate data</li>
              <li>Deletion of your data</li>
              <li>Objection to processing</li>
              <li>Data portability</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-foreground font-semibold">NSGS Global</p>
              <p className="text-muted-foreground">Van Dyke, 6</p>
              <p className="text-muted-foreground">Solonion Building</p>
              <p className="text-muted-foreground">6037, Larnaca, Cyprus</p>
              <p className="text-muted-foreground mt-2">Email: info@nsgs.pro</p>
              <p className="text-muted-foreground">Phone: +357 96 281 311</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default PrivacyPolicy;