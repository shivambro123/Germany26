import React from "react";
import Hero from "../components/Hero/Hero";
import ScrollSpy from "react-ui-scrollspy";
import Testimonal from "../components/Testimonal/Testimonal";
import Header from "../components/Header/Header";
import Freecounselling from "../components/FreeCouselling/Freecounselling";
import NavbarComp from "../components/common/Navbar/NavbarComp";
import University from "../components/University/University";

const Landingpage = () => {
  return (
    <>
      <Header />
      <NavbarComp />
      <ScrollSpy  items={['section1', 'section2',"section3"]} // Add more section ids as needed
        currentClassName="active"> 
        <Hero />
        <Testimonal />
        <Freecounselling />
        <University />
        {/* <Hero />   */}
      </ScrollSpy>
    </>
  );
};

export default Landingpage;
