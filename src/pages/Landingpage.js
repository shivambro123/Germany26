import React, { useState } from "react";
import Hero from "../components/Hero/Hero";
import ScrollSpy from "react-ui-scrollspy";
import Testimonal from "../components/Testimonal/Testimonal";
import Header from "../components/Header/Header";
import Freecounselling from "../components/FreeCouselling/Freecounselling";
import NavbarComp from "../components/common/Navbar/NavbarComp";
import University from "../components/University/University";
import PopUp from "../components/Modal/PopUp";
import NewTestimonal from "../components/Testimonal/NewTestimonal";
import OurPartners from "../components/OurPartners/OurPartners";
import Transparency from "../components/Transparency/Transparency";
import Sync from "../components/Sync/Sync";

const Landingpage = () => {
  const [watchStory, setWatchstory] = useState(false);
  const [video, setVideo] = useState(null);

  const handleStory = (story) => {
    console.log(story);
    setWatchstory(!watchStory);
    if (!story) {
      setVideo(null);
    }
    setVideo(story);
  };
  return (
    <>
      <Header />
      <NavbarComp />
      <ScrollSpy>
        <Hero />
        {/* <Testimonal handleWatchStory={handleStory} /> */}
        <NewTestimonal handleWatchStory={handleStory} />
        <OurPartners />
        <Freecounselling />
        <University />
        <Transparency />
        <Sync />
        {/* <Hero />   */}
      </ScrollSpy>
      {watchStory && (
        <PopUp handleWatchStory={handleStory} video={video} />
      )}
    </>
  );
};

export default Landingpage;
