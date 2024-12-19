// components/ProtectedRoute.tsx
import { useAuth } from "../components/AuthContext";
import { useRouter } from "next/navigation";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAuth();
  const router = useRouter();

  if (!user) {
    router.push("/login"); // Redirect to login page
    return null;
  }

  return <>{children}</>;
}
