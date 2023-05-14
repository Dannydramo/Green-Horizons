import React, { Fragment } from "react";
import WorkingImg from "../../images/WorkingImg.svg";
const Working = () => {
  return (
    <Fragment>
      <section>
        <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem] mt-[4rem] md:mt-[5rem] lg:mt-[7rem] min-h-[70vh] flex items-center">
          <div className="flex flex-col md:flex-row lg:justify-between md:space-x-8">
            <div className="w-full md:w-[60%] lg:w-[55%]">
              <div className="flex space-x-2 items-center">
                <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                <h4 className="font-bold text-xl">WHAT WE DO</h4>
              </div>
              <div className="ml-4 xl:ml-12 lg:w-[80%]">
                <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] my-4">
                  We are working worldwide
                </h1>
                <p className="my-4 text-base md:text-lg">
                  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
                  et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                  risus tristique posuere.
                </p>
              </div>
            </div>
            <div className="">
              <img src={WorkingImg} alt="" className="w-full" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Working;
