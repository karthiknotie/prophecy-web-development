import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Blog from "./Pages/Blog";
import Contact from './Pages/Contact';
import Services from './Pages/Services';
import BlogOverview from './Pages/BlogOverview';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import Teams from './Pages/Teams';
import Career from "../src/Pages/Career"

function App() {
  return (
    <Router>
      <div className="prophecy">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog-overview" element={<BlogOverview />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/team" element={<Teams />} />
          <Route path="/Career" element={<Career />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
