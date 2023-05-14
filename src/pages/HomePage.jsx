import React, { Fragment } from "react";
import Hero from "../components/HomePage/Hero";
import Supporters from "../components/Supporters";
import Whatwedo from "../components/HomePage/Whatwedo";
import ProjectsDone from "../components/HomePage/ProjectsDone";
import Volunteer from "../components/Volunteer";
import News from "../components/News";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Supporters />
      <Whatwedo />
      <ProjectsDone />
      <Volunteer />
      <News />
    </Fragment>
  );
};

export default HomePage;
