import React from "react";
import { useState, useEffect } from "react";
import team from "../services/team";
import SocMedIcons from "./Global/SocMedIcons";

const TeamMember = ({ name, role, imageUrl }) => {
  return (
    <div className="card w-64 bg-base-100 shadow-xl border-[3px] border-light-blue flex-shrink-0 mb-4 hover:shadow-md transition ease-in-out duration-300">
      <figure>
        <img
          src={imageUrl}
          alt={`Profile Picture of ${name}`}
          className="w-full"
        />
      </figure>
      <div className="card-body text-bold text-center">
        <h2 className="card-title card text-[16px]">{name}</h2>
        <p className="text-center mb-5 text-[15px]">{role}</p>
        <div className="card-actions justify-center">
          <SocMedIcons
            textColor="text-white"
            bgColor="bg-light-blue"
            iconSize="fa-lg"
          />
        </div>
      </div>
    </div>
  );
};

const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    team.getTeam().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div id="team" className="bg-white p-6">
      {/* Section Title */}
      <div className="pt-3 pb-3">
        <h1 className="md:text-[22px] xl:text-[24px] text-center text-light-blue font-bold">
          OUR TEAM
        </h1>
      </div>

      {/* Section Description */}
      <div className="pb-6">
        <h1 className="sm:text-[25px] md:text-[30px] xl:text-[40px] text-center text-black font-bold">
          Meet the Innovators
        </h1>
      </div>

      {/* Team Card */}
      <div className="flex flex-wrap justify-center gap-8 mt-12 mb-12 mx-auto">
        {data.map((member) => (
          <TeamMember
            key={member.id}
            name={member.name}
            role={member.role}
            imageUrl={member.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
