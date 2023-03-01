import React, { useState, useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import Footer from "./components/footer";
import Header from "./components/header";
import SidebarDesktop from "./components/sidebarDesktop";
import sidebarData from "./utils/sidebarData";
import SidebarMobile from "./components/sidebarMobile";
import MainContent from "./components/mainContent";

function App() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const handleClose = () => setShowMobileSidebar(false);
  const handleShow = () => setShowMobileSidebar(true);

  const [isSection4Visible, setIsSection4Visible] = useState(false);
  const fadeInRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (fadeInRef.current) {
        const paragraph2Position =
          fadeInRef.current.getBoundingClientRect().top +
          scrollPosition -
          window.innerHeight;
        setIsSection4Visible(scrollPosition > paragraph2Position);
        return;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Header toggleMobileSidebar={handleShow} />
      <Container fluid className='p-0'>
        <div className='app-wrapper bg-secondary'>
          <SidebarDesktop sidebarData={sidebarData} />
          <MainContent />
          <aside
            className={`app-rightsidebar bg-success ${
              isSection4Visible ? "right-fade" : ""
            }`}
          />
          <Footer fadeInRef={fadeInRef} />
        </div>
      </Container>
      <SidebarMobile
        show={showMobileSidebar}
        sidebarData={sidebarData}
        handleClose={handleClose}
      />
    </>
  );
}

export default App;
