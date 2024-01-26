import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Col, Container, Row } from "react-bootstrap";
import "./../../styles/Testimonalcss.css";
// import { FaBeer, FaChevronLeft } from "react-icons/fa";
import anthonyreedy from "./../../assests/testimonal/testimonal_image.svg";
import playbtn from "./../../assests/testimonal/play.svg";
import university from "./../../assests/testimonal/University_of_Europe.png";
import { FaPlayCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

function Success() {
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
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
    {
      imageSrc: anthonyreedy,
      title: "Studio Room",
      description: "Lorem ipsum dolor sit amet, consectur dolori",
      pricingText: "USD 50/Day",
      features: ["Free Wifi", "Free breakfast"],
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 100,
    });
  });

  return (
    <>
      <section id="second" className="pb-5 testi">
        <Container className="px-3 md:px-4 pt-4">
          <div className="text-left">
            <h3 className="text-4xl font-bold mt-4 mb-4 overflow-hidden studentspeak">
              What our student speak
            </h3>
          </div>
          <div className="h-full min-w-full">
            {/* <div className="mb-2 flex justify-end md:mr-20 mr-2">
              <button
                onClick={sliderRef?.slickPrev}
                className="bg-orange-500 p-3 rounded-full text-white hover:text-black"
              >
                <FaChevronLeft className="text__20" />
              </button>
              <button
                onClick={sliderRef?.slickNext}
                className="bg-orange-500 p-3 rounded-full text-white hover:text-black ml-3"
              >
                <FaChevronRight className="text__20" />
              </button>
            </div> */}

            <Slider ref={setSliderRef} {...sliderSettings}>
              {hotelCards.map((card, index) => (
                <>
                  <div className="testimonal">
                    <div className="relative text-left">
                      <div className="px-3 py-3 pb-2 leading-5">
                        <p className="testi-feedback text-left text-[#000000]">
                          My entire application process with
                          Germanywale has been extremely smooth.
                          Everyone in the team is exceptional and very
                          helpful. I have zero complaints. I would
                          recommend
                        </p>

                        <p className="testi-feedback text-left w-64 text-[#000000] mb-11">
                          Germanywale to any student who is looking to
                          go to Germany to make <br /> their
                          study-abroad <br />
                          dreams come true.
                        </p>

                        <p className="text-xs text-left text-[#000000] w-32">
                          Master of Business Administration
                        </p>
                        <img
                          src={university}
                          alt="university_logo"
                          height={70}
                          width={65}
                          className=""
                        />
                      </div>
                      <div className="firstvector"></div>
                      <div className="secondvector"></div>
                      <div className="overlayImage">
                        <img
                          src={card.imageSrc}
                          alt={card.title}
                          className="h-full w-full object-fill z-0"
                        />
                      </div>
                      <div className="ml-28 z-50 absolute bottom-16">
                        {" "}
                        <button className="namebtn mt-3 z-50">
                          Anthony Reddy
                        </button>
                      </div>
                    </div>

                    <div className="view text-lg">
                      {/* <FaPlayCircle className="text-xl"/> */}
                      <img src={playbtn} alt="playbtn" />
                      &nbsp;Watch Story
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
export default Success;
