import React from "react";

const Navbar = () => {
  const menuItems = [
    { id: 1, name: "Home", link: "/home" },
    { id: 2, name: "About Us", link: "/about-us" },
    { id: 3, name: "Contact", link: "/contact" },
    { id: 4, name: "Pages", link: "/pages" },
    { id: 5, name: "Gallery", link: "/gallery" },
  ];
  return (
    <div className="navbar flex w-screen  justify-center">
      <div className="eighty bg-white w-4/5 h-[75px] flex flex-row justify-between items-center ">
        <div className="icon">
          <img src="/images/logo/logo.png" alt="logo" />
        </div>
        <div className="menu  px-4">
          <ul className=" flex-row gap-4 hidden lg:flex">
            {menuItems.map((item) => (
              <li className="font-sans font-extralight uppercase lg:text-[24px] ">
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="right flex gap-2 hidden md:flex lg:flex">
          <div className="search  flex justify-center items-center  border-x-2 h-[75px] px-4">
            <img src="/images/icons/Heart.png" className="" />
          </div>

          <div className="search  flex justify-center items-center  border-r-2 h-[75px] px-4">
            <img src="/images/icons/search.png" />
          </div>
          <div className="search  flex justify-center items-center  border-r-2 h-[75px] px-4">
            <img src="/images/icons/cart.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
