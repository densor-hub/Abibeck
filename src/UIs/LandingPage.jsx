import PageTop from "../components/TopPage";
import Divider from "../components/Divider";
import Services from "../components/Services";
import AboutUs from "../components/AboutUS";
import WhatPeopleSay from "../components/WhatPeopleSay";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <main className="overflow-x-hidden">
      <PageTop />
      <Divider number={1}></Divider>
      <Services showButtons={true} />
      <Divider number={2}></Divider>
      <AboutUs />
      <WhatPeopleSay />
      <Footer />
    </main>
  );
};

export default LandingPage;
