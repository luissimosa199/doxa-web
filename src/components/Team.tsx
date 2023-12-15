import React from "react";
import TeamMember from "./TeamMember";
import { teamData } from "@/data/teamData";

const Team = () => {
  return (
    <div
      id="team"
      className="section relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
            <span className="font-light">Nuestro</span> equipo
          </h2>
        </header>

        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {teamData &&
            teamData.map((e) => {
              return (
                <TeamMember
                  key={e.id}
                  name={e.name}
                  image={e.image}
                  position={e.position}
                  links={e.links}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Team;
