import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";
import Feed from "./pages/Feed";
import ArticlePage from "./pages/ArticlePage";
import ProtectedRoute from "./Components/ProtectedRoute";
import Breadcrumbs from "./Components/Breadcrumb";
import LandingPage from "./pages/Landing";

const App = () => {
  return (
    <div className="w-[70%] mx-auto" >
      <Router>
        <Routes>
          <Route path = "/" element = {<LandingPage />} />
          <Route path="/articles" element={<Feed />} />
          <Route path="/login" element={<AuthPage title="Login"/>} />
          <Route path="/register" element={<AuthPage title="Register"/>} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
          <Route path="/articles/:slug" element={<ArticlePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
