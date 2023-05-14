import React, { Fragment } from "react";
import NonProfit from "../components/About Us/NonProfit";
import Volunteer from "../components/Volunteer";
import News from "../components/News";
import Footer from "../components/Footer";
import Award from "../components/About Us/Award";
import Team from "../components/About Us/Team";

const About = () => {
  return (
    <Fragment>
      <NonProfit />
      <Award />
      <Team />
      <Volunteer />
      <News />
    </Fragment>
  );
};

export default About;
