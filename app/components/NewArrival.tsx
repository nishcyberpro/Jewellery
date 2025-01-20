import React from "react";
type Product = {
  id: number;
  name: string;
  image: string;
  tag: string;
  price: string;
  rating: number;
};
interface NewArrivalProps {
  title: string;
  products: Product[];
}

const NewArrival: React.FC<NewArrivalProps> = ({ title, products }) => {
  return (
    <div className=" flex w-screen bg-white flex-col justify-center items-center p-4">
      <div className="eighty bg-white w-screen px-4 lg:w-4/5 md:w-screen md:px-4 h-[50px] flex flex-row justify-between items-center border-b-2   ">
        <div className="header flex justify-between items-center w-full">
          <div className="titleleft">
            <h2 className="font-sans text-[18px] md:text-[20px] lg:text-[24px]">
              {title}
            </h2>
          </div>
          <div className="iconright flex gap-2">
            <img
              src="/images/icons/righticon.svg"
              className="h-[20px] transform rotate-180"
            />
            <img src="/images/icons/righticon.svg" className="h-[20px] " />
          </div>
        </div>
      </div>
      {/* div for products */}
      <div className="eighty bg-white grid px-2 md:px-4 lg:px-0 w-screen md:w-full lg:w-4/5 grid-cols-2 md:grid-cols-3  lg:grid-cols-5  gap-4  mt-4 ">
        {products.map((product: Product) => (
          <div className="singleproduct rounded-lg  border-2 px-4 py-4">
            <div
              className="w-3/5 h-[50px]  bg-center bg-contain bg-no-repeat  relative pb-4 flex justify-center items-center"
              style={{ backgroundImage: "url(/images/icons/tag.svg)" }}
            >
              <span className=" font-sans text-[14px] text-white">
                {product.tag}
              </span>
            </div>

            {/* <div className="tag relative ">
              <img src="/images/icons/tag.svg" className="w-2/5" />
            </div> */}
            <div className="image flex justify-center items-center">
              <img
                src={product.image}
                className="w-4/5 hover:scale-125 hover:cursor-pointer transform transition-all duration-500"
              />
            </div>
            <div className="title font-sans text-[18px] text-gray-600">
              {product.name}
            </div>
            <div className="price font-sans text-[18px] text-gray-500">
              {product.price}
            </div>
            <div className=" flex justify-between items-center">
              <div className="rating flex justify-center items-center gap-1">
                <img src="/images/icons/Star.svg" alt="" />
                <img src="/images/icons/Star.svg" alt="" />
                <img src="/images/icons/Star.svg" alt="" />
                <img src="/images/icons/Star.svg" alt="" />
              </div>
              <div className="wishlist">
                <img
                  src="/images/icons/Heart.png"
                  alt=""
                  className="h-[20px]"
                />
              </div>
            </div>
            <div className="addtocart flex justify-center items-center w-full mt-2">
              <button className="bg-[#DDAC10] text-white py-2 px-4 rounded w-[90%] text-sm  lg:text-lg hover:bg-black hover:text-white cursor-pointer ">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrival;
