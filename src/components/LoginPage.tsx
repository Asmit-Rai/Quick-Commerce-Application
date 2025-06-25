import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    if (email === 'admin@example.com' && password === 'password123') {
      setTimeout(() => {
        toast({
          title: 'Login Successful',
          description: 'Welcome to the Admin Dashboard!',
        });
        onLogin();
        setIsLoading(false);
      }, 1000);
    } else {
      setTimeout(() => {
        toast({
          title: 'Login Failed',
          description: 'Invalid credentials. Use admin@example.com / password123',
          variant: 'destructive',
        });
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF0ED] font-poppins px-4">
      <Card className="w-full max-w-md bg-[#FFF0ED] rounded-[25px] shadow-lg p-6 sm:p-8">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-3xl font-semibold text-[#301814] font-noto-serif">
           Admin Login
          </CardTitle>
          <CardDescription className="text-[#301814a3]">
            Enter your credentials to access the dashboard
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-[#301814]">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[50px] px-4 border border-[#30181452] text-[#301814A3] rounded-full bg-[#FFF0ED] shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-[#301814]">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="password123"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="h-[50px] px-4 border border-[#30181452] text-[#301814A3] rounded-full bg-[#FFF0ED] shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
              />
            </div>

                       <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-[48px] hover:bg-[#D94C32] font-semibold bg-[#F35E44] text-white rounded-full"
            >
            
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
