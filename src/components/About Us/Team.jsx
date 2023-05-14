import { Fragment } from "react";
import TeamMember from "../../images/Team member.svg";
import TeamMember1 from "../../images/Team member (1).svg";
import TeamMember2 from "../../images/Team member (2).svg";
import TeamMember3 from "../../images/Team member (3).svg";
import TeamMember4 from "../../images/Team member (4).svg";
import TeamMember5 from "../../images/Team member (5).svg";
import TeamMember6 from "../../images/Team member (6).svg";
import TeamMember7 from "../../images/Team member (7).svg";

const Team = () => {
  return (
    <Fragment>
      <section className="my-8">
        <h1 className="text-4xl sm:text-5xl font-bold lg:leading-[4rem] text-center my-4">
          Meet Our Team
        </h1>
        <div className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-[3rem] grid grid-cols-2 gap-8 items-center md:grid-cols-3 lg:grid-cols-4">
          <img src={TeamMember} alt="" />
          <img src={TeamMember1} alt="" />
          <img src={TeamMember2} alt="" />
          <img src={TeamMember3} alt="" />
          <img src={TeamMember4} alt="" />
          <img src={TeamMember5} alt="" />
          <img src={TeamMember6} alt="" />
          <img src={TeamMember7} alt="" />
        </div>
      </section>
    </Fragment>
  );
};

export default Team;
