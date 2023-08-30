import PageTop from "./LandingComponents/TopPage";
import Divider from "./LandingComponents/Divider";
import Services from "./LandingComponents/Services";
import AboutUs from "./LandingComponents/AboutUS";
import WhatPeopleSay from "./LandingComponents/WhatPeopleSay";
import Footer from "./LandingComponents/Footer";

const LandingPage = () => {
  return (
    <main className="overflow-x-hidden">
      <PageTop />
      <Divider number={1}></Divider>
      <Services />
      <Divider number={2}></Divider>
      <AboutUs />
      <WhatPeopleSay />
      <Footer />
    </main>
  );
};

export default LandingPage;
