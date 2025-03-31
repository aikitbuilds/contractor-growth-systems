import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/Logo";
import { toast } from "sonner";
import { ArrowLeft } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate authentication
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful! Redirecting to dashboard...");
      window.location.href = "/dashboard";
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-100 to-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <div className="flex justify-center mb-6">
            <Logo size="lg" />
          </div>
          
          <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-4 mb-8">
            <h2 className="text-lg font-semibold text-secondary mb-2 flex items-center">
              <div className="bg-secondary text-white text-xs py-0.5 px-1.5 rounded-full mr-2">
                Demo
              </div>
              Client Portal
            </h2>
            <p className="text-gray-600 text-sm">
              This is a demonstration of the BDC client dashboard. Use any email and password to access the dashboard.
            </p>
          </div>
          
          <h1 className="text-2xl font-bold text-center text-primary mb-8">
            Log in to your account
          </h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                required
                className="w-full"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <span className="text-sm text-secondary">
                  Forgot password?
                </span>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary-600" 
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Log in"}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <Link to="/" className="inline-flex items-center text-secondary hover:underline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Return to homepage
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Billion Dollar Contractor. All rights reserved.
      </div>
    </div>
  );
};

export default Login;
