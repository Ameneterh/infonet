import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
// import InvoicePage from "./pages/InvoicePage";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import AddCashier from "./pages/AddCashier";
// import AddSignature from "./pages/AddSignature";
// import ProtectedPage from "./components/ProtectedPage";
// import { useSelector } from "react-redux";
// import NextSteps from "./pages/NextSteps";
import Spinner from "./components/Spinner";
import FloatingShapes from "./components/FloatingShapes";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import AddHandler from "./pages/AddHandler";
import RegisterBusiness from "./pages/UserRegistration.jsx";
import PasswordResetPage from "./pages/PasswordResetPage";
import EmailVerificationPage from "./pages/EmailVerificationPage";
import HandlerActivationPage from "./pages/HandlerActivationPage";
import toast, { Toaster } from "react-hot-toast";
import { useAuthStore } from "./store/authStore.js";
import ForgotPasswordPage from "./pages/ForgotPasswordPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import UserDashboard from "./pages/UserDashboard.jsx";
import CreateInvoice from "./pages/CreateInvoice.jsx";
import ProjectsPage from "./pages/ProjectsPage.jsx";
import PrivacyTermsPage from "./pages/PrivacyTermsPage.jsx";
import BlogsPage from "./pages/BlogsPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import SingleArticlePage from "./pages/SingleArticlePage.jsx";
import ProjectDetailsPage from "./pages/ProjectDetailsPage.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import UserRegistration from "./pages/UserRegistration.jsx";
import AddContent from "./pages/AddContent.jsx";
import ClientList from "./pages/ClientList.jsx";

// protected routes
const AdminOnlyRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    // toast.error("You need to log in to access this page");
    return <Navigate to="/user-login" replace />;
  }

  if (!user.isAdmin) {
    toast.error("You aren't authorized to view this page!");
    return <Navigate to="/" replace />;
  }

  return children;
};

// protected routes
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (!isAuthenticated) {
    // toast.error("You need to log in to access this page");
    return <Navigate to="/user-login" replace />;
  }

  if (user.status !== "active") {
    toast.error("Your account is not active, contact HR!");
    return <Navigate to="/verify-handler" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated, user } = useAuthStore();

  if (isAuthenticated && user.status === "active") {
    return <Navigate to="/" replace />;
  }
  return children;
};

function App() {
  const contentRef = useRef();
  const reactToPrintFn = useReactToPrint({ contentRef });

  const { isCheckingAuth, checkAuth, isAuthenticated, user } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <Spinner />;

  console.log("isAuthenticated", isAuthenticated);
  console.log("user", user);

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <div
          className={`min-h-screen bg-gradient-to-tr from-green-950 via-slate-800 to-green-950 flex relative overflow-hidden text-white`}
        >
          <FloatingShapes
            color="bg-green-500"
            size="w-64 h-64"
            top="-5%"
            left="10%"
            delay={0}
          />
          <FloatingShapes
            color="bg-emerald-500"
            size="w-48 h-48"
            top="70%"
            left="80%"
            delay={5}
          />
          <FloatingShapes
            color="bg-lime-500"
            size="w-32 h-32"
            top="40%"
            left="50%"
            delay={2}
          />
          {/* routes */}
          <Routes>
            {/* unprotected routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/verify-email" element={<EmailVerificationPage />} />
            <Route
              path="/activate-handler"
              element={<HandlerActivationPage />}
            />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route
              path="/projects/:projectId"
              element={<ProjectDetailsPage />}
            />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<SingleArticlePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-terms" element={<PrivacyTermsPage />} />
            <Route path="/client-list" element={<ClientList />} />
            <Route path="*" element={<NotFoundPage />} />

            {/* admin only routes */}
            <Route
              path="/add-content"
              element={
                <AdminOnlyRoute>
                  <AddContent />
                </AdminOnlyRoute>
              }
            />

            {/* protected routes */}
            <Route
              path="/user-dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/create-invoice"
              element={
                <ProtectedRoute>
                  <CreateInvoice />
                </ProtectedRoute>
              }
            />

            {/* private routes for only authenticated users */}
            <Route
              path="/forgot-password"
              element={
                <RedirectAuthenticatedUser>
                  <ForgotPasswordPage />
                </RedirectAuthenticatedUser>
              }
            />
            <Route
              path="/reset-password"
              // path="/reset-password/:token"
              element={
                <RedirectAuthenticatedUser>
                  <PasswordResetPage />
                </RedirectAuthenticatedUser>
              }
            />
            <Route
              path="/register"
              element={
                <RedirectAuthenticatedUser>
                  <UserRegistration />
                </RedirectAuthenticatedUser>
              }
            />
            <Route
              path="/add-handler"
              element={
                <RedirectAuthenticatedUser>
                  <AddHandler />
                </RedirectAuthenticatedUser>
              }
            />
            <Route
              path="/user-login"
              element={
                <RedirectAuthenticatedUser>
                  <LoginPage />
                </RedirectAuthenticatedUser>
              }
            />
          </Routes>

          <Toaster />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
