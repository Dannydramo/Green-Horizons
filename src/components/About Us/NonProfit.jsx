import React, { Fragment } from "react";
import AbtVidBg from "../../images/AbtVidBg.svg";
import Supporters from "../Supporters";

const NonProfit = () => {
  return (
    <Fragment>
      <section>
        <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem] mt-24">
          <div className="flex space-x-2 items-center">
            <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
            <h4 className="font-bold text-xl">KNOW ABOUT US</h4>
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:space-x-8 space-y-8 md:space-y-0">
            <div className="md:w-[60%]">
              <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] ml-4 xl:ml-8">
                We are a non profit team working worldwide
              </h1>
            </div>
            <div className="md:w-1/2">
              <h3 className="font-bold text-lg md:text-xl mb-4">
                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.
                Nunc ut sem vitae risus tristique posuere.
              </h3>
              <p className="text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Suspendisse varius enim
                elementum tristique.
              </p>
            </div>
          </div>
          <img
            src={AbtVidBg}
            alt=""
            className="block mx-auto mt-16 mb-[-7rem] sm:mb-[-12rem]"
          />
        </div>
      </section>

      <section className="bg-[#EFF7F2] pt-[1rem] sm:pt-[7rem] pb-8">
        <div className="w-[95%] md:w-[85%] lg:w-[80%] mx-auto mt-24">
          <div className="flex justify-between flex-col lg:flex-row my-[3rem] space-y-8 lg:space-y-0 lg:space-x-12">
            <div className="">
              <h3 className="font-bold my-2">OUR MISSION</h3>
              <h1 className="text-3xl sm:text-4xl font-bold my-4">
                We make the world we save our own environment
              </h1>
              <p className="text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
            <div className="">
              <h3 className="font-bold my-2">OUR VISION</h3>
              <h1 className="text-3xl sm:text-4xl font-bold my-4">
                Plant more trees to make world air pollution free
              </h1>
              <p className="text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
        </div>
        <Supporters />
      </section>
    </Fragment>
  );
};

export default NonProfit;
