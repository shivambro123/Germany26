import React from "react";
import "../../styles/Universitycss.css";
import Marquee from "react-fast-marquee";
import europa from "../../assests/university/europa.svg";
import frankurt from "../../assests/university/frankurt.svg";
import hochschedule from "../../assests/university/hochschedule.svg";
import technische from "../../assests/university/technische.svg";
import hochschule from "../../assests/university/hochschule.svg";
import hochshule2 from "../../assests/university/schmalkalden.svg";
import tuhh from "../../assests/university/tuhh.svg";
import rwth from "../../assests/university/rwth.svg";
import universistant from "../../assests/university/universistant.svg";

const University = () => {
  return (
    <div>
      <div className=" container text-left">
        <h3 className="text-4xl font-bold my-4 overflow-hidden universitytitle border-b-orange-600">
          TOP UNIVERSITIES
        </h3>
      </div>
      <div className="marquee-container ">
        <div className="my-4">
          <Marquee pauseOnHover={true} speed={100} direction="left">
            <div className="left-marquee">
              <img
                src={europa}
                alt="university"
                className="university_logos"
              />
              <img
                src={frankurt}
                alt="university"
                className="university_logos"
              />
              <img
                src={hochschedule}
                alt="university"
                className="university_logos"
              />
              <img
                src={technische}
                alt="university"
                className="university_logos"
              />
              <img
                src={europa}
                alt="university"
                className="university_logos"
              />
            </div>
          </Marquee>
        </div>
        <div className="my-4">
          <Marquee pauseOnHover={true} speed={100} direction="right">
            <div className="right-marquee">
              <img
                src={hochschule}
                alt="hochschule"
                className="university_logos"
              />
              <img
                src={hochshule2}
                alt="university"
                className="university_logos"
              />
              <img
                src={tuhh}
                alt="university"
                className="university_logos"
              />
              {/* <img
                src={rwth}
                alt="university"
                className="university_logos"
              /> */}
              <img
                src={universistant}
                alt="university"
                className="university_logos"
              />
            </div>
          </Marquee>
        </div>
        <div className="my-4">
          <Marquee pauseOnHover={true} speed={100} direction="left">
            <div className="left-marquee">
              <img
                src={europa}
                alt="university"
                className="university_logos"
              />
              <img
                src={frankurt}
                alt="university"
                className="university_logos"
              />
              <img
                src={hochschedule}
                alt="university"
                className="university_logos"
              />
              <img
                src={technische}
                alt="university"
                className="university_logos"
              />
              <img
                src={europa}
                alt="university"
                className="university_logos"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default University;
