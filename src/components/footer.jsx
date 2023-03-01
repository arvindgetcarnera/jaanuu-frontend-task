import React from "react";

const Footer = ({fadeInRef}) => {

  return (
    <footer className="app-footer bg-warning bottom-0" ref={fadeInRef}>
        <p>Copyright Jaanuu &copy; 2023</p>
    </footer>
  );
};

export default Footer;
