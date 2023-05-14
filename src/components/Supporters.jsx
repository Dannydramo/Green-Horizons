import React, { Fragment } from "react";
import Logo from "../images/Logo.svg";
import Logo1 from "../images/Logo (1).svg";
import Logo2 from "../images/Logo (2).svg";
import Logo3 from "../images/Logo (3).svg";
import Logo4 from "../images/Logo (4).svg";
import Logo5 from "../images/Logo (5).svg";
import Marquee from "react-fast-marquee";

const Supporters = () => {
  return (
    <Fragment>
      <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
        <div className="flex my-8 items-center space-x-1 justify-between">
          <h4 className="font-bold text-xl">OUR SUPPORTERS</h4>
          {/* <hr className="bg-gray h-[2px] w-[90%]" /> */}
        </div>
        <Marquee autoFill pauseOnHover>
          {" "}
          <div className="flex justify-between space-x-12">
            <img src={Logo} alt="" className="ml-12" />
            <img src={Logo1} alt="" />
            <img src={Logo2} alt="" />
            <img src={Logo3} alt="" />
            <img src={Logo4} alt="" />
            <img src={Logo5} alt="" />
          </div>
        </Marquee>
      </div>
    </Fragment>
  );
};

export default Supporters;
