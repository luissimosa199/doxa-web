import React from "react";
import PortfolioCard from "./PortfolioCard";
import { portfolioData } from "@/data/portfolioData";

const Portfolio = () => {
  return (
    <div
      id="portfolio"
      className="section relative z-0 py-12 md:py-16 bg-white"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-black">
            Nuestro trabajo
          </h2>

          <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
            Creando experiencias atractivas, innovadoras y exitosas.
          </p>
        </header>
      </div>

      <div className="flex flex-wrap flex-row">
        {portfolioData &&
          portfolioData.map((e) => {
            return (
              <PortfolioCard
                key={`portfolio_${e.id}`}
                image={e.image}
                title={e.title}
                subtitle={e.subtitle}
                url={e.url}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Portfolio;
