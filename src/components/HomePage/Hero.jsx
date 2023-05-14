import React, { Fragment } from "react";
import PlayIconImage from "../../images/PlayIconImage.svg";
import BgPlay from "../../images/BgPlay.svg";

const Hero = () => {
  return (
    <Fragment>
      <section className="bg-[url(./images/HeroBg.svg)] bg-cover bg-no-repeat h-[60vh] md:h-[90vh] bg-center mt-[4.5rem] relative">
        <div className="w-[95%] lg:w-[90%] mx-auto">
          <div className="pt-[7rem]">
            <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl md:w-[80%] lg:w-[70%] xl:w-[50%] font-bold lg:leading-[4rem]">
              Save the environment today for a better tomorrow
            </h1>
            <div className="flex space-x-4 my-8 items-center">
              <button className="bg-white px-4 py-2 rounded-sm text-base md:text-lg">
                What we do
              </button>
              <div className="flex items-center space-x-2 text-white">
                <img src={PlayIconImage} alt="Video Player" />
                <p className="text-base md:text-lg">Play Video</p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden sm:block absolute bottom-8 w-full">
          <div className="w-[95%] lg:w-[90%] mx-auto flex justify-between items-center space-x-4 text-white text-base md:text-lg">
            <p>23,800 trees planted</p>
            <hr className="text-white bg-white sm:w-[40%] md:w-[50%] lg:w-[60%] xl:w-[70%]" />
            <p>5840 donations collected</p>
          </div>
        </div>
      </section>

      {/* ========= KNOW ABOUT US ============ */}

      <section>
        <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
          <div className="flex flex-col md:flex-row lg:justify-between items-center md:space-x-8">
            <div className="w-full md:w-[60%] lg:w-[55%]">
              <div className="flex space-x-2 items-center">
                <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                <h4 className="font-bold text-xl">KNOW ABOUT US</h4>
              </div>
              <div className="ml-4 xl:ml-8">
                <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] my-4">
                  We help nature smile and survive everywhere
                </h1>
                <p className="my-4 text-base md:text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <p className="my-4 text-base md:text-lg">
                  ‍Duis cursus, mi quis viverra ornare, eros dolor interdum
                  nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh
                  et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                  risus tristique posuere.
                </p>
                <button className="bg-green-400 text-white px-4 py-2 rounded-md mb-8 text-base md:text-lg">
                  Learn More
                </button>
              </div>
            </div>
            <div className="">
              <img src={BgPlay} alt="" />
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;
