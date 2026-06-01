import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Home from "./pages/Home";
import Investors from "./pages/Investors";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="flex flex-col items-center justify-center border border-red-500">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/investors" element={<Investors />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/*" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
