import React, { Fragment } from "react";
import Icon from "../../images/Icon.svg";
import Icon1 from "../../images/Icon (1).svg";
import Icon2 from "../../images/Icon (2).svg";
import Icon3 from "../../images/Icon (3).svg";
import Icon5 from "../../images/Icon (5).svg";
import Icon4 from "../../images/Icon (4).svg";

const Environment = () => {
  return (
    <Fragment>
      <section className="bg-[#EFF7F2] py-4">
        <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
          <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] my-4">
            What we do for environment
          </h1>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex w-full items-start space-x-4 my-4">
              <img src={Icon} alt="" className="mt-1" />
              <div className="">
                <h4 className="font-bold text-2xl mb-2">
                  Build Healthy Cities
                </h4>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="flex w-full items-start space-x-4 my-4">
              <img src={Icon1} alt="" className="mt-1" />
              <div className="">
                <h4 className="font-bold text-2xl mb-2">Tree Plantation</h4>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="flex w-full items-start space-x-4 my-4">
              <img src={Icon2} alt="" className="mt-1" />
              <div className="">
                <h4 className="font-bold text-2xl mb-2">
                  Protect Law and Water
                </h4>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="flex w-full items-start space-x-4 my-4">
              <img src={Icon3} alt="" className="mt-1" />
              <div className="">
                <h4 className="font-bold text-2xl mb-2">Animal Safety</h4>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="flex w-full items-start space-x-4 my-4">
              <img src={Icon4} alt="" className="mt-1" />
              <div className="">
                <h4 className="font-bold text-2xl mb-2">Blodiversity</h4>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="flex w-full items-start space-x-4 my-4">
              <img src={Icon5} alt="" className="mt-1" />
              <div className="">
                <h4 className="font-bold text-2xl mb-2">Water sustainbility</h4>
                <p className="text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Environment;
