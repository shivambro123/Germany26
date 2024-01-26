import React, { useEffect, useState } from "react";
import "./../../styles/Freecounsellingcss.css";
import university from "./../../assests/Freelance/Free_Counselling.png";
import curriculum from "./../../assests/Freelance/curriculum.svg";
import statement from "./../../assests/Freelance/statement.svg";
import interview from "./../../assests/Freelance/interview.svg";
import recommendation from "./../../assests/Freelance/recommendation.svg";
import university_application from "./../../assests/Freelance/university_application.svg";
import visa from "./../../assests/Freelance/visa.svg";
import travel_assistant from "./../../assests/Freelance/travel_assistant.svg";

import aero_plane from "./../../assests/aero_vector.svg";

import progress_start from "./../../assests/Freelance/progress_start.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Freecounselling = () => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 50,
    });
  });

  const handleScroll = () => {
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    console.log(scrollY);
    if (scrollY > 930 && scrollY < 6663) {
      setActive("inner_progress1");
    } else if (scrollY > 6663) {
      setActive("inner_progress_visibleBottom");
    } else {
      setActive("inner_progress_visibleTop");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className="container pb-44" id="third">
        <div className="text-left">
          <h3 className="text-4xl font-bold my-4 overflow-hidden studentspeak1 border-b-orange-600">
            Study in GERMANY with Us ?
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
                <h3 className="mb-2 md:mb-3 text__40">Free Counselling</h3>
                <p className="mb-2 md:mb-3 applicartion_title">
                  Our personalized session at NO COST{" "}
                </p>
                <p className="lorem mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
                <div className="explore_wrapper">
                  <button className="explore_btn py-1 px-2 font-bold text-sm md:text-xl rounded md:py-2 md:px-4 ">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper reverseClass">
              <div className="university_content w-1/2 p-4 text-left px-5 md:text-end">
                <h3 className="mb-2 md:mb-3 text__40">
                  University Shortlisting
                </h3>
                <p className="mb-2 md:mb-3 applicartion_title">
                  Our personalized session at NO COST{" "}
                </p>
                <p className="lorem mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
                <div className="explore_wrapper">
                  <button className="explore_btn py-1 px-2 font-bold text-sm md:text-xl rounded md:py-2 md:px-4 ">
                    Explore Now
                  </button>
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
                    height={400}
                    width={500}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper">
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={curriculum}
                    alt="universityshort"
                    height={500}
                    width={1000}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="university_content w-1/2 p-4 text-left px-5">
                <h3 className="mb-2 md:mb-3 text__40">Statement of purpose</h3>
                <p className="mb-2 md:mb-3 applicartion_title">
                  Stand out from the crowd
                </p>
                <p className="lorem mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
                <div className="explore_wrapper">
                  <button className="explore_btn py-1 px-2 font-bold text-sm md:text-xl rounded md:py-2 md:px-4 ">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper reverseClass">
              <div className="university_content w-1/2 p-4 text-left px-5 md:text-end">
                <h3 className="mb-2 md:mb-3 text__40">Curriculum Vitae</h3>
                <p className="mb-2 md:mb-3 applicartion_title">
                  Full Assistance{" "}
                </p>
                <p className="lorem mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
                <div className="explore_wrapper">
                  <button className="explore_btn py-1 px-2 font-bold text-sm md:text-xl rounded md:py-2 md:px-4 ">
                    Explore Now
                  </button>
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
                    height={400}
                    width={500}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper">
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={recommendation}
                    alt="universityshort"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="university_content w-1/2 p-4 text-left px-5">
                <h3 className="mb-2 md:mb-3 text__40">
                  Letter of recommendation
                </h3>
                <p className="mb-2 md:mb-3 applicartion_title">
                  “Good” to “Great” - Letter of recommendation{" "}
                </p>
                <p className="lorem mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
                <div className="explore_wrapper">
                  <button className="explore_btn py-1 px-2 font-bold text-sm md:text-xl rounded md:py-2 md:px-4 ">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper reverseClass">
              <div className="university_content w-1/2 p-4 text-left px-5 md:text-end">
                <h3 className="mb-2 md:mb-3 text__40">
                  University Application
                </h3>
                <p className="mb-2 md:mb-3 applicartion_title">
                  Successful and hassle free application
                </p>
                <p className="lorem mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
                <div className="explore_wrapper">
                  <button className="explore_btn py-1 px-2 font-bold text-sm md:text-xl rounded md:py-2 md:px-4 ">
                    Explore Now
                  </button>
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
                    height={400}
                    width={500}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper">
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper "
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={visa}
                    alt="visa"
                    height={350}
                    width={400}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="university_content w-1/2 p-4 text-left px-5">
                <h3 className="mb-2 md:mb-3 text__40">Visa Assistance</h3>
                <p className="mb-2 md:mb-3 applicartion_title">
                  Visa to enter Germany
                </p>
                <p className="lorem mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
                <div className="explore_wrapper">
                  <button className="explore_btn py-1 px-2 font-bold text-sm md:text-xl rounded md:py-2 md:px-4 ">
                    Explore Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-between w-full free_wrapper reverseClass">
              <div className="university_content w-1/2 p-4 md:ps-0 px-5">
                <h3 className="mb-3 ps-0 text-left text__40 md:text-end">
                  Accomodation and travel assistance
                </h3>
                <p className="mb-3 applicartion_title text-left md:text-end">
                  Complete assistance for your travel & stay
                </p>
                <p className="lorem mb-3 text-left md:text-end">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore
                </p>
                <div className="explore_wrapper text-left md:text-end">
                  <button className="explore_btn py-1 px-2 font-bold text-sm md:text-xl rounded md:py-2 md:px-4 ">
                    Explore Now
                  </button>
                </div>
              </div>
              <div
                className="w-1/2 mb-2 px-4 py-2 imagewrapper"
                data-aos="zoom-in"
              >
                <div className="mb-2 md:mb-5 ">
                  <img
                    src={travel_assistant}
                    alt="universityshort"
                    height={400}
                    width={500}
                    className="mx-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="divider_line"></div>
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
            <img
              src={aero_plane}
              alt="aero_plane"
              className={active}
              height={300}
              width={300}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Freecounselling;
