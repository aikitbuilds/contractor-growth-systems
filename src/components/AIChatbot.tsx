import React, { useState, useRef } from 'react';
import { CheckCircle, SendIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{text: string, isUser: boolean, time: string}[]>([
    {
      text: "Hi there! I'm Steve, your niche business strategist. How can I help you grow your business today?",
      isUser: false,
      time: getCurrentTime()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  function getCurrentTime() {
    const now = new Date();
    return `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
  }

  function handleToggleChat() {
    setIsOpen(!isOpen);
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  function handleSendMessage() {
    if (inputValue.trim() === '') return;
    
    // Add user message
    const userMessage = {
      text: inputValue,
      isUser: true,
      time: getCurrentTime()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse = {
        text: "That's a great question about business growth. Based on my analysis, I'd recommend focusing on your niche market positioning and developing a content strategy that speaks directly to your ideal customers.",
        isUser: false,
        time: getCurrentTime()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      
      // Scroll to the bottom of the chat
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 1000);
  }

  function handleKeyPress(e: React.KeyboardEvent) {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  }

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Floating Button when chat is closed */}
      {!isOpen && (
        <button 
          onClick={handleToggleChat}
          className="group flex items-center gap-3 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-violet-500">
            <video 
              className="absolute w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="/Images/steve.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <span className="font-medium text-gray-800 pr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Chat with Steve
          </span>
        </button>
      )}

      {/* Chat Interface when open */}
      {isOpen && (
        <div className="flex flex-col bg-white rounded-2xl shadow-xl w-[380px] h-[600px] overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-violet-500 to-violet-600 p-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                  <video 
                    className="absolute w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src="/Images/steve.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div>
                  <h3 className="text-white font-bold">Talk to Steve</h3>
                  <p className="text-violet-100 text-sm">Niche Business Strategist</p>
                </div>
              </div>
              <button 
                onClick={handleToggleChat}
                className="text-white hover:bg-violet-700 rounded-full p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>

          {/* Features Banner */}
          <div className="bg-violet-100 px-4 py-2 flex items-center justify-center">
            <span className="bg-violet-500 text-white text-xs font-medium py-1 px-3 rounded-full">
              AI Expert Available 24/7
            </span>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-xs lg:max-w-md px-4 py-3 rounded-lg ${
                      message.isUser 
                      ? 'bg-violet-500 text-white' 
                      : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    <div className="flex items-end justify-between gap-2">
                      <p className="text-sm">{message.text}</p>
                      <span className={`text-xs mt-1 ${message.isUser ? 'text-violet-200' : 'text-gray-500'}`}>
                        {message.time}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Feature List */}
          <div className="bg-gray-50 border-t border-gray-200 px-4 py-3">
            <div className="space-y-1">
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-violet-500 mr-2" />
                <span>Instant niche-specific insights</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-violet-500 mr-2" />
                <span>24/7 strategic guidance</span>
              </div>
              <div className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-violet-500 mr-2" />
                <span>Personalized growth recommendations</span>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask Steve about growing your business..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-violet-500"
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
              />
              <button
                onClick={handleSendMessage}
                className="bg-violet-500 text-white rounded-full p-2 hover:bg-violet-600 transition-colors"
                disabled={inputValue.trim() === ''}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AIChatbot; 