import React from "react";
import Hero from "../sections/Hero";
import Navbar from "../components/Navbar";
import About from "../sections/About";
import Services from "../sections/Services";
import Trust from "../sections/Trust";
import Footer from "../sections/Footer";
import HowItWorks from "../sections/HowItWorks";
import LiveGPS from "../sections/Live-GPS";
import ForProviders from "../sections/ForProviders";
import FAQ from "../sections/FAQ";
import Adopts from "../sections/Adopts";
import CareConnects from "../sections/CareConnects";

const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Trust/>
      <HowItWorks/>
      <LiveGPS/>
      <ForProviders/>
      <CareConnects/>
      <Adopts/>
      <FAQ/>
      <Footer/>
    </>
  );
};

export default Home;