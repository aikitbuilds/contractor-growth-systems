import { useState } from 'react';
import Navbar from '../components/Navbar';
import SchedulingEmbed from '../components/SchedulingEmbed';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Clock, Users, BarChart3, Presentation } from 'lucide-react';

type SchedulingType = 'strategy' | 'discovery' | 'implementation' | 'demo';

interface SchedulingOption {
  title: string;
  description: string;
  icon: JSX.Element;
  features: string[];
}

function Schedule() {
  const [activeTab, setActiveTab] = useState<SchedulingType>('strategy');

  const schedulingOptions: Record<SchedulingType, SchedulingOption> = {
    strategy: {
      title: 'Strategy Call',
      description: 'A 45-minute session focused on developing a strategic growth plan for your contracting business.',
      icon: <BarChart3 className="h-8 w-8 text-primary" />,
      features: [
        'Business model analysis',
        'Growth opportunities identification',
        'Strategic recommendations',
        'Custom roadmap creation',
      ]
    },
    discovery: {
      title: 'Discovery Call',
      description: 'A 30-minute session to understand your business needs and determine how we can help.',
      icon: <Users className="h-8 w-8 text-primary" />,
      features: [
        'Business challenges assessment',
        'Goals and objectives discussion',
        'Service alignment exploration',
        'Next steps recommendation',
      ]
    },
    implementation: {
      title: 'Implementation Planning',
      description: 'A 60-minute session for existing clients to plan the execution of growth strategies.',
      icon: <Presentation className="h-8 w-8 text-primary" />,
      features: [
        'Detailed implementation timeline',
        'Resource allocation planning',
        'KPI setting and tracking setup',
        'Risk assessment and mitigation',
      ]
    },
    demo: {
      title: 'Product Demo',
      description: 'A 30-minute guided demonstration of our platform and services.',
      icon: <Presentation className="h-8 w-8 text-primary" />,
      features: [
        'Platform walkthrough',
        'Feature demonstration',
        'Q&A session',
        'Custom use case examples',
      ]
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gradient-to-b from-white to-gray-100">
        <section className="container mx-auto px-4 py-12 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary-700 mb-4">Schedule a Consultation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Take the first step toward transforming your roofing business. Choose the type of consultation 
              that best fits your needs and schedule a time that works for you.
            </p>
          </div>
          
          <Tabs defaultValue="strategy" value={activeTab} onValueChange={(value) => setActiveTab(value as SchedulingType)} className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="strategy" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                <span className="hidden sm:inline">Strategy Call</span>
                <span className="sm:hidden">Strategy</span>
              </TabsTrigger>
              <TabsTrigger value="discovery" className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="hidden sm:inline">Discovery Call</span>
                <span className="sm:hidden">Discovery</span>
              </TabsTrigger>
              <TabsTrigger value="implementation" className="flex items-center gap-2">
                <Presentation className="h-4 w-4" />
                <span className="hidden sm:inline">Implementation Planning</span>
                <span className="sm:hidden">Planning</span>
              </TabsTrigger>
            </TabsList>
            
            {(Object.entries(schedulingOptions) as [SchedulingType, SchedulingOption][])
              .filter(([key]) => ['strategy', 'discovery', 'implementation'].includes(key))
              .map(([key, option]) => (
                <TabsContent key={key} value={key} className="space-y-8">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
                      <div className="bg-primary/10 p-4 rounded-full">
                        {option.icon}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-primary-700">{option.title}</h2>
                        <div className="flex items-center text-gray-500 mt-1 mb-2">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>{key === 'implementation' ? '60 minutes' : key === 'strategy' ? '45 minutes' : '30 minutes'}</span>
                        </div>
                        <p className="text-gray-600">{option.description}</p>
                      </div>
                    </div>
                    <div className="mb-6">
                      <h3 className="font-semibold text-lg mb-2">What to expect:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {option.features.map((feature) => (
                          <li key={`${key}-${feature}`} className="flex items-center">
                            <div className="bg-primary w-2 h-2 rounded-full mr-2" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-lg shadow-lg p-6">
                    <SchedulingEmbed 
                      title={`Schedule your ${option.title}`}
                      schedulingType={key}
                    />
                  </div>
                </TabsContent>
              ))}
          </Tabs>
        </section>
      </main>
    </div>
  );
}

export default Schedule; 