import React from "react";

const ServiceBlock = ({
  title,
  subtitle,
  Icon,
}: {
  title: string;
  subtitle: string;
  Icon: React.ComponentType;
}) => {
  return (
    <div
      className="flex-shrink px-4 max-w-full w-full sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp "
      data-wow-duration="1s"
    >
      <div className="h-64 py-8 px-12 mb-12 bg-gray-50 border-b border-gray-100 transform transition duration-300 ease-in-out hover:-translate-y-2">
        <div className="inline-block text-gray-900 mb-4">
          <Icon />
        </div>
        <h3 className="text-lg leading-normal mb-2 font-semibold text-black">
          {title}
        </h3>
        <p className="text-gray-500">{subtitle}</p>
      </div>
    </div>
  );
};

export default ServiceBlock;
