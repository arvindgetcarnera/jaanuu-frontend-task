import React from "react";
import mobileBanner1 from "../assets/picture1-1X.jpg";
import mobileBanner2 from "../assets/picture2-1X.jpg";
import desktopBanner1 from "../assets/picture1-2X.jpg";
import desktopBanner2 from "../assets/picture2-2X.jpg";
import { Image } from "react-bootstrap";
import { useMediaQuery } from "react-responsive";
import Button from "react-bootstrap/Button";

export default function Banner() {
  
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });
  const [bannerImg, setBannerImg] = React.useState(
    (isDesktopOrLaptop && desktopBanner1) || (isMobile && mobileBanner1)
  );

  return (
    <div className={`flex-column d-flex align-items-center justify-content-center bg-dark h-50 py-4`}>
      <Image
        roundedCircle
        style={{ maxWidth: 200 }}
        src={bannerImg}
        alt='Desktop Logo'
        className='d-none d-md-block'
      />

      <Image
        roundedCircle
        style={{ maxWidth: 100 }}
        src={bannerImg}
        alt='Mobile Logo'
        className='d-md-none'
      />
      <div className={`${isMobile && 'd-flex flex-column'} mt-2`}>
        <Button
          className='text-white'
          onClick={() =>
            setBannerImg(
              (isDesktopOrLaptop && desktopBanner1) ||
                (isMobile && mobileBanner1)
            )
          }
          variant='link'
        >
          VIEW PICTURE 1
        </Button>
        <Button
          className='text-white'
          onClick={() =>
            setBannerImg(
              (isDesktopOrLaptop && desktopBanner2) ||
                (isMobile && mobileBanner2)
            )
          }
          variant='link'
        >
          VIEW PICTURE 2
        </Button>
      </div>
    </div>
  );
}
