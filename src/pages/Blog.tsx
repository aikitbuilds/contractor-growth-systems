import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Tag, ExternalLink, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import { Container, Typography, Grid, CardContent, CardMedia, Box, TextField, InputAdornment, Chip } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Play } from 'lucide-react';

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
        // NewsAPI key
        const apiKey = '1e8c801cea7542bc9e46b5a0b33760c8';
        
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
                type="text"
                placeholder="Search articles..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/60 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Tuesday Tuneup Banner */}
      <section className="py-8 bg-secondary/10">
        <div className="container mx-auto px-4">
          <a 
            href="https://www.thetuesdaytuneup.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <div className="bg-gradient-to-r from-secondary-700 to-secondary rounded-xl shadow-xl overflow-hidden">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 p-6 flex justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border-4 border-white/20">
                    <div className="text-center">
                      <div className="text-white text-4xl font-bold leading-none mb-1">TT</div>
                      <div className="text-white/80 text-xs uppercase tracking-wider">Newsletter</div>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4 p-6 md:p-8 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">The Tuesday Tuneup</h2>
                  <p className="text-white/80 text-lg mb-4">
                    Build a better sales team! Weekly insights for sales managers from Steve Huber, an award-winning sales leader with over $2 Billion in home improvement sales.
                  </p>
                  <div className="inline-block bg-white text-secondary font-medium rounded-full px-6 py-2 hover:bg-white/90 transition-colors">
                    Subscribe Now
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </section>
      
      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="blog" className="max-w-6xl mx-auto" onValueChange={setActiveTab}>
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white">
                <TabsTrigger value="blog">Blog Posts</TabsTrigger>
                <TabsTrigger value="solar">Solar News</TabsTrigger>
                <TabsTrigger value="roofing">Roofing News</TabsTrigger>
                <TabsTrigger value="sustainability">Sustainability</TabsTrigger>
              </TabsList>
            </div>
            
            {/* Blog Posts Tab */}
            <TabsContent value="blog">
              {searchTerm && (
                <div className="mb-8 text-center">
                  <p className="text-gray-600">
                    Showing results for: <span className="font-medium">{searchTerm}</span>
                  </p>
                </div>
              )}
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredBlogPosts.length > 0 ? (
                  filteredBlogPosts.map(post => (
                    <Card key={post.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                      <div className="h-48 overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-6">
                        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                          <span className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {post.date}
                          </span>
                          <span className="px-2 py-1 bg-secondary/10 text-secondary rounded-full text-xs">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>
                        {post.audioUrl && (
                          <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-1">Preview:</p>
                            <audio controls className="w-full h-10">
                              <source src={post.audioUrl} type="audio/mpeg" />
                              Your browser does not support the audio element.
                            </audio>
                          </div>
                        )}
                        {post.videoUrl && (
                          <div className="mb-4 aspect-video">
                            <p className="text-xs text-gray-500 mb-1">Preview:</p>
                            <iframe 
                              src={post.videoUrl} 
                              title={post.title}
                              className="w-full h-32 rounded-md"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>
                          </div>
                        )}
                        <Link to={`/blog/${post.slug}`}>
                          <Button variant="link" className="p-0 text-primary hover:text-primary-700">
                            Read More <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))
                ) : (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-gray-500 text-lg">No blog posts found matching your search.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            {/* News Tabs */}
            {['solar', 'roofing', 'sustainability'].map((category) => (
              <TabsContent key={category} value={category}>
                {isLoading ? (
                  <div className="text-center py-12">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]" />
                    <p className="mt-4 text-gray-600">Loading articles...</p>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary mb-8 text-center capitalize">
                      Latest {category} Industry News
                    </h2>
                    
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                      {(activeTab === 'solar' ? newsArticles.solar :
                        activeTab === 'roofing' ? newsArticles.roofing :
                        newsArticles.sustainability)
                        .filter(article => 
                          searchTerm === '' || 
                          article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.source?.name?.toLowerCase().includes(searchTerm.toLowerCase())
                        )
                        .map((article, index) => (
                          <Card key={`${activeTab}-${article.title?.substring(0, 20) || index}`} className="overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                            {article.urlToImage && (
                              <div className="h-48 overflow-hidden">
                                <img
                                  src={article.urlToImage}
                                  alt={article.title}
                                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            )}
                            <div className="p-6 flex flex-col flex-grow">
                              <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                                <span className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1" />
                                  {formatDate(article.publishedAt)}
                                </span>
                                <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">
                                  {article.source.name}
                                </span>
                              </div>
                              <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                                {article.title}
                              </h3>
                              <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                                {article.description}
                              </p>
                              <a 
                                href={article.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-primary hover:text-primary-700 mt-auto"
                              >
                                Read Full Article <ExternalLink className="ml-1 h-4 w-4" />
                              </a>
                            </div>
                          </Card>
                        ))
                      }
                      
                      {(activeTab === 'solar' ? newsArticles.solar :
                        activeTab === 'roofing' ? newsArticles.roofing :
                        newsArticles.sustainability).filter(article => 
                          searchTerm === '' || 
                          article.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.source?.name?.toLowerCase().includes(searchTerm.toLowerCase())
                        ).length === 0 && (
                        <div className="col-span-2 text-center py-12">
                          <p className="text-gray-500 text-lg">No news articles found matching your search.</p>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Subscribe Section */}
      <section className="py-16 bg-gradient-to-br from-secondary-600 to-secondary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-white/80 mb-8">
              Subscribe to our newsletter for the latest insights, trends, and strategies in the contracting industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="bg-white text-secondary hover:bg-white/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog; 