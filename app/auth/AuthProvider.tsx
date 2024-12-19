'use client';

import { createContext, ReactNode, useContext, useState } from 'react';

// Define User type
type User = {
  email: string;
  isPremium: boolean;
};

// Create Auth Context
const AuthContext = createContext<{
  user: User | null;
  setUser: (user: User | null) => void; // Add setUser here
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}>({
  user: null,
  setUser: () => {}, // Default no-op implementation
  login: async () => {},
  logout: () => {},
});

// AuthProvider to manage authentication state
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setUser({ email, isPremium: false }); // Non-premium user initially
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access Auth Context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
