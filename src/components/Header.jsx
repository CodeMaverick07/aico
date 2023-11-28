import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const path = window.location.pathname;
  
  return (
    <>
      <header className=" text-white/60 font-mic text-3xl fixed z-10">
        <div className="flex justify-between items-center mt-5 mx-20">
          <div className="text-xl flex">
            <Link
              className={`pr-14 shadow ${path === "/about" && "text-white"}`}
              to={"/about"}
            >
              About
            </Link>
            <Link
              className={`pr-14 flex items-center shadow ${
                path === "/activities" && "text-white"
              }`}
              to={"/activities"}
            >
              Activities
              <IoIosArrowDown className="ml-2" />
            </Link>
            <Link
              className={`pr-14 ${
                path === "/community" && "text-white"
              } shadow`}
              to={"/community"}
            >
              Community
            </Link>
          </div>
          <div className="mx-36">
            <Link
              to={"/"}
              className={`flex items-center shadow ${
                path === "/" && "text-white"
              } `}
            >
              <img src="./logo_sq.png" className="h-14 w-14 mr-5" alt="logo" />
              <span>Ai CoLegion</span>
            </Link>
          </div>
          <div>
            <div className="connect p-2">
              {" "}
              <Link
                to={"/contact"}
                className={`text-white/80 shadow ${
                  path === "/contact" && "text-white"
                } `}
              >
                Connect to us!
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
