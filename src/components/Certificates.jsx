import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CSU from "../pictures/csu_certificate.png";
import WellsFargoCert from "../pictures/wells_fargo_cert.png";

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
      </Carousel>
    </div>
  );
};

export default Certificates;
