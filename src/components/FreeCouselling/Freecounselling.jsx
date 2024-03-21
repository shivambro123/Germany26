import React, { useEffect, useRef, useState } from "react";
import "./../../styles/Freecounsellingcss.css";
import university from "./../../assests/studygermany/leftFirst.svg";
import statement from "./../../assests/Freelance/statement.svg";
import interview from "./../../assests/Freelance/interview.svg";
import university_application from "./../../assests/Freelance/university_application.svg";
import aero_plane from "./../../assests/aero_vector.svg";
import progress_start from "./../../assests/Freelance/progress_start.svg";

// import title icon

import freecounselling from "../../assests/studygermany/freecousellinIcon.svg";
import universityIcon from "../../assests/studygermany/universityIcon.svg";
import purposeIcon from "../../assests/studygermany/purposeIcon.svg";
import curriculumIcon from "../../assests/studygermany/curriculumIcon.svg";
import recommendateIcon from "../../assests/studygermany/recommendateIcon.svg";
import universityapplicantIcon from "../../assests/studygermany/universityapplicantIcon.svg";
import visaIcon from "../../assests/studygermany/visaIcon.svg";
import accomodateIcon from "../../assests/studygermany/accomodateIcon.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Freecounselling = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visiblePlaneBottom, setvisiblePlaneBottom] = useState(false);
  const [visiblePlaneTop, setvisiblePlaneTop] = useState(true);

  const [componentheight, setComponentheight] = useState(0);
  useEffect(() => {
    if (window.scrollY < 120) {
      setvisiblePlaneTop(true);
    } else {
      setvisiblePlaneTop(false);
    }
  }, [window.scrollY]);
  useEffect(() => {
    AOS.init({
      duration: 1200,
      offset: 90,
    });

    console.log(componentheight, "componentheight");
    const handleScroll = () => {
      const component = containerRef.current;
      setComponentheight(component.clientHeight);
      const componentTop = component.offsetTop;

      const componentBottom = componentTop + component.clientHeight;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight - 500;

      const airplaneTop = componentTop - 2160; // Adjust as needed
      const airplaneBottom = componentBottom + 2160; // Adjust as needed

      if (
        scrollPosition >= airplaneTop &&
        scrollPosition <= componentBottom - windowHeight
      ) {
        setvisiblePlaneTop(true);
      } else {
        setvisiblePlaneTop(false);
      }

      if (
        scrollPosition >= componentTop &&
        scrollPosition <= airplaneBottom - windowHeight
      ) {
        setvisiblePlaneBottom(true);
      } else {
        setvisiblePlaneBottom(false);
      }

      if (
        scrollPosition >= componentTop &&
        scrollPosition <= componentBottom - windowHeight
      ) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial visibility

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerRef = useRef(null);

  return (
    <>
      <div className="container pb-44" id="third" ref={containerRef}>
        <div className="text-left">
          <h3 className="text-4xl font-bold my-4 overflow-hidden studentspeak1 border-b-orange-600">
            STUDY IN GERMANY WITH US
          </h3>
        </div>
        <div className="freelance_wrapper">
          <div>
            <div className="flex justify-between w-full free_wrapper flex-wrap">
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={university}
                    alt="universityshort"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="university_content w-1/2 p-4 text-left px-5">
                <div className="me-2">
                  <img
                    src={freecounselling}
                    alt="free_counselling"
                    height="80"
                    width="80"
                  />
                </div>
                <div>
                  <h3 className="mb-2 md:mb-3 leading-10">
                    Free Counselling
                  </h3>
                  <p className="mb-2 md:mb-3 applicartion_title">
                    Our personalized session at NO COST{" "}
                  </p>
                  <p className="lorem mb-3">
                    Get Free Expert Guidance on your Study Abroad
                    dream and shortlist courses from a plethora of
                    500+ Universities and 15,000+ courses.
                  </p>
                  <div className="explore_wrapper">
                    <button className="explore_btn py-1 px-2 font-bold rounded md:py-2 md:px-4 ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper flex-wrap">
              <div className="university_content w-1/2 p-4 text-left px-5">
                <div className="me-2">
                  <img
                    src={universityIcon}
                    alt="university"
                    height="50"
                    width="50"
                  />
                </div>
                <div>
                  <h3 className="mb-2 md:mb-3 leading-10">
                    University Shortlisting
                  </h3>
                  <p className="mb-2 md:mb-3 applicartion_title">
                    50% Applications fail due to wrong choice of
                    university
                  </p>
                  <p className="lorem mb-3">
                    Apply to multiple institutions in a single
                    application with numerous fee waivers and save
                    your time.
                  </p>
                  <div className="explore_wrapper">
                    <button className="explore_btn py-1 px-2 font-bold rounded md:py-2 md:px-4 ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={statement}
                    alt="universityshort"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper flex-wrap">
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={university}
                    alt="universityshort"
                    height={250}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="university_content w-1/2 p-4 text-left px-5">
                <div className="me-2">
                  <img
                    src={purposeIcon}
                    alt="free_counselling"
                    height="60"
                    width="60"
                  />
                </div>
                <div>
                  <h3 className="mb-2 md:mb-3 leading-10">
                    Statement of purpose
                  </h3>
                  <p className="mb-2 md:mb-3 applicartion_title">
                    Stand out from the crowd
                  </p>
                  <p className="lorem mb-3" style={{ width: "100%" }}>
                    Get an Education Loan without Collateral within
                    3-5 working days at competitive Interest Rates and
                    clear the financial hurdle.
                  </p>
                  <div className="explore_wrapper">
                    <button className="explore_btn py-1 px-2 font-bold rounded md:py-2 md:px-4 ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper flex-wrap">
              <div className="university_content w-1/2 p-4 text-left px-5">
                <div className="me-2">
                  <img
                    src={curriculumIcon}
                    alt="university"
                    height="60"
                    width="60"
                  />
                </div>
                <div>
                  <h3 className="mb-2 md:mb-3 leading-10">
                    Curriculum Vitae
                  </h3>
                  <p className="mb-2 md:mb-3 applicartion_title">
                    Full Assistance
                  </p>
                  <p className="lorem mb-3">
                    Send your money abroad securely for University
                    Fees, GIC, Living Expenses or a Blocked Account at
                    the Lowest Exchange Rates and fastest processing.
                  </p>
                  <div className="explore_wrapper">
                    <button className="explore_btn py-1 px-2 font-bold rounded md:py-2 md:px-4 ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={interview}
                    alt="universityshort"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper flex-wrap">
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={university}
                    alt="universityshort"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="university_content w-1/2 p-4 text-left px-5">
                <div className="me-2">
                  <img
                    src={recommendateIcon}
                    alt="free_counselling"
                    height="80"
                    width="80"
                  />
                </div>
                <div>
                  <h3 className="mb-2 md:mb-3 leading-10">
                    Letter of recommendation
                  </h3>
                  <p className="mb-2 md:mb-3 applicartion_title">
                    “Good” to “Great” - Letter of recommendation
                  </p>
                  <p className="lorem mb-3">
                    With our Visa Expert, fulfil the Visa application
                    requirements and apply for the Visa. We have a
                    success rate of more than 95.5% Start Visa
                    Application
                  </p>
                  <div className="explore_wrapper">
                    <button className="explore_btn py-1 px-2 font-bold rounded md:py-2 md:px-4 ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper flex-wrap">
              <div className="university_content w-1/2 p-4 text-left px-5">
                <div className="me-2">
                  <img
                    src={universityapplicantIcon}
                    alt="university"
                    height="50"
                    width="50"
                  />
                </div>
                <div>
                  <h3 className="mb-2 md:mb-3 leading-10">
                    University Application
                  </h3>
                  <p className="mb-2 md:mb-3 applicartion_title">
                    Successful and hassle free application
                  </p>
                  <p className="lorem mb-3">
                    Send your money abroad securely for University
                    Fees, GIC, Living Expenses or a Blocked Account at
                    the Lowest Exchange Rates and fastest processing.
                  </p>
                  <div className="explore_wrapper">
                    <button className="explore_btn py-1 px-2 font-bold rounded md:py-2 md:px-4 ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={university_application}
                    alt="universityshort"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper flex-wrap">
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={university_application}
                    alt="universityshort"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="university_content w-1/2 p-4 text-left px-5">
                <div className="me-2">
                  <img
                    src={visaIcon}
                    alt="university"
                    height="50"
                    width="50"
                  />
                </div>
                <div>
                  <h3 className="mb-2 md:mb-3 leading-10">
                    Visa Assistance
                  </h3>
                  <p className="mb-2 md:mb-3 applicartion_title">
                    Visa to enter Germany
                  </p>
                  <p className="lorem mb-3">
                    With our Visa Expert, fulfil the Visa application
                    requirements and apply for the Visa. We have a
                    success rate of more than 95.5%
                  </p>
                  <div className="explore_wrapper">
                    <button className="explore_btn py-1 px-2 font-bold rounded md:py-2 md:px-4 ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper flex-wrap">
              <div className="university_content w-1/2 p-4 text-left px-5">
                <div className="me-2">
                  <img
                    src={accomodateIcon}
                    alt="university"
                    height="50"
                    width="50"
                  />
                </div>
                <div>
                  <h3 className="mb-2 md:mb-3 leading-10">
                    Accomodation and travel assistance
                  </h3>
                  <p className="mb-2 md:mb-3 applicartion_title">
                    Complete assistance for your travel & stay
                  </p>
                  <p className="lorem mb-3">
                    Struggling to find accommodation before moving to
                    a new country?Not anymore. Book your secure
                    accommodation online and stay stress-free.
                  </p>
                  <div className="explore_wrapper">
                    <button className="explore_btn py-1 px-2 font-bold rounded md:py-2 md:px-4 ">
                      Explore Now
                    </button>
                  </div>
                </div>
              </div>
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={university_application}
                    alt="universityshort"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="divider_line"
            style={{ height: `${componentheight - 100}px` }}
          ></div>
          <div>
            {" "}
            <img
              src={progress_start}
              alt="progress"
              className="inner_progress"
              height={400}
              width={500}
            />
          </div>
          <div className="progress1">
            <div className="relative">
              {visiblePlaneTop && (
                <img
                  src={aero_plane}
                  alt="aero_plane"
                  className="topPlane"
                />
              )}
              {visiblePlaneBottom && (
                <img
                  src={aero_plane}
                  alt="aero_plane"
                  className="bottomPlane"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {isVisible && (
        <div className="fixedAero_plane">
          <img
            src={aero_plane}
            alt="aero_plane"
            style={{ height: "50px", width: "80px" }}
          />
        </div>
      )}
    </>
  );
};

export default Freecounselling;
