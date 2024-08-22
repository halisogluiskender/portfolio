import Link from "next/link";

import { FaGithub, FaLinkedin, FaMailBulk, FaTwitter } from "react-icons/fa";
const socials = [
  { icon: <FaGithub />, path: "https://github.com/halisogluiskender" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/iskenderhalisoglu/",
  },
  { icon: <FaTwitter />, path: "https://twitter.com/ihalisglu" },
  { icon: <FaMailBulk />, path: "mailto:halisogluiskender@gmail.com" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => (
        <Link
          key={index}
          href={social.path}
          target="_blank"
          className={iconStyles}
        >
          {social.icon}
        </Link>
      ))}
    </div>
  );
};
export default Socials;
