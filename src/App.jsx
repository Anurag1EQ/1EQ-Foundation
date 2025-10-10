import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Scholarships from "./pages/Scholarships";
import ContactUs from "./pages/ContactUs";
import AboutUs from "./pages/AboutUs";
import ScholarshipForm from "./components/ScholarshipForm/ScholarshipForm";

const App = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", 
    });
  }, [pathname]); 

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/scholarships" element={<Scholarships />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/scholarship-form" element={<ScholarshipForm />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
