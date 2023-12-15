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
            className="block w-full h-auto transform duration-500 grayscale hover:scale-125"
            src={image}
            width={256}
            height={171}
            alt="Image Description"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 transition-opacity duration-500 ease-in opacity-0 group-hover:opacity-100 overflow-hidden px-4 py-2 text-gray-100 bg-black text-center">
            <h3 className="text-base leading-normal font-semibold my-1 text-white">
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
