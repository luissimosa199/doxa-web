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

        <div className="flex flex-wrap flex-row my-4 -mx-4 justify-center">
          <p className="text-3xl font-semibold text-center mx-8">
            Somos un equipo de programadores, diseñadores y desarrolladores de
            software especializado conmmás de 30 años de experiencia
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
