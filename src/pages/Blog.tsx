import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, ExternalLink, Search, Clock, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';

// Sample blog post data
const blogPosts = [
  {
    id: 1,
    title: "7 Steps to Double Your Roofing Sales This Quarter",
    excerpt: "Learn the proven strategies that top-performing roofing contractors use to dramatically increase their close rates and average ticket size.",
    image: "https://images.unsplash.com/photo-1632759145357-b9426de0bac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Roofing",
    author: "Steve Huber",
    date: "April 21, 2024",
    readTime: "8 min read",
    slug: "double-your-roofing-sales", 
    hasAudio: true,
    audioUrl: "/audio/sample-audio.mp3",
  },
  {
    id: 2,
    title: "Solar Sales Mastery: Converting Technical Specs to Customer Benefits",
    excerpt: "The most successful solar contractors don't sell technology - they sell benefits. Here's how to translate complex specifications into compelling value propositions.",
    image: "https://images.unsplash.com/photo-1611365892117-00d61348747f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Solar",
    author: "Steve Huber",
    date: "April 18, 2024",
    readTime: "12 min read",
    slug: "solar-sales-mastery",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/YmpeNG7K7TY",
  },
  {
    id: 3,
    title: "Sustainable Roofing: Eco-Friendly Materials Driving Growth in 2024",
    excerpt: "Consumer demand for sustainable building materials is reshaping the roofing industry. Learn which eco-friendly options are gaining traction and how to position your business.",
    image: "https://images.unsplash.com/photo-1621969867533-ea22f10e9b77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    category: "Sustainability",
    author: "Steve Huber",
    date: "April 15, 2024",
    readTime: "10 min read",
    slug: "sustainable-roofing-materials",
  },
  {
    id: 4,
    title: "Solar Industry Growth Trends: Opportunities for Contractors in 2024",
    excerpt: "The solar industry is experiencing unprecedented growth. Learn how contracting businesses can capitalize on this trend and position themselves for success.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    category: "Solar",
    author: "Steve Huber",
    date: "April 12, 2024",
    readTime: "9 min read",
    slug: "solar-industry-growth-trends-2024",
    hasVideo: true,
    videoUrl: "https://www.youtube.com/embed/iNzZCZz-cgw",
  },
  {
    id: 5,
    title: "Breaking Down the Federal Solar Tax Credit: What Contractors Need to Know",
    excerpt: "Navigate the complexities of the solar investment tax credit (ITC) to help your customers save money and increase your sales conversion rate.",
    image: "https://images.unsplash.com/photo-1592833093838-ef5cdce59f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
    category: "Solar",
    author: "Steve Huber",
    date: "April 10, 2024",
    readTime: "11 min read",
    slug: "solar-tax-credit-guide-2024",
    hasAudio: true,
    audioUrl: "/audio/sample-audio.mp3",
  },
];

// Types for news articles
interface NewsArticle {
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  source: {
    name: string;
  };
}

