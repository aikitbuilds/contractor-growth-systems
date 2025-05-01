import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BusinessGrowth from "./pages/BusinessGrowth";
import CourseComingSoon from "./pages/CourseComingSoon";
import SemperSolarisCase from "./pages/SemperSolarisCase";
import AIImageTools from "./pages/AIImageTools";
import About from "./pages/About";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import ProjectDashboard from "./pages/ProjectDashboard";
import Services from "./pages/Services";
import Resources from "./pages/Resources";
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import RoofSalesBootcamp from './pages/RoofSalesBootcamp';
import RoofSalesCheckout from './pages/RoofSalesCheckout';
import BootcampDetails from './pages/BootcampDetails';
import TexasContractorCaseStudy from './pages/TexasContractorCaseStudy';
import PetersonDeanCaseStudy from './pages/PetersonDeanCaseStudy';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ContractorAI from "./pages/ContractorAI";
import Events from "./pages/Events";
import Checkout from "./pages/Checkout";
import Pricing from "./pages/Pricing";
import EmailTestPage from "./pages/EmailTestPage";
import Contact from './pages/Contact'
import SubmissionAdmin from './pages/SubmissionAdmin'
import Waitlist from './pages/Waitlist'
import OptInVerification from "./pages/OptInVerification";
import TestIntegrations from "./pages/TestIntegrations";
import SolarAIAssistant from "./pages/SolarAIAssistant";
import Schedule from './pages/Schedule';
import Forms from './pages/Forms';
import ExampleForm from './pages/ExampleForm';
import PaymentSuccess from './pages/PaymentSuccess';
import AIChecklist from '@/pages/AIChecklist';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Sitemap from './pages/Sitemap';
import ScrollToTop from './components/ScrollToTop';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/aichecklist" element={<AIChecklist />} />
              <Route path="/business-growth" element={<BusinessGrowth />} />
              <Route path="/course-coming-soon" element={<CourseComingSoon />} />
              <Route path="/case-study/semper-solaris" element={<SemperSolarisCase />} />
              <Route path="/ai-image-tools" element={<AIImageTools />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/contractorai" element={<ContractorAI />} />
              <Route path="/events" element={<Events />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/project-dashboard" element={<ProjectDashboard />} />
              <Route path="/roof-sales-bootcamp" element={<RoofSalesBootcamp />} />
              <Route path="/bootcamp-details" element={<BootcampDetails />} />
              <Route path="/roof-sales-checkout" element={<RoofSalesCheckout />} />
              <Route path="/texas-contractor-case" element={<TexasContractorCaseStudy />} />
              <Route path="/peterson-dean-case" element={<PetersonDeanCaseStudy />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/email-test" element={<EmailTestPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/schedule" element={<Schedule />} />
              <Route path="/forms" element={<Forms />} />
              <Route path="/forms/example" element={<ExampleForm />} />
              <Route path="/solar-ai-assistant" element={<SolarAIAssistant />} />
              <Route path="/optin-verification" element={<OptInVerification />} />
              <Route path="/test-integrations" element={<TestIntegrations />} />
              <Route path="/admin/submissions" element={<SubmissionAdmin />} />
              <Route path="/payment/success" element={<PaymentSuccess />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/sitemap" element={<Sitemap />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
          <Footer />
          <AIChatbot />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
