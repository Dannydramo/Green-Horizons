import React, { Fragment } from "react";
import Volunteer from "../components/Volunteer";
import News from "../components/News";
import Working from "../components/What We Do/Working";
import Environment from "../components/What We Do/Environment";
import Projects from "../components/What We Do/Projects";

const WhatWeDo = () => {
  return (
    <Fragment>
      <Working />
      <Environment />
      <Projects />
      <Volunteer />
      <News />
    </Fragment>
  );
};

export default WhatWeDo;
