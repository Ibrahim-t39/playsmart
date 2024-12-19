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
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}>({
  user: null,
  login: async () => {},
  logout: () => {},
});

// AuthProvider to manage authentication state
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // Mock user with isPremium set to true
    setUser({ email, isPremium: true });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to access Auth Context
export const useAuth = () => useContext(AuthContext);
