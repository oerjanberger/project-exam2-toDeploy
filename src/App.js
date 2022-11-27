import './sass/styles.scss';
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from './components/layout/Footer';
import { AuthProvider } from "./components/context/AuthContext";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import UserProfile from "./components/pages/UserProfile";
import PostList from "./components/pages/PostList";
import ProfileList from "./components/pages/ProfileList";
import SpecificPost from "./components/pages/SpecificPost";
import SpecificProfile from "./components/pages/SpecificProfile";
import Following from "./components/pages/Following";
import Followers from "./components/pages/Followers";

export default function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Navigation />
          <div>
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/userProfile/:name" element={<UserProfile />} />
              <Route path="/postList" element={<PostList />} />
              <Route path="/profileList" element={<ProfileList />} />
              <Route path="/post/:id" exact element={<SpecificPost />} />
              <Route path="/profiles/:name" exact element={<SpecificProfile />} />
              <Route path="/profiles/:name/following" exact element={<Following />} />
              <Route path="/profiles/:name/followers" exact element={<Followers />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
};
