import Image from "next/image";
import React from "react";

const ClientLogo = ({
  url,
  image,
  alt,
}: {
  url: string;
  image: string;
  alt: string;
}) => {
  return (
    <div className="min-w-max ">
      <div className="w-full px-4 text-center pb-3">
        <Image
          width={135}
          height={67}
          className="grayscale mx-auto opacity-80 hover:opacity-100 max-w-full h-auto"
          src={image}
          alt={alt}
        />
      </div>
    </div>
  );
};

export default ClientLogo;
