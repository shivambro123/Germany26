import React from "react";
import "../../styles/Transparency.css";
import HeroImage from "../../assests/Herosvg.svg";

const Transparency = () => {
  return (
    <section>
      <div className="transparencyWrapper">
        <h3 className="mb-3 headTitle1">
          WE BELEIVE IN 100% TRANSPARENCY
        </h3>
        <p className="text-center text__20 mb-3">
          Simple, flexible, and powerful. Track all your applications
          with the convince of your phone
        </p>
        <div
          className="flex justify-center "
          style={{ fontFamily: "ZonaPro-Regular" }}
        >
          <img src={HeroImage} alt="image" className="" />
        </div>
      </div>
    </section>
  );
};

export default Transparency;
