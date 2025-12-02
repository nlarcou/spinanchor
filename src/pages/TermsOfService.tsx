import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/Footer";
import WhatsAppButton from "@/components/ui/whatsapp-button";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Terms of Service
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
            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6">
              By accessing and using the NSGS Global website and services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
            <p className="text-muted-foreground mb-6">
              NSGS Global provides iGaming compliance, corporate, licensing, processing, and banking services. Our services are designed to help businesses navigate the complexities of the iGaming industry, including regulatory compliance, license applications, and corporate structuring.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">3. Use of Services</h2>
            <p className="text-muted-foreground mb-4">You agree to:</p>
            <ul className="list-disc pl-6 text-muted-foreground mb-6 space-y-2">
              <li>Provide accurate and complete information when using our services</li>
              <li>Use our services only for lawful purposes</li>
              <li>Not interfere with or disrupt our services or servers</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground mb-6">
              All content on this website, including text, graphics, logos, and images, is the property of NSGS Global and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
            <p className="text-muted-foreground mb-6">
              We understand the sensitive nature of the iGaming industry. All information shared with us during consultations or service engagements will be treated as confidential and handled in accordance with our Privacy Policy.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-6">
              NSGS Global shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our liability is limited to the maximum extent permitted by applicable law.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">7. Disclaimer</h2>
            <p className="text-muted-foreground mb-6">
              Our services are provided "as is" without warranties of any kind. While we strive to provide accurate information and high-quality services, we do not guarantee specific outcomes for license applications or regulatory matters.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These Terms of Service shall be governed by and construed in accordance with the laws of Cyprus. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Cyprus.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">9. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on this page. Your continued use of our services after any changes constitutes acceptance of the new terms.
            </p>

            <h2 className="font-heading text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
            <p className="text-muted-foreground mb-6">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-muted/30 p-6 rounded-lg">
              <p className="text-foreground font-semibold">NSGS Global</p>
              <p className="text-muted-foreground">United Nations Street, 44</p>
              <p className="text-muted-foreground">Orthodoxou Tower, 3rd-4th Floor</p>
              <p className="text-muted-foreground">6042, Larnaka, Cyprus</p>
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

export default TermsOfService;