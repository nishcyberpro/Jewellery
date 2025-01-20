import React from "react";

const SingleImage = () => {
  return (
    <div
      className="w-screen h-[100px md:h-[150px] lg:h-[200px] mt-10 bg-cover flex justify-center items-center"
      style={{ backgroundImage: "url(/images/banner/banner2.jpg)" }}
    >
      <h2 className="font-serif text-white text-[24px] md:text-[40px] lg:text-[80px] py-3 px-4">
        Where Tradition Meets Modern Gold Designs.
      </h2>
    </div>
  );
};

export default SingleImage;
