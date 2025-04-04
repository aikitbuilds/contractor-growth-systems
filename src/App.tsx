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
import Footer from "./components/Footer";
import AIChatbot from "./components/AIChatbot";
import RoofSalesBootcamp from './pages/RoofSalesBootcamp';
import BootcampDetails from './pages/BootcampDetails';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <div className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/business-growth" element={<BusinessGrowth />} />
              <Route path="/course-coming-soon" element={<CourseComingSoon />} />
              <Route path="/case-study/semper-solaris" element={<SemperSolarisCase />} />
              <Route path="/ai-image-tools" element={<AIImageTools />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/project-dashboard" element={<ProjectDashboard />} />
              <Route path="/roof-sales-bootcamp" element={<RoofSalesBootcamp />} />
              <Route path="/bootcamp-details" element={<BootcampDetails />} />
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
