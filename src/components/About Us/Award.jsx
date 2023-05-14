import React, { Fragment } from "react";
import RaisedImg from "../../images/RaisedImg.svg";
import AwardBadge from "../../images/Award badge.svg";
import AwardBadge1 from "../../images/Award badge (1).svg";
import AwardBadge2 from "../../images/Award badge (2).svg";
import AwardBadge3 from "../../images/Award badge (3).svg";

const Award = () => {
  return (
    <Fragment>
      <section className="my-8">
        <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] text-center my-4">
          Awards & Recognition
        </h1>
        <div className="sm:w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-[3rem] grid grid-cols-2 gap-8 items-center md:grid-cols-3 lg:grid-cols-4">
          <div className="">
            <img src={AwardBadge} alt="" className="block mx-auto" />
            <div className="text-center">
              <h3 className="font-bold text-xl mt-2">2021</h3>
              <h4 className="font-bold text-base my-1">Best NGO Award</h4>
              <p className="text-xs font-bold opacity-60">BERLIN, GERMANY</p>
            </div>
          </div>
          <div className="">
            <img src={AwardBadge1} alt="" className="block mx-auto" />
            <div className="text-center">
              <h3 className="font-bold text-xl mt-2">2018</h3>
              <h4 className="font-bold text-base my-1">Global Award</h4>
              <p className="text-xs font-bold opacity-60">NEWYORK, USA</p>
            </div>
          </div>
          <div className="">
            <img src={AwardBadge2} alt="" className="block mx-auto" />{" "}
            <div className="text-center">
              <h3 className="font-bold text-xl mt-2">2014</h3>
              <h4 className="font-bold text-base my-1">Foresto Award</h4>
              <p className="text-xs font-bold opacity-60">NEW DELHI, INDIA</p>
            </div>
          </div>
          <div className="">
            <img src={AwardBadge3} alt="" className="block mx-auto" />{" "}
            <div className="text-center">
              <h3 className="font-bold text-xl mt-2">2010</h3>
              <h4 className="font-bold text-base my-1">Earth Server Award</h4>
              <p className="text-xs font-bold opacity-60">VIENNA, AUSTRIA</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[100%] lg:w-[90%] mx-auto my-[3rem] mt-24 bg-black py-8 rounded-lg">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:space-x-8 space-y-8 lg:space-y-0 lg:items-center">
            <div className="lg:w-[60%] text-white px-8 md:px-16">
              <h3 className="font-bold text-lg md:text-xl mb-4">OUR JOURNEY</h3>
              <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem]">
                How we raised 34m
              </h1>
              <p className="text-base opacity-60 md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh.
              </p>
            </div>
            <div className="">
              <img src={RaisedImg} alt="" className="w-[100%]" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Award;
