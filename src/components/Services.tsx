import React from "react";
import ServiceBlock from "./ServiceBlock";
import { servicesData } from "@/data/servicesData";

const Services = () => {
  return (
    <div
      id="services"
      className="section relative pt-20 pb-8 md:pt-16 md:pb-0 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Nuestros servicios
          </h2>
          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Nos destacamos en diversas áreas del desarrollo
          </p>
        </header>

        <div className="flex flex-wrap flex-row -mx-4 text-center">
          {servicesData &&
            servicesData.map((e) => {
              return (
                <ServiceBlock
                  key={e.id}
                  title={e.title}
                  subtitle={e.subtitle}
                  Icon={e.Icon}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Services;
