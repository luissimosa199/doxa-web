import Image from "next/image";
import React from "react";
import LightBulbSvg from "./svg/LightBulbSvg";
import MessageSvg from "./svg/MessageSvg";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="hero"
      className="section relative z-0 py-16 md:pt-32 md:pb-20 bg-gray-50"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          <div className="flex-shrink max-w-full px-4 sm:px-12 lg:px-18 w-full sm:w-9/12 lg:w-1/2 self-center">
            <Image
              width={480}
              height={362}
              src="images/hero.svg"
              alt="LOGO"
            />
          </div>
          <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
            <div className="text-center lg:text-left mt-6 lg:mt-0">
              <div className="mb-12">
                <h1 className="text-4xl leading-normal text-black font-bold mb-4">
                  Soluciones Digitales
                  <br />
                  Personalizadas
                </h1>
                <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                  Transformamos empresas con desarrollo de software innovador y
                  personalizado.
                </p>
              </div>
              <Link
                className="py-2.5 px-10 inline-block text-center leading-normal text-gray-900 bg-white border-b border-gray-100 hover:text-black hover:ring-0 focus:outline-none focus:ring-0 mr-4"
                href="#portfolio"
              >
                <LightBulbSvg />
                Proyectos
              </Link>

              <Link
                className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border-b border-gray-800 hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                href="#contact"
              >
                <MessageSvg />
                Contactanos!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
