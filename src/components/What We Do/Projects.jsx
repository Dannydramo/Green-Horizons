import React, { Fragment } from "react";

const Projects = () => {
  return (
    <Fragment>
      <section>
        <div className="w-[95%] lg:w-[90%] mx-auto my-[3rem]">
          <div className="text-center mx-auto md:w-[70%] lg:w-1/2">
            <h4 className="font-semibold opacity-60 text-xl mb-2">
              PROJECT WE HAVE DONE
            </h4>
            <h1 className="text-3xl sm:text-4xl font-bold lg:leading-[4rem] mb-8">
              We are creating a sustainable society, for everyone.
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
            <div className="bg-[url(./images/Project1.svg)] bg-no-repeat bg-cover p-8 bg-center rounded-xl">
              <h3 className="text-white text-3xl font-bold">
                Mission 40K: Tree plantation
              </h3>
              <p className="text-white my-4 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="px-4 py-2 bg-white rounded-md my-4 text-base md:text-lg">
                See more
              </button>
            </div>
            <div className="bg-[url(./images/Project2.svg)] bg-no-repeat bg-cover p-8 bg-center rounded-xl">
              <h3 className="text-white text-3xl font-bold">
                Weekly Cleanliness in City
              </h3>
              <p className="text-white my-4 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="px-4 py-2 bg-white rounded-md my-4 text-base md:text-lg">
                See more
              </button>
            </div>
            <div className="bg-[url(./images/Project3.svg)] bg-no-repeat bg-cover p-8 bg-center rounded-xl">
              <h3 className="text-white text-3xl font-bold">
                Wildlife safety program 2021
              </h3>
              <p className="text-white my-4 text-base md:text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros.
              </p>
              <button className="px-4 py-2 bg-white rounded-md my-4 text-base md:text-lg">
                See more
              </button>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Projects;
