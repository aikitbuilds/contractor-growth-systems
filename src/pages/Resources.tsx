import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, Check, CheckCircle, Download, FileText, LineChart, ListChecks, LucideIcon, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Navbar from '@/components/Navbar';

interface ResourceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  ctaText: string;
  imageUrl?: string;
  onClick: () => void;
}

const ResourceCard = ({ icon, title, description, ctaText, imageUrl, onClick }: ResourceProps) => (
  <Card className="h-full flex flex-col transition-all duration-300 hover:shadow-lg">
    <CardHeader>
      <div className="mb-4 w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center">
        {icon}
      </div>
      <CardTitle className="text-xl font-bold text-primary">{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-gray-700">{description}</p>
      {imageUrl && (
        <div className="mt-6">
          <img src={imageUrl} alt={title} className="w-full h-auto rounded-md" />
        </div>
      )}
    </CardContent>
    <CardFooter>
      <Button 
        className="w-full bg-secondary hover:bg-secondary/90 text-white" 
        onClick={onClick}
      >
        {ctaText}
        <Download className="ml-2 h-5 w-5" />
      </Button>
    </CardFooter>
  </Card>
);

const EmailCaptureForm = ({ title, onSubmit, onClose }: { title: string; onSubmit: (email: string, name: string) => void; onClose: () => void }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onSubmit(email, name);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Full Name</Label>
        <Input 
          id="name" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your full name" 
          required 
        />
      </div>
      <div>
        <Label htmlFor="email">Email Address</Label>
        <Input 
          id="email" 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          placeholder="Enter your email address" 
          required 
        />
      </div>
      <div className="flex justify-end gap-4 pt-4">
        <Button type="button" variant="outline" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : `Get ${title}`}
        </Button>
      </div>
    </form>
  );
};

const Resources = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedResource, setSelectedResource] = useState('');
  const [showThankYou, setShowThankYou] = useState(false);
  
  const handleResourceClick = (resourceTitle: string) => {
    setSelectedResource(resourceTitle);
    setOpenDialog(true);
    setShowThankYou(false);
  };
  
  const handleFormSubmit = (email: string, name: string) => {
    console.log(`Resource: ${selectedResource}, Email: ${email}, Name: ${name}`);
    setShowThankYou(true);
    
    // Clear form data after submission
    setTimeout(() => {
      setOpenDialog(false);
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                Free Resources to Scale Your Contracting Business
              </h1>
              <p className="text-xl md:text-2xl font-medium text-secondary max-w-4xl mx-auto">
                Actionable Guides, Checklists, and Tools Built from Proven Strategies That Have Generated Billions in Home Improvement Sales
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-gray-700">
                At Billion Dollar Contractor, we believe in empowering contractors with the knowledge and systems needed for sustainable growth. We've distilled insights from transforming businesses – from rapid turnarounds to scaling national leaders – into these free resources. Download the tools you need to start optimizing your revenue, processes, and growth trajectory today.
              </p>
            </div>
          </div>
        </section>
        
        {/* Main Resources Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
                Sales Process & Revenue Acceleration
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResourceCard
                  icon={<Calculator className="h-8 w-8" />}
                  title="Roofing Contractor ROI Calculator"
                  description="Estimate the potential return on investment when implementing BDC's proven systems. See how optimizing sales volume and profit margins can significantly outweigh the cost and maximize market opportunities."
                  ctaText="Access the ROI Calculator"
                  onClick={() => handleResourceClick("Roofing Contractor ROI Calculator")}
                />
                
                <ResourceCard
                  icon={<ListChecks className="h-8 w-8" />}
                  title="The 30-Day Sales Turnaround Checklist"
                  description="Feeling stuck? Based on our rapid Texas turnaround where we doubled a sales team and ignited growth in a month, this checklist provides the critical steps to diagnose issues and kickstart your sales engine."
                  ctaText="Download Your Checklist"
                  onClick={() => handleResourceClick("The 30-Day Sales Turnaround Checklist")}
                />
                
                <ResourceCard
                  icon={<LineChart className="h-8 w-8" />}
                  title="Scaling Blueprint: Key Elements for $10M+ Growth"
                  description="Moving beyond your current revenue ceiling requires strategic systems. Learn the core components – from optimizing inside sales to building multi-state operational processes – drawn from experience scaling contractors to over $300M annually."
                  ctaText="Download the Blueprint"
                  onClick={() => handleResourceClick("Scaling Blueprint: Key Elements for $10M+ Growth")}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Lead Generation Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-10 text-center">
                Lead Generation & Team Optimization
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <ResourceCard
                  icon={<Target className="h-8 w-8" />}
                  title="New Market / Division Launch Readiness Assessment"
                  description="Thinking of adding a service line (like roofing to solar) or expanding geographically? Use this assessment to evaluate your readiness across leadership, systems, tools, and financing, based on BDC's rapid residential launch model."
                  ctaText="Download the Assessment"
                  onClick={() => handleResourceClick("New Market / Division Launch Readiness Assessment")}
                />
                
                <ResourceCard
                  icon={<FileText className="h-8 w-8" />}
                  title="The Evolution of Solar Sales: Lessons from an Inside Sales Pioneer"
                  description="Understand the power of modern inside sales. This guide shares insights from the early days of pioneering phone-based solar sales and how those foundational principles apply to building efficient, scalable sales engines today."
                  ctaText="Download the Guide"
                  onClick={() => handleResourceClick("The Evolution of Solar Sales: Lessons from an Inside Sales Pioneer")}
                />
                
                <ResourceCard
                  icon={<CheckCircle className="h-8 w-8" />}
                  title="Sales Team Health Check"
                  description="Quickly gauge the effectiveness of your current sales engine. Assess leadership, process clarity, KPI tracking, team size, and morale to identify areas needing immediate attention (based on interactive element concept from Texas Turnaround)."
                  ctaText="Download the Health Check"
                  onClick={() => handleResourceClick("Sales Team Health Check")}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Ready for a deeper dive?
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                These resources provide a great starting point. To discuss your specific challenges and how BDC's tailored frameworks can accelerate your growth, schedule your free, no-obligation Sales Audit call today.
              </p>
              <Link to="/contact">
                <Button className="px-8 py-6 bg-secondary hover:bg-secondary/90 text-white text-lg">
                  Schedule Your Free Sales Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      {/* Email Capture Dialog */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>
              {showThankYou ? "Thank You!" : `Get Your ${selectedResource}`}
            </DialogTitle>
            <DialogDescription>
              {showThankYou 
                ? "Your resource has been sent to your email. Please check your inbox." 
                : "Please provide your information to receive this free resource."}
            </DialogDescription>
          </DialogHeader>
          
          {showThankYou ? (
            <div className="flex flex-col items-center justify-center py-6">
              <div className="bg-green-100 text-green-700 rounded-full p-3 mb-4">
                <Check className="h-8 w-8" />
              </div>
              <p className="text-center">Check your email inbox for your download link!</p>
            </div>
          ) : (
            <EmailCaptureForm 
              title={selectedResource} 
              onSubmit={handleFormSubmit} 
              onClose={() => setOpenDialog(false)} 
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Resources; 