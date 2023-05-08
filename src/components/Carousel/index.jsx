import React from "react";
import Carousel from "react-material-ui-carousel";

const Slider = ({ children }) => {
  return (
    <Carousel
      indicatorContainerProps={{ style: { textAlign: "left" } }}
      activeIndicatorIconButtonProps={{ style: { color: "#00872B" } }}
      navButtonsWrapperProps={{ style: { display: "none" } }}
    >
      {children}
    </Carousel>
  );
};

export default Slider;
