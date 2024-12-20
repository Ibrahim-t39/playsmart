'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from './AuthProvider';

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { login} = useAuth();  // Add register to destructuring

  const handleSignIn = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData(event.currentTarget);
      const email = formData.get('signin-email') as string;
      const password = formData.get('signin-password') as string;

      await login(email, password);
      router.push('/');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred during sign-in');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const formData = new FormData(event.currentTarget);
      const name = formData.get('signup-name') as string;
      const email = formData.get('signup-email') as string;
      const password = formData.get('signup-password') as string;
      const confirmPassword = formData.get('signup-confirm-password') as string;

      // Validation
      if (password !== confirmPassword) {
        throw new Error('Passwords do not match');
      }

      if (password.length < 8) {
        throw new Error('Password must be at least 8 characters long');
      }


      
      // Automatically log in the user after successful registration
      await login(email, password);
      
      router.push('/');
    } catch (error) {
      setError(error instanceof Error ? error.message : 'An error occurred during sign-up');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white flex items-center justify-center">
      <div className="max-w-md w-full">
        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger
              value="signin"
              className="bg-gray-800 text-gray-300 hover:bg-green-400 hover:text-black rounded-full transition-all"
            >
              Sign In
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="bg-gray-800 text-gray-300 hover:bg-blue-400 hover:text-black rounded-full transition-all"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="signin">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="text-green-400 text-2xl">Sign In</CardTitle>
                <CardDescription className="text-gray-400">Enter your credentials to access your account.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSignIn}>
                <CardContent className="space-y-6">
                  {error && <div className="text-red-400 text-sm">{error}</div>}
                  <div>
                    <Label htmlFor="signin-email" className="text-gray-400">
                      Email
                    </Label>
                    <Input
                      id="signin-email"
                      name="signin-email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="bg-gray-700 text-white mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signin-password" className="text-gray-400">
                      Password
                    </Label>
                    <Input
                      id="signin-password"
                      name="signin-password"
                      type="password"
                      placeholder="Enter your password"
                      required
                      className="bg-gray-700 text-white mt-1"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-green-400 text-black hover:bg-green-500 transition-transform transform hover:scale-105"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </TabsContent>
          <TabsContent value="signup">
            <Card className="bg-gradient-to-br from-gray-800 to-gray-900 shadow-lg rounded-xl">
              <CardHeader>
                <CardTitle className="text-blue-400 text-2xl">Sign Up</CardTitle>
                <CardDescription className="text-gray-400">Create a new account to join PlaySmart.</CardDescription>
              </CardHeader>
              <form onSubmit={handleSignUp}>
                <CardContent className="space-y-6">
                  {error && <div className="text-red-400 text-sm">{error}</div>}
                  <div>
                    <Label htmlFor="signup-name" className="text-gray-400">
                      Full Name
                    </Label>
                    <Input
                      id="signup-name"
                      name="signup-name"
                      type="text"
                      placeholder="Enter your full name"
                      required
                      className="bg-gray-700 text-white mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-email" className="text-gray-400">
                      Email
                    </Label>
                    <Input
                      id="signup-email"
                      name="signup-email"
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="bg-gray-700 text-white mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-password" className="text-gray-400">
                      Password
                    </Label>
                    <Input
                      id="signup-password"
                      name="signup-password"
                      type="password"
                      placeholder="Create a password"
                      required
                      className="bg-gray-700 text-white mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="signup-confirm-password" className="text-gray-400">
                      Confirm Password
                    </Label>
                    <Input
                      id="signup-confirm-password"
                      name="signup-confirm-password"
                      type="password"
                      placeholder="Confirm your password"
                      required
                      className="bg-gray-700 text-white mt-1"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="w-full bg-blue-400 text-black hover:bg-blue-500 transition-transform transform hover:scale-105"
                    disabled={isLoading}
                  >
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