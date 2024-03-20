import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./../../styles/Hero.css";
import coverimage from "./../../assests/heroimage.svg";
import studentsgroup from "./../../assests/Group 124.svg";
import tesla from "./../../assests/Tesla_logo.svg";
import bmw from "./../../assests/bmw1.svg";
import oodd from "./../../assests/oodd.svg";
import sap from "./../../assests/sap.svg";
import btn_background from "../../assests/btn_background.svg";
import lufthansa from "./../../assests/Lufthansa_Logo_2018.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 50,
    });
  });
  return (
    <>
      <div className="herowrapper" id="first">
        <Container className="pt-12 pb-6">
          <Row className="px-3 md:px-4 h-full py-1 md:py-4">
            <Col lg={5} md={6} sm={12} className="hero_content">
              <div className="hero-left-content mb-4">
                <p className="dreams">
                  Empowering dreams o
                  <span className="dream-f">f</span>
                </p>
                <h2 className="studycontent">Studying in Germany</h2>
                <button className="callbtn">
                  Call for FREE counselling
                </button>
              </div>
              <div className="mb-2 flex items-center justify-center gap-2 md:flex-wrap  md:justify-normal  md:mb-6">
                <img src={studentsgroup} alt="studentsgroup" />
                <p className="text-black guranteewrapper">
                  <span className="percent">100%</span> guaranteed
                  admission
                </p>
              </div>
              <div className="mt-2 md:mt-5">
                <p
                  className="text__16 our-student leading-7 md:leading-3 "
                  style={{ fontWeight: "100" }}
                >
                  Our students finished University to work at{" "}
                  <span className="percent">global offices</span> of
                </p>
              </div>
            </Col>
            <Col
              lg={7}
              md={6}
              sm={12}
              className="flex justify-center align-middle h-3/4"
            >
              <img
                src={coverimage}
                alt="coverimage"
                className="coverimage"
              />
            </Col>
          </Row>
          <div className="brandlogos flex flex-wrap">
            <img src={tesla} alt="tesla" />
            <img src={bmw} alt="bmw" />
            <img src={oodd} alt="oodd" />
            <img src={sap} alt="sap" />
            <img src={lufthansa} alt="lufthansa" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
