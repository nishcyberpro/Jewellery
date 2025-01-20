import React from "react";

const Slider = () => {
  return (
    <div className="slider flex w-screen h-[350px] md:h-[500px]">
      <div className="w-screen">
        <img
          src="/images/banner/banner1.jpg"
          alt="Description"
          className="w-screen h-full  object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
