import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Scholarships from "./pages/Scholarships";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<LandingPage />} />
        <Route path="/scholarships" element={<Scholarships />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
