import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUsPage from "./pages/Contact";
import { useEffect } from "react";
import logo from "./assets/GrowMore.png";
function App() {
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = logo; // Use the imported image
    document.head.appendChild(link);

    // Cleanup to remove the favicon on unmount (optional)
    return () => {
      document.head.removeChild(link);
    };
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
    </div>
  );
}

export default App;
