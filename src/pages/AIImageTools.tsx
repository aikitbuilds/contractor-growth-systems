import React, { useState } from 'react';
import { 
  ArrowRight, 
  ImageIcon, 
  Code, 
  PenTool, 
  Download, 
  Upload, 
  CheckCircle, 
  ExternalLink, 
  Feather,
  Palette
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';

// Example prompt suggestions for each tool
const promptSuggestions = {
  midjourney: [
    "A contractor in a hard hat reviewing blueprints at a modern construction site, professional lighting, 8k, photorealistic",
    "Business growth chart with upward trend, futuristic hologram style, vibrant colors, highly detailed",
    "Detailed 3D rendering of a solar panel installation on a residential rooftop, photorealistic quality"
  ],
  dalle: [
    "A detailed photo of a construction management dashboard on a tablet, showing project metrics and KPIs",
    "A professional headshot of a confident contractor in business attire standing in front of a newly completed building",
    "A bird's eye view of a construction site transformation showing before and after phases"
  ],
  stable: [
    "A modern office interior for a contracting business, open space design, natural lighting, minimalist furniture, photorealistic",
    "Detailed technical blueprint of a residential solar installation with annotations and measurements",
    "Portrait of a diverse team of construction professionals collaborating at a worksite, photorealistic style"
  ]
};

function AIImageTools() {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedTool, setSelectedTool] = useState('midjourney');
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="mb-16 text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              AI Image Generation Tools
            </h1>
            <p className="text-xl text-gray-600">
              Create professional imagery for your contractor business with these powerful AI tools
            </p>
          </div>
          
          {/* Main Content */}
          <div className="max-w-6xl mx-auto">
            {/* Navigation Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
              <TabsList className="grid w-full grid-cols-3 max-w-xl mx-auto">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="tools">Tools Comparison</TabsTrigger>
                <TabsTrigger value="workflow">Workflow Guide</TabsTrigger>
              </TabsList>
              
              {/* Overview Tab Content */}
              <TabsContent value="overview" className="mt-8">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Why Use AI for Your Contractor Business Imagery?</h2>
                  
                  <div className="grid md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <ImageIcon className="h-5 w-5 mr-2 text-secondary" />
                        Professional Visual Content
                      </h3>
                      <p className="text-gray-700">
                        Create custom, high-quality images that represent your specific services without the cost of professional photography or stock photo subscriptions.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Palette className="h-5 w-5 mr-2 text-secondary" />
                        Brand Consistency
                      </h3>
                      <p className="text-gray-700">
                        Generate imagery that consistently reflects your brand style, colors, and messaging across all marketing materials.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <PenTool className="h-5 w-5 mr-2 text-secondary" />
                        Concept Visualization
                      </h3>
                      <p className="text-gray-700">
                        Quickly create visuals for proposed projects, renovations, or improvements to help clients envision the end result.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold mb-4 flex items-center">
                        <Feather className="h-5 w-5 mr-2 text-secondary" />
                        Marketing Enhancement
                      </h3>
                      <p className="text-gray-700">
                        Generate eye-catching visuals for social media, websites, and marketing materials that stand out and attract potential customers.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold mb-3">Important Considerations</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">Always review generated images for accuracy, especially for technical or safety-related content</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">Understand usage rights and licenses for generated content (commercial use, etc.)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-700">Consider disclosing AI-generated imagery when appropriate for transparency</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </TabsContent>
              
              {/* Tools Comparison Tab Content */}
              <TabsContent value="tools" className="mt-8">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">Comparing AI Image Generation Tools</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    {/* Tool Selection Cards */}
                    <Card 
                      className={`p-6 cursor-pointer transition-all hover:shadow-md ${selectedTool === 'midjourney' ? 'ring-2 ring-secondary' : ''}`}
                      onClick={() => setSelectedTool('midjourney')}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="bg-blue-100 p-3 rounded-full mr-4">
                            <ImageIcon className="h-6 w-6 text-blue-600" />
                          </div>
                          <h3 className="font-bold text-gray-800">Midjourney</h3>
                        </div>
                        {selectedTool === 'midjourney' && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Excellent for artistic and stylized images with powerful prompt interpretation.
                      </p>
                      <p className="text-xs text-gray-500">
                        Accessed via Discord
                      </p>
                    </Card>
                    
                    <Card 
                      className={`p-6 cursor-pointer transition-all hover:shadow-md ${selectedTool === 'dalle' ? 'ring-2 ring-secondary' : ''}`}
                      onClick={() => setSelectedTool('dalle')}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="bg-green-100 p-3 rounded-full mr-4">
                            <ImageIcon className="h-6 w-6 text-green-600" />
                          </div>
                          <h3 className="font-bold text-gray-800">DALL-E 3</h3>
                        </div>
                        {selectedTool === 'dalle' && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Good all-around generation with strong text handling within images.
                      </p>
                      <p className="text-xs text-gray-500">
                        Via ChatGPT Plus or API
                      </p>
                    </Card>
                    
                    <Card 
                      className={`p-6 cursor-pointer transition-all hover:shadow-md ${selectedTool === 'stable' ? 'ring-2 ring-secondary' : ''}`}
                      onClick={() => setSelectedTool('stable')}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <div className="bg-purple-100 p-3 rounded-full mr-4">
                            <ImageIcon className="h-6 w-6 text-purple-600" />
                          </div>
                          <h3 className="font-bold text-gray-800">Stable Diffusion</h3>
                        </div>
                        {selectedTool === 'stable' && (
                          <CheckCircle className="h-5 w-5 text-secondary" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">
                        Highly customizable, excellent for modifying existing images.
                      </p>
                      <p className="text-xs text-gray-500">
                        DreamStudio or local installation
                      </p>
                    </Card>
                  </div>
                  
                  {/* Selected Tool Details */}
                  <div className="mt-8 border-t pt-8">
                    {selectedTool === 'midjourney' && (
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Midjourney</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Exceptional artistic quality and aesthetics</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Strong at interpreting complex descriptive prompts</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Iterative refinement through variations</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Style flexibility (photorealistic to artistic)</span>
                              </li>
                            </ul>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Pricing</h4>
                            <p className="text-gray-600">
                              Basic plan starts at $10/month with limited generations. Standard plan at $30/month offers more flexibility for business use.
                            </p>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Best For</h4>
                            <p className="text-gray-600">
                              Marketing materials, concept visualization, website hero images, and branding elements where aesthetic quality is paramount.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Sample Prompts</h4>
                            <div className="space-y-3">
                              {promptSuggestions.midjourney.map((prompt, index) => (
                                <div key={index} className="bg-gray-50 p-3 rounded-md border border-gray-200">
                                  <p className="text-sm text-gray-700">{prompt}</p>
                                </div>
                              ))}
                            </div>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Get Started</h4>
                            <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                              <li>Join Discord and subscribe to Midjourney</li>
                              <li>Enter the Midjourney Discord server</li>
                              <li>Use /imagine command with your prompt</li>
                              <li>Use U1-U4 buttons to upscale or V1-V4 to create variations</li>
                            </ol>
                            
                            <a 
                              href="https://www.midjourney.com/home" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-secondary hover:text-secondary-600 mt-4"
                            >
                              Visit Midjourney
                              <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedTool === 'dalle' && (
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">DALL-E 3</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Strong text rendering within images</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Excellent at understanding detailed descriptive prompts</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Good balance of artistic and realistic styles</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Accessible through ChatGPT Plus subscription</span>
                              </li>
                            </ul>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Pricing</h4>
                            <p className="text-gray-600">
                              Available via ChatGPT Plus subscription ($20/month) or through the OpenAI API with usage-based pricing.
                            </p>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Best For</h4>
                            <p className="text-gray-600">
                              Marketing materials with text elements, detailed technical visualizations, and composite scenarios that require specific instructions.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Sample Prompts</h4>
                            <div className="space-y-3">
                              {promptSuggestions.dalle.map((prompt, index) => (
                                <div key={index} className="bg-gray-50 p-3 rounded-md border border-gray-200">
                                  <p className="text-sm text-gray-700">{prompt}</p>
                                </div>
                              ))}
                            </div>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Get Started</h4>
                            <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                              <li>Subscribe to ChatGPT Plus or set up OpenAI API access</li>
                              <li>Open ChatGPT and select "DALL-E 3" model</li>
                              <li>Enter a detailed prompt describing your desired image</li>
                              <li>Download the generated image(s)</li>
                            </ol>
                            
                            <a 
                              href="https://openai.com/dall-e-3" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-secondary hover:text-secondary-600 mt-4"
                            >
                              Learn more about DALL-E 3
                              <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {selectedTool === 'stable' && (
                      <div>
                        <h3 className="text-xl font-bold text-primary mb-4">Stable Diffusion</h3>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                            <ul className="space-y-2">
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Powerful image-to-image editing capabilities</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Local installation option for privacy and unlimited use</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Highly customizable with models, styles, and parameters</span>
                              </li>
                              <li className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-1" />
                                <span>Open-source with active community support</span>
                              </li>
                            </ul>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Pricing</h4>
                            <p className="text-gray-600">
                              Available for free through local installation (requires GPU) or via services like DreamStudio with usage-based credits.
                            </p>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Best For</h4>
                            <p className="text-gray-600">
                              Modifying existing photos, creating variations of project visualizations, and customizing imagery to match specific requirements.
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-3">Sample Prompts</h4>
                            <div className="space-y-3">
                              {promptSuggestions.stable.map((prompt, index) => (
                                <div key={index} className="bg-gray-50 p-3 rounded-md border border-gray-200">
                                  <p className="text-sm text-gray-700">{prompt}</p>
                                </div>
                              ))}
                            </div>
                            
                            <h4 className="font-semibold text-gray-800 mt-6 mb-3">Get Started</h4>
                            <ol className="list-decimal ml-5 space-y-2 text-gray-600">
                              <li>Use online platforms like DreamStudio or Leonardo.ai</li>
                              <li>Or install locally with Automatic1111 WebUI</li>
                              <li>Enter text prompts or upload images for modification</li>
                              <li>Adjust settings like CFG scale, sampling steps, etc.</li>
                            </ol>
                            
                            <a 
                              href="https://dreamstudio.ai" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-secondary hover:text-secondary-600 mt-4 mr-4"
                            >
                              Try DreamStudio
                              <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                            
                            <a 
                              href="https://github.com/AUTOMATIC1111/stable-diffusion-webui" 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-secondary hover:text-secondary-600 mt-4"
                            >
                              Stable Diffusion WebUI
                              <ExternalLink className="h-4 w-4 ml-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </TabsContent>
              
              {/* Workflow Guide Tab Content */}
              <TabsContent value="workflow" className="mt-8">
                <div className="bg-white rounded-xl shadow-md p-8">
                  <h2 className="text-2xl font-bold text-primary mb-6">AI Image Generation Workflow</h2>
                  
                  <div className="mb-10">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Step-by-Step Process</h3>
                    
                    <div className="space-y-8">
                      {/* Step 1 */}
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                            1
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Define Your Image Requirements</h4>
                          <p className="text-gray-600 mb-3">
                            Clearly identify what type of image you need, its purpose, and key elements to include.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-700 mb-2">Consider these questions:</h5>
                            <ul className="list-disc ml-5 space-y-1 text-gray-600">
                              <li>What is the primary purpose of this image? (marketing, visualization, etc.)</li>
                              <li>Where will this image appear? (website, social media, print)</li>
                              <li>What key elements must be included?</li>
                              <li>What style aligns with your brand? (photorealistic, illustrative, etc.)</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step 2 */}
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                            2
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Craft Effective Prompts</h4>
                          <p className="text-gray-600 mb-3">
                            Write detailed prompts that clearly describe your desired image, including style, composition, and important details.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-700 mb-2">Prompt Structure:</h5>
                            <ol className="list-decimal ml-5 space-y-1 text-gray-600">
                              <li><strong>Subject:</strong> What is the main focus? (A contractor, a building, etc.)</li>
                              <li><strong>Setting/Context:</strong> Where is the scene taking place?</li>
                              <li><strong>Action/Pose:</strong> What is happening in the image?</li>
                              <li><strong>Details:</strong> Important specific elements to include</li>
                              <li><strong>Style:</strong> Photorealistic, illustration, 3D rendering, etc.</li>
                              <li><strong>Technical parameters:</strong> Resolution, lighting, angle, etc.</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step 3 */}
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                            3
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Choose the Right Tool</h4>
                          <p className="text-gray-600 mb-3">
                            Select the appropriate AI tool based on your specific needs.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-700 mb-2">Selection Guide:</h5>
                            <ul className="list-disc ml-5 space-y-1 text-gray-600">
                              <li><strong>Midjourney:</strong> For highly aesthetic, artistic, and visually striking images</li>
                              <li><strong>DALL-E 3:</strong> For images with text elements or requiring complex scene understanding</li>
                              <li><strong>Stable Diffusion:</strong> For modifying existing images or when you need maximum control</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step 4 */}
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                            4
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Generate and Iterate</h4>
                          <p className="text-gray-600 mb-3">
                            Create initial images, evaluate results, and refine your prompts for better outcomes.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-700 mb-2">Iteration Process:</h5>
                            <ol className="list-decimal ml-5 space-y-1 text-gray-600">
                              <li>Generate initial images with your prompt</li>
                              <li>Evaluate results against your requirements</li>
                              <li>Refine prompts by:
                                <ul className="list-disc ml-5 mt-1">
                                  <li>Adding more specific details</li>
                                  <li>Changing style descriptors</li>
                                  <li>Adjusting technical parameters</li>
                                </ul>
                              </li>
                              <li>Generate new variations until satisfied</li>
                            </ol>
                          </div>
                        </div>
                      </div>
                      
                      {/* Step 5 */}
                      <div className="flex">
                        <div className="flex-shrink-0 mr-4">
                          <div className="bg-secondary w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">
                            5
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-800 mb-2">Download and Integrate</h4>
                          <p className="text-gray-600 mb-3">
                            Save your final images and incorporate them into your marketing materials or website.
                          </p>
                          <div className="bg-gray-50 p-4 rounded-lg">
                            <h5 className="font-medium text-gray-700 mb-2">Integration Tips:</h5>
                            <ul className="list-disc ml-5 space-y-1 text-gray-600">
                              <li>Download in the highest resolution available</li>
                              <li>Save in appropriate formats (.png for transparency, .jpg for web)</li>
                              <li>Consider minor adjustments in photo editing software if needed</li>
                              <li>Optimize file size for web use</li>
                              <li>Add proper alt text when integrating into websites</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Resources */}
                  <div className="border-t pt-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-6">Additional Resources</h3>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                      <Card className="p-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <Code className="h-5 w-5 mr-2 text-secondary" />
                          Prompt Engineering
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Learn how to craft more effective prompts to get better results from AI image generation tools.
                        </p>
                        <a 
                          href="https://promptingguide.ai" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary-600 text-sm flex items-center"
                        >
                          Prompt Engineering Guide
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      </Card>
                      
                      <Card className="p-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <Upload className="h-5 w-5 mr-2 text-secondary" />
                          Image Optimization
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Tools and techniques for optimizing AI-generated images for web and marketing use.
                        </p>
                        <a 
                          href="https://squoosh.app" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary-600 text-sm flex items-center"
                        >
                          Squoosh Image Optimizer
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      </Card>
                      
                      <Card className="p-6">
                        <h4 className="font-semibold text-gray-800 mb-4 flex items-center">
                          <Download className="h-5 w-5 mr-2 text-secondary" />
                          Stock Photo Resources
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          For when AI generation isn't quite right, these are quality stock photo alternatives.
                        </p>
                        <a 
                          href="https://unsplash.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-secondary hover:text-secondary-600 text-sm flex items-center"
                        >
                          Unsplash Free Photos
                          <ArrowRight className="h-4 w-4 ml-1" />
                        </a>
                      </Card>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          {/* CTA Section */}
          <div className="text-center bg-white p-12 rounded-2xl shadow-lg mt-16">
            <h2 className="text-3xl font-bold text-primary mb-6">Ready to enhance your business with AI-generated imagery?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team can help you implement these AI image tools into your marketing workflow and create professional visuals for your contractor business.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-secondary hover:bg-secondary-600 text-white">
                Schedule a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AIImageTools; 