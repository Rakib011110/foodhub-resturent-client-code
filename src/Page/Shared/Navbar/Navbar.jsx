import React from "react";

const Navbar = () => {
  const navoptions = (
    <>
      <li>
        <a>HOME </a>
      </li>
      <li>
        <a>ALLL ITEMS</a>
        <ul className="p-2"></ul>
      </li>
      <li>
        <a>ADD FOODS</a>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed z-10 bg-opacity-20 bg bg-orange-400 text-white max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navoptions}
            </ul>
          </div>
          <a className="  w-36 ">
            <img
              src="https://i.ibb.co/yp4PfQT/Green-and-Orange-Vegan-Illustrative-Food-Logo.png"
              alt=""
            />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navoptions}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
