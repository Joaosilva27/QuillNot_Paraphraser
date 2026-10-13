import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Routes, Route, BrowserRouter } from "react-router";
import SignUp from "./SignUp.tsx";
import { AuthProvider } from "./AuthContext.tsx";
import ProtectedRoute from "./ProtectedRoute.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route
            path='/'
            element={
              <ProtectedRoute>
                <App />
              </ProtectedRoute>
            }
          />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
