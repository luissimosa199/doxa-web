import Image from "next/image";
import Link from "next/link";
import React from "react";

const PortfolioCard = ({
  title,
  subtitle,
  image,
  url,
}: {
  title: string;
  subtitle: string;
  image: string;
  url: string;
}) => {
  return (
    <figure
      className="flex-shrink max-w-full px-3 w-full sm:w-1/2 lg:w-1/5 group wow fadeInUp"
      data-wow-duration="1s"
    >
      <div className="relative overflow-hidden cursor-pointer mb-6">
        <Link href={url}>
          <Image
            className="block w-full h-auto transform duration-500 hover:scale-125"
            src={image}
            width={640}
            height={426}
            alt="Image Description"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-100 sm:opacity-0 sm:group-hover:opacity-100 overflow-hidden px-1 py-1 text-gray-100 bg-gradient-to-b from-transparent to-black sm:bg-black text-center flex flex-col justify-around">
            <h3 className="text-base leading-normal font-semibold text-white">
              {title}
            </h3>
            <small className="d-block">{subtitle}</small>
          </div>
        </Link>
      </div>
    </figure>
  );
};

export default PortfolioCard;
