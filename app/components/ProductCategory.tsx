import React from "react";

const ProductCategory = () => {
  return (
    <div className="w-screen flex justify-center items-center bg-white">
      <div className=" w-screen md:w-4/5 lg:w-4/5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-2   justify-center items-center p-4">
        <div
          className=" h-[300px] bg-cover flex justify-center items-center"
          style={{ backgroundImage: "url(/images/banner/banner3.jpg)" }}
        ></div>
        <div
          className=" h-[300px] bg-cover flex justify-center items-center"
          style={{ backgroundImage: "url(/images/banner/banner5.jpg)" }}
        ></div>
        <div
          className=" h-[300px] bg-cover flex justify-center items-center"
          style={{ backgroundImage: "url(/images/banner/banner4.jpg)" }}
        ></div>
      </div>
    </div>
  );
};

export default ProductCategory;
