import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./../../styles/Headercss.css";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { LiaYoutube } from "react-icons/lia";
import { IoIosCall } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import india from "../../assests/testimonal/india.svg";
import germany from "../../assests/testimonal/germany.svg";

const Header = () => {
  return (
    <Container>
      <div className="headerwrapper hidden md:flex py-2 px-4 items-center md:py-3">
        <div className="contact flex flex-wrap">
          <div className="flex flex-wrap justify-start md:justify-normal mb-2 md:mb-0">
            <div className="flex items-center justify-center md:justify-start my-2 md:my-0">
              <IoIosCall className="text-xl hover:text-orange-400" />
              &nbsp;
              <img src={india} alt="india logo" height={26} width={26} />
              <h3 className="text-xs font-bold"> &nbsp;+91 -72198 49834</h3>
            </div>
            <div className="flex items-center my-2 md:my-0">
              <IoIosCall className="text-xl hover:text-orange-400  ml-2" />
              &nbsp;
              <img src={germany} alt="germany logo" height={26} width={26} />
              <h3 className="text-xs font-bold"> &nbsp;+49-17655471593</h3>
            </div>
            <div className="flex items-center my-2 md:my-0">
              <HiOutlineMail className="text-xl hover:text-orange-400  ml-2" />
              <h3 className="text-xs font-bold">
                {" "}
                &nbsp;contact@germanywale.com
              </h3>{" "}
            </div>
            <div className="flex items-center my-2 md:my-0">
              <FaWhatsapp className="text-xl hover:text-orange-400 ml-2" />
              <h3 className="text-xs font-bold"> &nbsp;+91-8484977234</h3>
            </div>
          </div>
        </div>
        <div className="social">
          <div className="social_content flex justify-center md:justify-end ">
            <FaInstagram className="mx-2 text-2xl hover:text-orange-400" />
            <FaFacebookF className="mx-2 text-2xl  hover:text-orange-400" />
            <FaLinkedin className="mx-2 text-2xl  hover:text-orange-400" />
            <LiaYoutube className="mx-2 text-2xl  hover:text-orange-400" />
          </div>
        </div>
      </div>

      <div className="headerwrapper1 md:hidden py-2 px-2 items-center md:py-3">
        <div className="contact flex flex-wrap">
          {/* <div className="flex flex-wrap justify-start md:justify-normal mb-2 md:mb-0">
            <div className="flex items-center justify-center md:justify-start my-2 md:my-0">
              <IoIosCall className="text-xl hover:text-orange-400" />
              &nbsp;
              <img
                src={india}
                alt="india logo"
                height={26}
                width={26}
              />
              <h3 className="text-xs font-bold">
                {" "}
                &nbsp;+91 -72198 49834
              </h3>
            </div>
            <div className="flex items-center my-2 md:my-0">
              <IoIosCall className="text-xl hover:text-orange-400  ml-2" />
              &nbsp;
              <img
                src={germany}
                alt="germany logo"
                height={26}
                width={26}
              />
              <h3 className="text-xs font-bold">
                {" "}
                &nbsp;+49-17655471593
              </h3>
            </div>
            <div className="flex items-center my-2 md:my-0">
              <HiOutlineMail className="text-xl hover:text-orange-400  ml-2" />
              <h3 className="text-xs font-bold">
                {" "}
                &nbsp;contact@germanywale.com
              </h3>{" "}
            </div>
            <div className="flex items-center my-2 md:my-0">
              <FaWhatsapp className="text-xl hover:text-orange-400 ml-2" />
              <h3 className="text-xs font-bold">
                {" "}
                &nbsp;+91-8484977234
              </h3>
            </div>
          </div> */}

          <div className="w-full flex">
            <div>
              {" "}
              <div className="flex items-center justify-between my-1 md:my-0">
                <IoIosCall className="text-xl hover:text-orange-400  ml-2" />
                &nbsp;
                <img src={germany} alt="germany logo" height={10} width={10} />
                <h3 className="text-xs font-bold"> &nbsp;+49-17655471593</h3>
              </div>
            </div>
            <div>
              {" "}
              <div className="social">
                <div className="social_content flex justify-center items-center md:justify-end ">
                  <FaInstagram className="mx-2 text-xl hover:text-orange-400" />
                  <FaFacebookF className="mx-2 text-xl  hover:text-orange-400" />
                  <FaLinkedin className="mx-2 text-xl  hover:text-orange-400" />
                  <LiaYoutube className="mx-2 text-xl  hover:text-orange-400" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div>
              {" "}
              <div className="flex items-center my-2 md:my-0">
                <HiOutlineMail className="text-xl hover:text-orange-400  ml-2" />
                <h3 className="text-xs font-bold">
                  {" "}
                  &nbsp;contact@germanywale.com
                </h3>{" "}
              </div>
            </div>
            <div>
              {" "}
              <div className="flex items-center my-2 md:my-0">
                <HiOutlineMail className="text-xl hover:text-orange-400  ml-2" />
                <h3 className="text-xs font-bold">
                  {" "}
                  &nbsp;contact@germanywale.com
                </h3>{" "}
              </div>
            </div>
            <div>
              {" "}
              <div className="flex items-center my-2 md:my-0">
                <FaWhatsapp className="text-xl hover:text-orange-400 ml-2" />
                <h3 className="text-xs font-bold"> &nbsp;+91-8484977234</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
