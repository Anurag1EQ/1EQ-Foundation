import HeroSection from "../components/HeroSection/HeroSection";

import Header from "../components/Header/Header";
import HelpSection from "../components/HelpSection/HelpSection";
import CharityInfo from "../components/CharityInfo/CharityInfo";
import Scholarship from "../components/Scholarship/Scholarship";
import Ecosystem from "../components/Econsystem/Ecosystem";
import Vocab from "../components/Vocab/Vocab";
import FoundationPrograms from "../components/FoundationPrograms/FoundationPrograms";
import Faq from "../components/Faq/Faq";

const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <CharityInfo />
      {/* <HelpSection /> */}
      <Scholarship />
      <Vocab />
      <Ecosystem />
      <FoundationPrograms />
      <Faq/>
    </>
  );
};

export default Home;
