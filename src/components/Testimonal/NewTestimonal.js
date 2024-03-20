import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import "./../../styles/NewTestimonal.css";
// import { FaBeer, FaChevronLeft } from "react-icons/fa";
import anthonyreedy from "./../../assests/testimonal/testimonal_image.svg";
import shwetaUniversity from "./../../assests/new-testimonal/shwetauniversity.svg";
import abhay_university from "./../../assests/new-testimonal/abhayUniversity.svg";
import naveen_university from "./../../assests/new-testimonal/naveenUniversity.svg";
import shwetacanva from "./../../assests/new-testimonal/Testimonial - website/11.png";
import abhaycanva from "./../../assests/new-testimonal/Testimonial - website/12.png";
import naveencanva from "./../../assests/new-testimonal/Testimonial - website/10.png";
import akankshacanva from "./../../assests/new-testimonal/Testimonial - website/3.png";
import taranjitcanva from "./../../assests/new-testimonal/Testimonial - website/5.png";
import kripalcanva from "./../../assests/new-testimonal/Testimonial - website/6.png";
import prasadcanva from "./../../assests/new-testimonal/Testimonial - website/7.png";
import arshiyacanva from "./../../assests/new-testimonal/Testimonial - website/8.png";
import anthonycanva from "./../../assests/new-testimonal/Testimonial - website/9.png";

import playIcon from "./../../assests/testimonal/play.svg";

import abhay from "./../../assests/new-testimonal/abhay.svg";
import naveen from "./../../assests/new-testimonal/naveen.svg";

import playbtn from "./../../assests/testimonal/play.svg";
import university from "./../../assests/testimonal/University_of_Europe.png";
import dummyVideo from "./../../assests/dummyvideo.mp4";
import dummyVideo1 from "./../../assests/dummy1.mp4";

import { FaPlayCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import PopUp from "../Modal/PopUp";

function NewTestimonal({ handleWatchStory }) {
  const [sliderRef, setSliderRef] = useState(null);

  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    infinite: true,
    cssEase: "ease",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const hotelCards = [
    {
      imageSrc: shwetacanva,
      name: "Shweta Kumar",
      para1:
        " The whole process was very transparent it marked my expectations. I was kept well informed about the ongoing",
      para2: `    Their advice and service were very genuine. `,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: shwetaUniversity,
      story: dummyVideo,
    },
    {
      imageSrc: abhaycanva,
      name: "Abhay Ahuja",
      para1:
        "  Germanywale is one of the best consulting firms I have come across. Their advice and service were very genuine. developments.",
      para2: ` I'm very grateful for the seamless experience  `,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: abhay_university,
      story: dummyVideo1,
    },
    {
      imageSrc: naveencanva,
      name: "Naveen Verma",
      para1:
        "My experience with Germanywale has been nothing short of my high expectations. Their flexibility with assigning preferred mentors is ",
      para2: `excellent, and the kind of personal touch`,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: naveen_university,
      story: dummyVideo,
    },
    {
      imageSrc: akankshacanva,
      name: "Akanksha Mourya",
      para1:
        "Genuinely I was very worried about my profile and application before joining Germanywale. But the team always gives me ",
      para2: `confidence and assurance that I will get an admit.`,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: abhay_university,
      story: dummyVideo1,
    },
    {
      imageSrc: taranjitcanva,
      name: "Taranjit Kaur",
      para1:
        "I would never forget the key role played by Team Germanywale in university shortlisting and application.They were available ",
      para2: `beyond the time, no matter what type of concern I have.`,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: naveen_university,
      story: dummyVideo,
    },
    {
      imageSrc: kripalcanva,
      name: "Kripal Kishor",
      para1:
        "The team was really open to me. Whenever I had a doubt , the team was always there to help me out. The team gave me hope and proper guidance and motivated ",
      para2: `me a lot to go beyond.`,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: abhay_university,
      story: dummyVideo1,
    },
    {
      imageSrc: prasadcanva,
      name: "Prasad Patil",
      para1:
        "German ywale provided exceptional support and engagement, promptly addressing all my questions and doubts. Their patience and reliability eased my journey.",
      para2: ` me a lot to go beyond.`,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: abhay_university,
      story: dummyVideo1,
    },
    {
      imageSrc: arshiyacanva,
      name: "Arshiya Sharma",
      para1:
        "Saurabh and the entire team were in touch with me consistently the whole time and were always there if I had any doubts. I would highly ",
      para2: `recommend Germanywale to my everyone.`,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: abhay_university,
      story: dummyVideo1,
    },
    {
      imageSrc: anthonycanva,
      name: "Antony Reddy",
      para1:
        "My entire application process with Germanywale has been extremely smooth. Everyone in ",
      para2: `the team is exceptional              and  very helpful.`,
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
      university: abhay_university,
      story: dummyVideo1,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  });

  const [watchStory, setWatchstory] = useState(false);

  return (
    <>
      <section id="second" className="pb-5 testi">
        <Container className="md:px-4 pt-4">
          <div className="text-left">
            <h3 className="text-4xl font-bold mt-4 mb-4 overflow-hidden studentspeak">
              WHAT OUR STUDENT SPEAK
            </h3>
          </div>
          <div className="slider-container">
            <Slider ref={setSliderRef} {...sliderSettings}>
              {hotelCards.map((card, index) => (
                <>
                  <div className="new_testimonal">
                    <div className="relative p-4 pb-1">
                      <div className="newtesti_content text-left pt-2">
                        {card.para1}
                      </div>
                      <div
                        className="newtesti_content text-left w-60 mb-2"
                        dangerouslySetInnerHTML={{
                          __html: card.para2,
                        }}
                      ></div>

                      <p className="text-left font-semibold">
                        {card.name}
                      </p>
                      <p className="text-left text__14 w-60 student_name">
                        Masters in Non-Financials Intensive
                      </p>
                      <div className="mt-1">
                        <img
                          src={card.university}
                          alt="university"
                          className="universityImages object-contain"
                        />
                      </div>

                      <div className="testi_image absolute right-bottom ">
                        <div
                          className="image_inner object-contain bg-cover z-10 bg-no-repeat"
                          style={{
                            backgroundImage: `url(${card.imageSrc})`,
                          }}
                        />
                      </div>
                      <div className="firstvector"></div>
                      <div className="secondvector"></div>
                    </div>
                    <div
                      className="view"
                      onClick={() => handleWatchStory(card.story)}
                    >
                      <img src={playIcon} alt="playbtn" />
                      <h3 className="ml-3 text__18 storytitle">
                        Watch their story
                      </h3>
                    </div>
                  </div>
                </>
              ))}
            </Slider>
          </div>
        </Container>
      </section>
    </>
  );
}
export default NewTestimonal;
