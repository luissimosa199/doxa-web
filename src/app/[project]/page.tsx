import { portfolioData } from "@/data/portfolioData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = ({ params }: { params: { project: string } }) => {
  const data = portfolioData.find((e) => e.slug === params.project);

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
              src={data?.image as string}
              alt="main image"
            />
          </div>
          <div className="flex-shrink max-w-full px-4 w-full md:w-9/12 lg:w-1/2 self-center lg:pr-12">
            <div className="text-center lg:text-left mt-6 lg:mt-0">
              <div className="mb-12">
                <h1 className="text-4xl leading-normal text-black font-bold mb-4">
                  {data?.title}
                </h1>
                <p className="text-gray-500 leading-relaxed font-light text-xl mx-auto pb-2">
                  {data?.subtitle}
                </p>
              </div>
              <Link
                className="py-2.5 px-10 inline-block text-center leading-normal text-gray-100 bg-black border-b border-gray-800 hover:text-white hover:ring-0 focus:outline-none focus:ring-0"
                href={data?.url as string}
                rel="noopener noreferrer"
                target="_blank"
              >
                Ir a la web
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full min-h-screen">
        {data?.photos.map((e, idx) => {
          return (
            <div
              key={`${data.id}_${idx}`}
              className="w-full h-auto mt-12"
            >
              <Image
                src={e}
                alt=""
                className="mx-auto"
                width={800}
                height={800}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Page;
