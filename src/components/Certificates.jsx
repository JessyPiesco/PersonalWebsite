import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CSU from "../pictures/csu_certificate.png";
import WellsFargoCert from "../pictures/wells_fargo_cert.png";
import google from "../pictures/google_screenshot.png";
import google2 from "../pictures/googleBitAndBytes.png"

const Certificates = () => {
  return (
    <div className="Certificates pt-2 pb-4 p-0">
      <h2>Certificates</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
      >
        <div>
          <img src={CSU} alt="CSU Certificate" />
        </div>
        <div>
          <img src={WellsFargoCert} alt="Wells Fargo Certificate" />
        </div>
        <div>
          <img src={google} alt="Google It Fundamentals Certificate"  />
        </div>
        <div>
          <img src={google2} alt="Google It Bits and Bytes Certificate"  />
        </div>
      </Carousel>
    </div>
  );
};

export default Certificates;
