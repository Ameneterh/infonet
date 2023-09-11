// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Navigation/Header";
import Footer from "./Navigation/Footer";
import LandingPage from "./LandingPage/LandingPage";
import PortfolioPage from "./Portfolio/Portfolio";
import AboutPage from "./About/About";
import BlogsPage from "./Blogs/BlogsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<LandingPage />}></Route>
        <Route path="/portfolio" element={<PortfolioPage />}></Route>
        <Route path="/about-us" element={<AboutPage />}></Route>
        <Route path="/blog" element={<BlogsPage />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
