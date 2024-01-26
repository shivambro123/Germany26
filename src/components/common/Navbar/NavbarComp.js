import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "./../../../assests/logo.svg";
import "./../../../styles/Navbarcompcss.css";
import { HiOutlineMail } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
function NavbarComp() {
  // const handleNavbarItemClick = (sectionId) => {
  //   const targetSection = document.getElementById(sectionId);

  //   if (targetSection) {
  //     const offset = 50; // Adjust this value based on your design
  //     const offsetTop = targetSection.offsetTop - offset;

  //     window.scrollTo({
  //       top: offsetTop,
  //       behavior: 'smooth',
  //     });
  //   }
  // };
  const CallIcon = ({ phoneNumber }) => {
  const handleCallClick = () => {
    const telLink = `tel:${phoneNumber}`;
    window.location.href = telLink;
  };

  return (
    <div>
      {/* Your call icon */}
      <span onClick={handleCallClick}>
        {/* Add your call icon here */}
        <div className="flex items-center me-2 h-12 md:hidden">
            <IoIosCall className="hover:text-orange-400 h-max text__40" />
          </div>
      </span>
    </div>
  );
};

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary navbarwrapper sticky top-0 w-100 z-50"
    >
      <Container className="wrapper_inner">
        <div className="w-full flex justify-between">
          <Navbar.Brand href="/">
            <img src={logo} alt="logo" className="logo" />
          </Navbar.Brand>
          <CallIcon phoneNumber="+91 8451895512" />

          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="h-12"
          />
        </div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              data-to-scrollspy-id="first"
              href="#first"
              // onClick={() => handleNavbarItemClick('section1')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              data-to-scrollspy-id="second"
              href="#second"
              // onClick={() => handleNavbarItemClick('section2')}
            >
              About Us
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              data-to-scrollspy-id="third"
              href="#third"
              // onClick={() => handleNavbarItemClick('section3')}
            >
              Services
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              href="#link"
            >
              Reviews
            </Nav.Link>
            <Nav.Link
              className="mx-4 font-bold text-black text-base w-max"
              href="#link"
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
