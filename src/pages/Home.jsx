import HeroSection from "../components/HeroSection/HeroSection";

import Header from "../components/Header/Header";
import HelpSection from "../components/HelpSection/HelpSection";
import Scholarship from "../components/Scholarship/Scholarship";
import Ecosystem from "../components/Econsystem/Ecosystem";
import Vocab from "../components/Vocab/Vocab";
import FoundationPrograms from "../components/FoundationPrograms/FoundationPrograms";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <HelpSection />
      <Scholarship />
      <FoundationPrograms />
      <Vocab />
      <Ecosystem />
    </>
  );
};

export default Home;
