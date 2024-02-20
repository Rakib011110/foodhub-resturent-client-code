import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import img1 from "../../../assets/Banner/Black Orange Modern Food Promotion Banner.png";
import img2 from "../../../assets/Banner/Delicious Food Menu Simple.png";
import img3 from "../../../assets/Banner/black yellow food menu banner.png";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <img src={img1} />
          {/* <p className="legend">Legend 1</p> */}
        </div>
        <div>
          <img src={img2} />
          {/* <p className="legend">Legend 2</p> */}
        </div>
        <div>
          <img src={img3} />
          {/* <p className="legend">Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
