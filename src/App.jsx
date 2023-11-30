import React, { useEffect } from "react";
import Header from "./components/Header/Header";
import StartTradingBanner from "./components/UI/StartTradingBanner";
import GetStartedBanner from "./components/UI/GetStartedBanner";
import AwesomeFeatureSection from "./components/UI/AwesomeFeatureSection";
import AOS from "aos";
import "aos/dist/aos.css";
import OurPlatform from "./components/UI/OurPlatform";
import OurPlatformprovides from "./components/UI/OurPlatformprovides";
import Slider from "./components/UI/Slider";
import BestTrading from "./components/UI/BestTrading";
import Footer from "./components/Footer/Footer";
import ChoosePlan from "./components/UI/ChoosePlan";
import LogosSection from "./components/UI/LogosSection";

const App = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header />
      <StartTradingBanner />
      <GetStartedBanner />
      <AwesomeFeatureSection />
      <OurPlatform />
      <OurPlatformprovides />
      <ChoosePlan />
      <Slider />
       <LogosSection/>
      <BestTrading />
      <Footer /> 
    </div>
  );
};

export default App;
