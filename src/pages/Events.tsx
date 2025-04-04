import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Play, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Navbar from '@/components/Navbar';

// Upcoming Events Data - Update with actual events when available
const upcomingEvents = [
  // This array is empty as there are no current events scheduled
];

// Past Events Data - Add recordings as they become available
const pastEvents = [
  // Sample data - Uncomment and update when past events are available
  /*
  {
    id: 1,
    title: "From $0 to $10M: Building Your Inside Sales Engine",
    date: "February 15, 2024",
    description: "In this session, Steve Huber breaks down the exact steps to build a high-performing inside sales team that can predictably drive revenue growth for your contracting business.",
    recordingUrl: "/recordings/inside-sales-engine.mp4",
    thumbnailUrl: "/Images/webinar-thumb1.jpg"
  }
  */
];

// Topics covered in BDC events
const eventTopics = [
  { id: 'topic-1', text: "Scaling Your Sales Operations (Inside & Field)" },
  { id: 'topic-2', text: "Optimizing Lead Flow and Conversion Rates" },
  { id: 'topic-3', text: "Building High-Performance Sales Teams" },
  { id: 'topic-4', text: "Implementing Effective Sales Training Systems" },
  { id: 'topic-5', text: "Strategic Growth Planning & Execution" },
  { id: 'topic-6', text: "Leveraging Data & KPIs for Better Decisions" },
  { id: 'topic-7', text: "Integrating New Service Lines (e.g., Roofing with Solar)" },
  { id: 'topic-8', text: "Leadership Development & Creating Winning Cultures" },
  { id: 'topic-9', text: "Preparing for the Future (incl. AI for Contractors)" },
  { id: 'topic-10', text: "Lessons from Multi-Million Dollar Turnarounds & Scaling Journeys" }
];

const Events = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-primary text-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                BDC Webinars & Events: Level Up Your Contracting Knowledge & Network
              </h1>
              <p className="text-xl md:text-2xl font-medium text-secondary max-w-4xl mx-auto">
                Join Steve Huber and Industry Experts for Actionable Insights, Proven Strategies, and Peer Connections to Fuel Your Business Growth
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700">
                Growing a successful contracting business requires continuous learning and adaptation. Billion Dollar Contractor hosts live webinars and participates in industry events to bring you the latest strategies, practical tips, and deep dives into the topics that matter most – from scaling sales engines and optimizing lead flow to building strong teams and leveraging new technologies. Learn from proven experience and connect with fellow growth-minded contractors.
              </p>
            </div>
          </div>
        </section>
        
        {/* Upcoming Events Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Upcoming Events
                </h2>
              </div>
              
              {upcomingEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Map through upcoming events when available */}
                  {upcomingEvents.map(event => (
                    <div key={event.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                      {/* Event content would be rendered here */}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-xl p-8 border border-gray-200 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">Currently, no live events are scheduled</h3>
                    <p className="text-gray-600 mb-6">Please check back soon or sign up below to be notified of our next session!</p>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-xl text-center">Future Event Structure</CardTitle>
                        <CardDescription className="text-center">When events are scheduled, you'll find details like:</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-1">
                          <div className="font-medium">Date & Time:</div>
                          <div className="text-sm text-gray-500">[Date and time of the event]</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="font-medium">Title:</div>
                          <div className="text-sm text-gray-500">[Compelling webinar title - e.g., "Blueprint for Doubling Your Sales Conversion Rate"]</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="font-medium">Description:</div>
                          <div className="text-sm text-gray-500">[Brief description of topics covered, key takeaways, and target audience. Reference relevant BDC frameworks or case studies.]</div>
                        </div>
                        
                        <div className="space-y-1">
                          <div className="font-medium">Speakers:</div>
                          <div className="text-sm text-gray-500">Steve Huber, Founder of Billion Dollar Contractor [+ Guest Speaker Name/Title when applicable]</div>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button disabled className="w-full">Registration Coming Soon</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Past Events Recordings Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Play className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Past Event Recordings
                </h2>
              </div>
              
              {pastEvents.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {/* Map through past events when available */}
                  {pastEvents.map(event => (
                    <Card key={event.id} className="overflow-hidden">
                      <div className="aspect-video relative">
                        <img 
                          src={event.thumbnailUrl} 
                          alt={event.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                          <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                            <Play className="h-8 w-8 text-white" fill="white" />
                          </div>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle>{event.title}</CardTitle>
                        <CardDescription>Originally aired: {event.date}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-700">{event.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" asChild>
                          <a href={event.recordingUrl}>
                            Watch Recording
                            <Play className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Play className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-4">Recording Library Coming Soon</h3>
                    <p className="text-gray-600 mb-6">Catch up on valuable insights you might have missed. Access recordings of our previous webinars packed with actionable strategies. Check back after our upcoming events or sign up below to get notified when recordings become available.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        
        {/* Topics We Cover Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary">
                  Topics We Cover
                </h2>
              </div>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <p className="text-lg text-gray-700 mb-8">
                  Our events focus on the core pillars of sustainable contractor growth, drawing from real-world experience and proven BDC frameworks:
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {eventTopics.map((topic) => (
                    <div key={topic.id} className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-3 mt-0.5">
                        <ArrowRight className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-gray-800">{topic.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                Don't Miss Out on Future Insights!
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Be the first to know about upcoming BDC webinars, workshops, and special events. Sign up for our events notification list.
              </p>
              
              <div className="bg-white rounded-xl p-8 border border-gray-200 max-w-lg mx-auto">
                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input id="name" placeholder="Enter your full name" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input id="company" placeholder="Enter your company name" />
                  </div>
                  
                  <Button className="w-full bg-secondary hover:bg-secondary/90 text-white">
                    Stay Informed About Future Events
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Events; 