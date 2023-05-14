import React, { Fragment } from "react";
import Icon from "../../images/Icon.svg";
import Icon1 from "../../images/Icon (1).svg";
import Icon2 from "../../images/Icon (2).svg";
import Icon3 from "../../images/Icon (3).svg";
import DogImg from "../../images/DogImg.svg";

const Whatwedo = () => {
  return (
    <Fragment>
      <section className="bg-[#EFF7F2] py-4">
        <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
          <div className="flex flex-col md:flex-row lg:justify-between items-center md:space-x-8">
            <div className="w-full md:w-[60%] lg:w-[50%]">
              <div className="flex space-x-2 items-center">
                <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                <h4 className="font-bold text-xl">WHAT WE DO</h4>
              </div>
              <div className="ml-4 xl:ml-8">
                <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] my-4">
                  We care for earth, care for the coming birth
                </h1>
                <p className="my-4 text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="flex w-full lg:w-[80%] xl:w-[60%] items-start space-x-4 my-4">
                  <img src={Icon} alt="" className="mt-1" />
                  <div className="">
                    <h4 className="font-bold text-2xl mb-2">
                      Build Healthy Cities
                    </h4>
                    <p className="text-base md:text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
                <div className="flex w-full lg:w-[80%] xl:w-[60%] items-start space-x-4 my-4">
                  <img src={Icon1} alt="" className="mt-1" />
                  <div className="">
                    <h4 className="font-bold text-2xl mb-2">Tree Plantation</h4>
                    <p className="text-base md:text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
                <div className="flex w-full lg:w-[80%] xl:w-[60%] items-start space-x-4 my-4">
                  <img src={Icon2} alt="" className="mt-1" />
                  <div className="">
                    <h4 className="font-bold text-2xl mb-2">
                      Protect Law and Water
                    </h4>
                    <p className="text-base md:text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
                <div className="flex w-full lg:w-[80%] xl:w-[60%] items-start space-x-4 my-4">
                  <img src={Icon3} alt="" className="mt-1" />
                  <div className="">
                    <h4 className="font-bold text-2xl mb-2">Animal Safety</h4>
                    <p className="text-base md:text-lg">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <img src={DogImg} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Whatwedo;
