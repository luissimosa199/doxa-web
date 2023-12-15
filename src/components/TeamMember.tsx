import Image from "next/image";
import React from "react";
import TeamMemberLink from "./TeamMemberLink";

const TeamMember = ({
  name,
  image,
  position,
  links,
}: {
  name: string;
  image: string;
  position: string;
  links: { type: string; url: string }[];
}) => {
  return (
    <div className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
      <div
        className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0 wow fadeInUp"
        data-wow-duration="1s"
      >
        <div className="relative overflow-hidden px-6">
          <Image
            width={143}
            height={143}
            src={image}
            className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale hover:grayscale-0 transition-all"
            alt={`${name}'s avatar`}
          />
        </div>
        <div className="pt-6 text-center">
          <p className="text-lg leading-normal font-bold mb-1">{name}</p>
          <p className="text-gray-500 leading-relaxed font-light">{position}</p>
          <div className="mt-2 mb-5 space-x-2">
            {links &&
              links.map((e, idx) => {
                return (
                  <TeamMemberLink
                    key={`${name}_link_${idx}`}
                    type={e.type}
                    url={e.url}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamMember;
