import React, { Fragment } from "react";
import MapImg from "../images/Map.svg";

const Conatct = () => {
  return (
    <Fragment>
      <section>
        <div className="bg-[#EFF7F2]">
          <div className="pt-[3rem] xl:pt-[5rem] pb-[3rem]">
            <div className="w-[95%] lg:w-[90%] mx-auto mt-16">
              <div className="flex space-x-2 items-center">
                <hr className="w-[20%] lg:w-[10%] bg-black h-[2px]" />
                <h4 className="font-bold text-xl">CONTACT US</h4>
              </div>
              <div className="flex flex-col md:flex-row md:space-x-24 space-y-8 md:space-y-0">
                <div className="md:w-[60%] lg:w-[40%] ml-4 xl:ml-8">
                  <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem]">
                    We'd love to hear from you
                  </h1>
                  <p className="text-base md:text-lg my-4">
                    Have any question in mind or want to enquire? Please feel
                    free to contact us through the form or the following
                    details.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="mb-8">
                    <h3 className="font-bold text-xl">Let's talk!</h3>
                    <p className="my-2">
                      +1 23 456 789{" "}
                      <span className="ml-6">hello@finsweet.com</span>
                    </p>
                  </div>
                  <div className="mb-8">
                    <h4 className="font-bold text-lg">Head Office</h4>
                    <p className="my-2">
                      8 Brewery Drive, Hudson, NH 03051 USA
                    </p>
                  </div>
                  <div className="">
                    <h4 className="font-bold text-lg">Branch Office</h4>
                    <p className="my-2">178 Marconi St., Venice, 34293 Italy</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-[95%] sm:w-[85%] md:w-[80%] lg:w-[50%] my-16 mx-auto">
          <form action="">
            <div className="flex flex-col sm:flex-row justify-between space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="sm:w-1/2">
                <label htmlFor="firstname" className="">
                  First Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[100%] border-b outline-none"
                />
              </div>
              <div className="sm:w-1/2">
                <label htmlFor="firstname" className="">
                  Last Name
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[100%] border-b outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row justify-between my-4 space-y-8 sm:space-y-0 sm:space-x-8">
              <div className="sm:w-1/2">
                <label htmlFor="firstname" className="">
                  Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  className="w-[100%] border-b outline-none"
                />
              </div>
              <div className="sm:w-1/2">
                <label htmlFor="firstname" className="">
                  Subject
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  className="w-[100%] border-b outline-none"
                />
              </div>
            </div>
            <div className="my-4">
              <label htmlFor="message">Message</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Enter your message"
                className="w-full border outline-none rounded-md p-4"
              ></textarea>
            </div>
            <button className="w-[150px] mx-auto flex justify-center px-4 py-2 bg-[#70C174] rounded-md text-white">
              Send Message
            </button>
          </form>
        </div>
      </section>
      <img src={MapImg} alt="Map" className="w-full" />
    </Fragment>
  );
};

export default Conatct;
