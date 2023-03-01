import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logoDesktop from "../assets/leaf-logo-2x.png";
import logoMobile from "../assets/leaf-logo-1x.png";

const Header = ({ toggleMobileSidebar }) => {
  return (
    <Navbar className="top-header" bg='info' variant='dark' expand='lg' sticky='top'>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <Image
            style={{ width: "40%" }}
            src={logoDesktop}
            alt='Desktop Logo'
            className='d-none d-md-block'
          />
          <Image
            style={{ width: "50%" }}
            src={logoMobile}
            alt='Mobile Logo'
            className='d-md-none'
          />
        </Navbar.Brand>
        <Navbar.Toggle
          className='d-md-none'
          onClick={toggleMobileSidebar}
          aria-controls='basic-navbar-nav'
        />
      </Container>
    </Navbar>
  );
};

export default Header;
