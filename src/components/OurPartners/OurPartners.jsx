import React from "react";
import "../../styles/OurPartners.css";
import axis from "../../assests/partner/axis-bank-logo 1.svg";
import commerz from "../../assests/partner/commerz.svg";
import hdfc from "../../assests/partner/newhdfc.svg";
import bajaj from "../../assests/partner/bajajaliens.svg";
import flywire from "../../assests/partner/download (33).svg";
import remitout from "../../assests/partner/Group 1139.svg";

const OurPartners = () => {
  return (
    <>
      <section className="partnerWrapper custom-padding-x">
        <div className="text-left px-10">
          <div>
            <h4 className="mb-2 text__32 font-semibold custom-padding ">
              Our Partners
            </h4>
            <p className="text__14 custom-width">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </p>
          </div>
          <div className="flex pt-5 partnerlogo">
            <img src={axis} alt="img" height={100} width={100} />
            <img src={flywire} alt="img" height={100} width={100} />
            <img src={remitout} alt="img" height={50} width={100} />
            <img src={hdfc} alt="img" height={100} width={100} />
            <img src={commerz} alt="img" height={100} width={100} />
            <img src={bajaj} alt="img" height={100} width={100} />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurPartners;
