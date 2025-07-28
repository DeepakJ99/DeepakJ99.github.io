import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Profile from "./pages/Profile";
import AuthPage from "./pages/AuthPage";
import Feed from "./pages/Feed";
import ArticlePage from "./pages/ArticlePage";
import ProtectedRoute from "./Components/ProtectedRoute";
import LandingPage from "./pages/Landing";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import FunProjects from "./pages/FunProjects";
import AdminArticlePage from "./pages/AdminArticlePage";
import NotFoundPage from "./pages/NotFoundPage";
const App = () => {
 

  return (
    <div className="min-h-screen w-full sm:w-[90%] md:w-[70%] mx-auto">
      <Router>
        <Header />
        <Routes>
          <Route path = "/" element = {<LandingPage />} />
          <Route path="/articles" element={<Feed />} />
          <Route path="/login" element={<AuthPage title="Login"/>} />
          <Route path="/fun-projects" element={<FunProjects/>} />
          <Route path="/register" element={<AuthPage title="Register"/>} />
          <Route path="/profile" element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>} />
          <Route path="/admin/article" element = {
            <ProtectedRoute requiredRole="admin">
            <AdminArticlePage />
            </ProtectedRoute>
          }/>
          {/* <Route path="/admin/project" element = {
            <ProtectedRoute requiredRole="admin">
            <AdminProjectPage />
            </ProtectedRoute>
          }/> */}
          <Route path="/articles/:slug" element={<ArticlePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
