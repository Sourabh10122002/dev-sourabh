import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";
import About from "./Pages/About/About";
// import Blog from "./Pages/Blog";
import Contact from "./Pages/Contact/Contact";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
