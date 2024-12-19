'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    router.push('/'); // Redirect to home page after successful auth
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="max-w-md w-full">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signin" className="bg-gray-800 text-gray-300 hover:bg-green-400 hover:text-black rounded-lg transition-all">Sign In</TabsTrigger>
            <TabsTrigger value="signup" className="bg-gray-800 text-gray-300 hover:bg-blue-400 hover:text-black rounded-lg transition-all">Sign Up</TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl">Sign In</CardTitle>
                <CardDescription className="text-gray-300">Enter your credentials to access your account.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-gray-300">Email</Label>
                    <Input id="signin-email" type="email" placeholder="Enter your email" required className="bg-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-gray-300">Password</Label>
                    <Input id="signin-password" type="password" placeholder="Enter your password" required className="bg-gray-700 text-white" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-green-400 text-black hover:bg-green-500 transition-transform transform hover:scale-105" disabled={isLoading}>
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-lg">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">Sign Up</CardTitle>
                <CardDescription className="text-gray-300">Create a new account to join STEMletics.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-gray-300">Full Name</Label>
                    <Input id="signup-name" type="text" placeholder="Enter your full name" required className="bg-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-gray-300">Email</Label>
                    <Input id="signup-email" type="email" placeholder="Enter your email" required className="bg-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-gray-300">Password</Label>
                    <Input id="signup-password" type="password" placeholder="Create a password" required className="bg-gray-700 text-white" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password" className="text-gray-300">Confirm Password</Label>
                    <Input id="signup-confirm-password" type="password" placeholder="Confirm your password" required className="bg-gray-700 text-white" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="w-full bg-blue-400 text-black hover:bg-blue-500 transition-transform transform hover:scale-105" disabled={isLoading}>
                    {isLoading ? 'Signing Up...' : 'Sign Up'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
