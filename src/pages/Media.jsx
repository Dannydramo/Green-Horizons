import React, { Fragment } from "react";
import MediaImg from "../images/MediaImg.svg";
import MediaImg1 from "../images/MediaImg1.svg";
import MediaImg2 from "../images/MediaImg2.svg";
import News from "../components/News";
const Media = () => {
  return (
    <Fragment>
      {" "}
      <section>
        <div className="bg-[#EFF7F2]">
          <div className="pt-[3rem] xl:pt-[4rem] pb-[3rem]">
            <div className="w-[95%] lg:w-[90%] mx-auto mt-16">
              <div className="flex space-x-2  items-center">
                <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                <h4 className="font-bold text-xl">TOP NEWS</h4>
              </div>
              <div className="flex flex-col lg:flex-row justify-between lg:space-x-24 space-y-8 lg:space-y-0">
                <div className="md:w-[60%] lg:w-[50%] ml-4 xl:ml-8">
                  <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem]">
                    Our goal is to make water available for everyone
                  </h1>
                  <p className="text-base md:text-lg my-4">
                    Aenean faucibus nibh et justo cursus id rutrum lorem
                    imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </p>
                  <button className="w-[150px] px-4 py-2 bg-[#70C174] rounded-md text-white">
                    Read More
                  </button>
                </div>
                <div className="bg-white rounded-lg p-4 xl:w-1/2">
                  <div className="my-4 flex justify-between space-x-4 items-center">
                    <img src={MediaImg} alt="" />
                    <div className="">
                      <h3 className="font-bold text-xl mb-4">
                        Why saving Wildlife is extremely important
                      </h3>
                      <p className="text-black opacity-60 text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim
                      </p>
                    </div>
                  </div>
                  <div className="my-4 flex justify-between space-x-4 items-center">
                    <img src={MediaImg1} alt="" />
                    <div className="">
                      <h3 className="font-bold text-xl mb-4">
                        Don’t destroy greenery and don’t spoil scenery.
                      </h3>
                      <p className="text-black opacity-60 text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim
                      </p>
                    </div>
                  </div>
                  <div className="my-4 flex justify-between space-x-4 items-center">
                    <img src={MediaImg2} alt="" />
                    <div className="">
                      <h3 className="font-bold text-xl mb-4">
                        Caring for the present is caring for the future
                      </h3>
                      <p className="text-black opacity-60 text-base md:text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse varius enim
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <News />
    </Fragment>
  );
};

export default Media;
