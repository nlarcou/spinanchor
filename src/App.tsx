import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ScrollToTop from "./components/ScrollToTop";
import Chatbot from "./components/ui/chatbot";
import WhatsAppButton from "./components/ui/whatsapp-button";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import ComplianceServices from "./pages/ComplianceServices";
import CorporateServices from "./pages/CorporateServices";
import LicenseServices from "./pages/LicenseServices";
import ProcessingServices from "./pages/ProcessingServices";
import BankingServices from "./pages/BankingServices";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import IgamingServices from "./pages/IgamingServices";
import JurisdictionsPage from "./pages/Jurisdictions";
import AdminLogin from "./pages/AdminLogin";
import AdminRequests from "./pages/AdminRequests";
import AdminUsers from "./pages/AdminUsers";
import NotFound from "./pages/NotFound";

const FloatingButtons = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  
  if (isAdminRoute) return null;
  
  return (
    <>
      <Chatbot />
      <WhatsAppButton />
    </>
  );
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <FloatingButtons />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/compliance-services" element={<ComplianceServices />} />
            <Route path="/corporate-services" element={<CorporateServices />} />
            <Route path="/license-services" element={<LicenseServices />} />
            <Route path="/processing-services" element={<ProcessingServices />} />
            <Route path="/banking-services" element={<BankingServices />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/igaming-services" element={<IgamingServices />} />
            <Route path="/jurisdictions" element={<JurisdictionsPage />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/requests" element={<AdminRequests />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
