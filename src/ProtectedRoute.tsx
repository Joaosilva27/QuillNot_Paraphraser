import { Navigate } from "react-router";
import { useAuth } from "./AuthContext";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser, loading } = useAuth();

  // Show a loading state while checking authentication
  if (loading) {
    return (
      <div className='min-h-screen flex items-center justify-center bg-gray-50'>
        <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-green-800'></div>
      </div>
    );
  }

  // Redirect to sign-up if not authenticated
  if (!currentUser) {
    return <Navigate to='/sign-up' replace />;
  }

  // Render children if authenticated
  return <>{children}</>;
}
