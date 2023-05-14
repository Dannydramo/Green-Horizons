import React, { Fragment } from "react";
import ArrowBtn from "../images/Arrow button.svg";
import Thumbnail from "../images/Thumbnail.svg";
import Thumbnail1 from "../images/Thumbnail (1).svg";
import Thumbnail2 from "../images/Thumbnail (2).svg";
import Thumbnail3 from "../images/Thumbnail (3).svg";

const News = () => {
  return (
    <Fragment>
      <section>
        <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
          <div className="flex my-8 items-center space-x-8">
            <h4 className="font-bold text-3xl">Read Our News</h4>
            <hr className="bg-black text-black sm:w-[55%] md:w-[60%] lg:w-[60%] xl:w-[77%]" />
          </div>
          <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 text-base md:text-lg">
            <div className="">
              <img src={Thumbnail} alt="" className="w-[100%]" />
              <h3 className="my-2 font-bold">
                Top 10 facts about wind farms you didn't know
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
            <div className="">
              <img src={Thumbnail1} alt="" className="w-[100%]" />
              <h3 className="my-2 font-bold">
                Our goal is to make water available for everyone
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
            <div className="">
              <img src={Thumbnail2} alt="" className="w-[100%]" />
              <h3 className="my-2 font-bold">
                Is climate change happening faster than expected?
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
            <div className="">
              <img src={Thumbnail3} alt="" className="w-[100%]" />
              <h3 className="my-2 font-bold">
                Don’t destroy greenery and don’t spoil scenery
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ======== EVENTS ========== */}
      <section>
        <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
          <div className="flex my-8 items-center space-x-8">
            <h4 className="font-bold text-3xl">Our Events</h4>
            <hr className="bg-black text-black sm:w-[55%] md:w-[60%] lg:w-[60%] xl:w-[77%]" />
          </div>
          <div className="flex flex-col justify-between sm:flex-row sm:space-x-4 space-x-0 space-y-4 sm:space-y-0 ">
            <div className="bg-[#BEF3C0] flex p-8 space-x-8 rounded-md sm:w-[50%] justify-between">
              <p>
                <span className="text-3xl font-semibold">23</span> <br />
                <span className="font-medium"> SEP</span>
              </p>
              <div className="flex  items-center justify-between space-x-12">
                <div className="">
                  <div className="mb-2 flex space-x-2 items-center">
                    <h5>NEXT EVENT</h5>
                    <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                  </div>
                  <p className="text-base lg:text-xl font-bold">
                    Say no to plastic usage and save the planet
                  </p>
                </div>
                <img src={ArrowBtn} alt="" />
              </div>
            </div>
            <div className="bg-[#BEF3C0] flex p-8 space-x-8 rounded-md sm:w-[50%] justify-between">
              <p>
                <span className="text-3xl font-semibold">23</span> <br />
                <span className="font-medium"> SEP</span>
              </p>
              <div className="flex  items-center justify-between space-x-12">
                <div className="">
                  <div className="mb-2 flex space-x-2 items-center">
                    <h5>NEXT EVENT</h5>
                    <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                  </div>
                  <p className="text-base lg:text-xl font-bold">
                    Say no to plastic usage and save the planet
                  </p>
                </div>
                <img src={ArrowBtn} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default News;
