import Link from "next/link";
import React from "react";
import TwitterSvg from "./svg/TwitterSvg";
import FacebookSvg from "./svg/FacebookSvg";
import InstagramSvg from "./svg/InstagramSvg";
import LinkedinSvg from "./svg/LinkedinSvg";

const TeamMemberLink = ({ type, url }: { type: string; url: string }) => {
  const icons: { [key: string]: React.ReactNode } = {
    twitter: <TwitterSvg />,
    facebook: <FacebookSvg />,
    instagram: <InstagramSvg />,
    linkedin: <LinkedinSvg />,
  };

  return (
    <Link
      className="hover:text-blue-700"
      aria-label="Twitter link"
      href={url}
    >
      <i className="fab fa-twitter text-twitter"></i>
      {icons[type]}
    </Link>
  );
};

export default TeamMemberLink;
