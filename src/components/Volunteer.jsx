import React, { Fragment } from "react";

const Volunteer = () => {
  return (
    <Fragment>
      <section>
        <div className="sm:w-[95%] lg:w-[90%] mx-auto my-[3rem]">
          <div className="flex flex-col justify-center items-center bg-[url(./images/VolunteerBg.svg)] bg-no-repeat bg-cover bg-center py-12 sm:rounded-xl">
            <h1 className="text-white text-4xl sm:text-5xl md:w-[80%] lg:w-[70%] xl:w-[50%] font-bold lg:leading-[4rem] text-center">
              You can contribute to make the environment greener!
            </h1>
            <div className="mt-8 flex space-x-8">
              <button className="bg-green-400 text-white px-4 py-2 rounded-md text-base md:text-lg">
                Join As A Volunteer
              </button>
              <button className="bg-white text-black px-4 py-2 rounded-md text-base md:text-lg">
                Donate
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Volunteer;