function Blog() {
  const [newsArticles, setNewsArticles] = useState<{
    solar: NewsArticle[];
    roofing: NewsArticle[];
    sustainability: NewsArticle[];
  }>({
    solar: [],
    roofing: [],
    sustainability: []
  });
  
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('blog');

  // Fetch news articles from NewsAPI
  useEffect(() => {
    const fetchNewsArticles = async () => {
      setIsLoading(true);
      
      try {
        // Get NewsAPI key from environment variables
        const apiKey = import.meta.env.VITE_NEWS_API_KEY;
        
        // Fetch solar news
        const solarResponse = await fetch(
          `https://newsapi.org/v2/everything?q=solar+energy+industry&sortBy=publishedAt&language=en&pageSize=5&apiKey=${apiKey}`
        );
        const solarData = await solarResponse.json();
        
        // Fetch roofing news
        const roofingResponse = await fetch(
          `https://newsapi.org/v2/everything?q=roofing+contractor+industry&sortBy=publishedAt&language=en&pageSize=5&apiKey=${apiKey}`
        );
        const roofingData = await roofingResponse.json();
        
        // Fetch sustainability news
        const sustainabilityResponse = await fetch(
          `https://newsapi.org/v2/everything?q=sustainable+contracting+business&sortBy=publishedAt&language=en&pageSize=5&apiKey=${apiKey}`
        );
        const sustainabilityData = await sustainabilityResponse.json();
        
        setNewsArticles({
          solar: solarData.articles || [],
          roofing: roofingData.articles || [],
          sustainability: sustainabilityData.articles || []
        });
      } catch (error) {
        console.error('Error fetching news:', error);
        // Fallback to sample data if API fails
        setNewsArticles({
          solar: [
            {
              title: "Solar Industry Sees Record Growth in Residential Installations",
              description: "New data shows residential solar installations have increased by 30% year-over-year, driven by improved technology and federal incentives.",
              url: "https://example.com/solar-growth-2024",
              urlToImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
              publishedAt: "2024-04-08T09:30:00Z",
              source: { name: "Solar Industry Today" }
            },
            {
              title: "New Sales Techniques Driving Solar Adoption in Suburban Markets",
              description: "Solar contractors are utilizing advanced digital marketing and virtual consultations to reach new customer segments.",
              url: "https://example.com/solar-sales-techniques",
              urlToImage: "https://images.unsplash.com/photo-1592833093838-ef5cdce59f4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80",
              publishedAt: "2024-04-05T14:15:00Z",
              source: { name: "Clean Energy Reporter" }
            }
          ],
          roofing: [
            {
              title: "Metal Roofing Sales Surge as Homeowners Prioritize Durability",
              description: "The roofing industry is seeing a shift toward premium materials as consumers seek longer-lasting solutions amid climate concerns.",
              url: "https://example.com/metal-roofing-trends",
              urlToImage: "https://images.unsplash.com/photo-1520100077182-20672c3e3b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              publishedAt: "2024-04-07T10:45:00Z",
              source: { name: "Construction Business Review" }
            },
            {
              title: "Roofing Contractors Embrace AI for Estimating and Project Management",
              description: "Leading roofing companies are implementing AI tools to streamline operations and improve accuracy in bidding processes.",
              url: "https://example.com/roofing-ai-adoption",
              urlToImage: "https://images.unsplash.com/photo-1598252976330-b828568e5479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              publishedAt: "2024-04-03T11:20:00Z",
              source: { name: "Tech in Construction" }
            }
          ],
          sustainability: [
            {
              title: "Small Contractors Finding Success with Green Building Certifications",
              description: "Independent contractors who obtain green building certifications are reporting higher client acquisition rates and premium pricing opportunities.",
              url: "https://example.com/green-certifications-success",
              urlToImage: "https://images.unsplash.com/photo-1623227713556-613cb11a5daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              publishedAt: "2024-04-06T08:15:00Z",
              source: { name: "Sustainable Business Journal" }
            },
            {
              title: "Circular Economy Practices Gaining Traction in Construction Industry",
              description: "Small construction businesses are finding innovative ways to reuse materials and reduce waste, creating new revenue streams and competitive advantages.",
              url: "https://example.com/circular-construction",
              urlToImage: "https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
              publishedAt: "2024-04-01T09:45:00Z",
              source: { name: "Green Builder Magazine" }
            }
          ]
        });
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchNewsArticles();
  }, []);

  // Format date for display
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Filter blog posts based on search term
  const filteredBlogPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get all news articles in a flat array
  const allNewsArticles = [
    ...newsArticles.solar,
    ...newsArticles.roofing,
    ...newsArticles.sustainability
  ];

  // Filter news articles based on search term
  const filteredNewsArticles = allNewsArticles.filter(article =>
    article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.source?.name?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-br from-primary to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contractor Growth Insights</h1>
            <p className="text-xl text-white/80 mb-8">
              Latest strategies, industry news, and expert advice to scale your contracting business
            </p>
            
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                type="search"
                placeholder="Search articles, news, and topics..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Enhanced Navigation Menu */}
      <div className="sticky top-16 z-10 bg-white shadow-md border-b border-gray-200">
        <div className="container mx-auto px-4">
          <Tabs 
            defaultValue={activeTab} 
            onValueChange={setActiveTab}
            className="w-full py-1"
          >
            <TabsList className="grid grid-cols-4 w-full h-16 bg-white rounded-none">
              <TabsTrigger 
                value="blog" 
                className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:shadow-lg text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center py-2 px-4 h-full"
                onClick={() => setActiveTab('blog')}
              >
                <span className="text-base md:text-lg">Blog Posts</span>
                <span className="hidden md:block text-xs opacity-80">Articles & Guides</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="solar" 
                className="data-[state=active]:bg-amber-500 data-[state=active]:text-white data-[state=active]:shadow-lg text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center py-2 px-4 h-full"
                onClick={() => setActiveTab('solar')}
              >
                <span className="text-base md:text-lg">Solar News</span>
                <span className="hidden md:block text-xs opacity-80">Industry Updates</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="roofing" 
                className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center py-2 px-4 h-full"
                onClick={() => setActiveTab('roofing')}
              >
                <span className="text-base md:text-lg">Roofing News</span>
                <span className="hidden md:block text-xs opacity-80">Market Trends</span>
              </TabsTrigger>
              
              <TabsTrigger 
                value="sustainability" 
                className="data-[state=active]:bg-green-600 data-[state=active]:text-white data-[state=active]:shadow-lg text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center py-2 px-4 h-full"
                onClick={() => setActiveTab('sustainability')}
              >
                <span className="text-base md:text-lg">Sustainability</span>
                <span className="hidden md:block text-xs opacity-80">Green Innovation</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <TabsContent value="blog" className="mt-0">
          {/* Blog Posts Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <Card key={`loading-card-${i}`} className="animate-pulse">
                  <div className="aspect-video bg-gray-200 rounded-t-lg" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded-md w-3/4" />
                    <div className="h-4 bg-gray-200 rounded-md" />
                    <div className="h-4 bg-gray-200 rounded-md w-5/6" />
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 bg-gray-200 rounded-full" />
                      <div className="h-4 bg-gray-200 rounded-md w-1/4" />
                    </div>
                  </div>
                </Card>
              ))
            ) : searchTerm && filteredBlogPosts.length === 0 ? (
              <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-xl text-gray-500">No blog posts match your search criteria.</p>
              </div>
            ) : (
              (searchTerm ? filteredBlogPosts : blogPosts).map((post) => (
                <Card key={post.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg group">
                  <Link to={`/blog/${post.slug}`} className="block">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      {(post.hasVideo || post.hasAudio) && (
                        <div className="absolute top-4 right-4">
                          {post.hasVideo && (
                            <div className="bg-primary text-white rounded-full p-2 shadow-lg">
                              <Play className="h-5 w-5" />
                            </div>
                          )}
                          {post.hasAudio && (
                            <div className="bg-secondary text-white rounded-full p-2 mt-2 shadow-lg">
                              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-volume-2" aria-label="Audio content available">
                                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                              </svg>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                          {post.category}
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          <Clock className="mr-1 h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{post.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <User className="h-4 w-4 mr-1" />
                          {post.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="h-4 w-4 mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="solar" className="mt-0">
          {/* Solar News Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <Card key={`solar-loading-card-${i}`} className="animate-pulse">
                  <div className="aspect-video bg-gray-200 rounded-t-lg" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded-md w-3/4" />
                    <div className="h-4 bg-gray-200 rounded-md" />
                    <div className="h-4 bg-gray-200 rounded-md w-5/6" />
                  </div>
                </Card>
              ))
            ) : newsArticles.solar.length === 0 ? (
              <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-xl text-gray-500">No solar news available at the moment.</p>
              </div>
            ) : (
              newsArticles.solar.map((article, index) => (
                <Card key={`solar-${article.title?.substring(0, 20) || index}`} className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full flex flex-col">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="block flex-grow">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      {article.urlToImage ? (
                        <img
                          src={article.urlToImage}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-amber-100">
                          <span className="text-amber-700">No image available</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                          Solar
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {article.source?.name || 'News Source'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-amber-600 transition-colors duration-300">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-auto">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.publishedAt)}
                      </div>
                    </div>
                  </a>
                  <div className="p-4 border-t flex justify-end">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:text-amber-800 font-medium inline-flex items-center">
                      Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="roofing" className="mt-0">
          {/* Roofing News Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <Card key={`roofing-loading-card-${i}`} className="animate-pulse">
                  <div className="aspect-video bg-gray-200 rounded-t-lg" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded-md w-3/4" />
                    <div className="h-4 bg-gray-200 rounded-md" />
                    <div className="h-4 bg-gray-200 rounded-md w-5/6" />
                  </div>
                </Card>
              ))
            ) : newsArticles.roofing.length === 0 ? (
              <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-xl text-gray-500">No roofing news available at the moment.</p>
              </div>
            ) : (
              newsArticles.roofing.map((article, index) => (
                <Card key={`roofing-${article.title?.substring(0, 20) || index}`} className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full flex flex-col">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="block flex-grow">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      {article.urlToImage ? (
                        <img
                          src={article.urlToImage}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1632759145357-b9426de0bac1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-100">
                          <span className="text-blue-700">No image available</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Roofing
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {article.source?.name || 'News Source'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-auto">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.publishedAt)}
                      </div>
                    </div>
                  </a>
                  <div className="p-4 border-t flex justify-end">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center">
                      Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>

        <TabsContent value="sustainability" className="mt-0">
          {/* Sustainability News Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              Array(3).fill(0).map((_, i) => (
                <Card key={`sustainability-loading-card-${i}`} className="animate-pulse">
                  <div className="aspect-video bg-gray-200 rounded-t-lg" />
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-200 rounded-md w-3/4" />
                    <div className="h-4 bg-gray-200 rounded-md" />
                    <div className="h-4 bg-gray-200 rounded-md w-5/6" />
                  </div>
                </Card>
              ))
            ) : newsArticles.sustainability.length === 0 ? (
              <div className="md:col-span-2 lg:col-span-3 text-center py-12">
                <p className="text-xl text-gray-500">No sustainability news available at the moment.</p>
              </div>
            ) : (
              newsArticles.sustainability.map((article, index) => (
                <Card key={`sustainability-${article.title?.substring(0, 20) || index}`} className="overflow-hidden transition-all duration-300 hover:shadow-lg group h-full flex flex-col">
                  <a href={article.url} target="_blank" rel="noopener noreferrer" className="block flex-grow">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      {article.urlToImage ? (
                        <img
                          src={article.urlToImage}
                          alt={article.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1623227713556-613cb11a5daf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80";
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-green-100">
                          <span className="text-green-700">No image available</span>
                        </div>
                      )}
                    </div>
                    <div className="p-6 flex-grow">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Sustainability
                        </span>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {article.source?.name || 'News Source'}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-green-600 transition-colors duration-300">{article.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mt-auto">
                        <Calendar className="h-4 w-4 mr-1" />
                        {formatDate(article.publishedAt)}
                      </div>
                    </div>
                  </a>
                  <div className="p-4 border-t flex justify-end">
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-800 font-medium inline-flex items-center">
                      Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </div>
                </Card>
              ))
            )}
          </div>
        </TabsContent>
      </div>
    </>
  );
}

export default Blog; 