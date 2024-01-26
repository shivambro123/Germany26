import React from "react";
import "../../styles/Universitycss.css";
import Marquee from "react-fast-marquee";
import europa from "../../assests/university/europa.svg";
import frankurt from "../../assests/university/frankurt.svg";
import hochschedule from "../../assests/university/hochschedule.svg";
import technische from "../../assests/university/technische.svg";
import hochschule from "../../assests/university/hochschule.png";
import hochshule2 from "../../assests/university/hochshule2.png";
import tuhh from "../../assests/university/tuhh.png";
import rwth from "../../assests/university/rwth.png";
import universistant from "../../assests/university/universistant.png";

const University = () => {
  return (
    <div>
      <div className=" container text-left">
        <h3 className="text-4xl font-bold my-4 overflow-hidden universitytitle border-b-orange-600">
          Top Universities
        </h3>
      </div>
      <div className="marquee-container container">
        <div className="my-2">
          <Marquee
            pauseOnHover={true}
            speed={100}
            direction="left"
            gradient={true}
          >
            <div className="left-marquee">
              <img src={europa} alt="university" className="university_logos" />
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
              <img src={europa} alt="university" className="university_logos" />
            </div>
          </Marquee>
        </div>
        <div className="my-2">
          <Marquee
            pauseOnHover={true}
            speed={100}
            direction="right"
            gradient={true}
          >
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
              <img src={tuhh} alt="university" className="university_logos" />
              <img src={rwth} alt="university" className="university_logos" />
              <img
                src={universistant}
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
