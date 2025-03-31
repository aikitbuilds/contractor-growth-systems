import React, { useState, useEffect, useRef } from 'react';
import { X, Send, MessageSquare, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi there! I'm your AI assistant. How can I help with your contracting business today?", sender: 'ai' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isFloating, setIsFloating] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Animation for chat button
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFloating(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to bottom of chat when new messages appear
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSend = () => {
    if (input.trim() === '') return;
    
    // Add user message
    setMessages([...messages, { text: input, sender: 'user' }]);
    setInput('');
    
    // Simulate AI typing
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "I can help you systematize your sales process to increase close rates. Would you like to learn more?",
        "Growing a contracting business requires the right systems. What specific area are you looking to improve?",
        "Many contractors struggle with inconsistent leads. We have proven methods to create a predictable pipeline.",
        "Your team's productivity can significantly improve with the right processes. Would you like some specific strategies?",
        "I'd be happy to explain how our BDC approach can help scale your business from $1M to $10M+."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'ai' }]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-xl shadow-2xl w-80 md:w-96 mb-4 overflow-hidden transform transition-all duration-300 ease-in-out">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-secondary to-secondary-600 p-4 flex justify-between items-center">
            <div className="flex items-center">
              <Sparkles className="h-6 w-6 text-white mr-2" />
              <h3 className="text-white font-semibold">AI Assistant</h3>
            </div>
            <Button
              variant="ghost" 
              size="sm" 
              className="text-white hover:bg-white/20 p-1 h-auto rounded-full"
              onClick={toggleChat}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Chat Messages */}
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`px-4 py-2 rounded-2xl max-w-[85%] ${
                    message.sender === 'user' 
                      ? 'bg-secondary text-white rounded-tr-none' 
                      : 'bg-gray-200 text-gray-800 rounded-tl-none'
                  } animate-fadeIn`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-2xl rounded-tl-none inline-flex space-x-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          
          {/* Chat Input */}
          <div className="p-3 border-t flex items-center">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              className="flex-1 border border-gray-300 rounded-l-full py-2 px-4 focus:outline-none focus:ring-2 focus:ring-secondary focus:border-transparent"
              placeholder="Type your message..."
            />
            <Button 
              variant="default"
              size="sm"
              className="bg-secondary hover:bg-secondary-600 rounded-r-full"
              onClick={handleSend}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Feature Badges */}
          <div className="p-3 bg-gray-50 border-t flex flex-wrap gap-2 justify-center">
            <span className="inline-flex items-center text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
              <Sparkles className="h-3 w-3 mr-1" />
              Contracting Specialist
            </span>
            <span className="inline-flex items-center text-xs px-2 py-1 bg-secondary/10 text-secondary rounded-full">
              24/7 Support
            </span>
          </div>
        </div>
      )}
      
      {/* Chat Button */}
      <button
        onClick={toggleChat}
        className={`relative flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-lg p-2 border-2 border-secondary transition-all duration-500 
        ${isFloating ? 'translate-y-[-4px]' : 'translate-y-0'} 
        hover:scale-110
        focus:outline-none focus:ring-4 focus:ring-secondary/50`}
        aria-label="Open AI Chat"
      >
        <img 
          src="/Images/steve1.png" 
          alt="AI Assistant" 
          className="w-full h-full object-cover rounded-full" 
        />
        <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
        <div className="absolute -top-2 -right-2 bg-secondary text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
          AI
        </div>
      </button>
    </div>
  );
};

export default AIChatbot; 