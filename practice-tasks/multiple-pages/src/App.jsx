import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import About from "./components/About";
import Contact from "./components/Contact";
import Post1 from "./components/Post1"; // 👈 added this line
import Post2 from "./components/Post2"; // 👈 added this line
import Post3 from "./components/Post3"; // 👈 added this line

import "./app.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/post1" element={<Post1 />} /> {/* 👈 added this */}
          <Route path="/post2" element={<Post2 />} />
          <Route path="/post3" element={<Post3 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
