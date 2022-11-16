import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram, SiGmail } from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color="#000000dc" />,
    link: "https://github.com/UgurcanSARICI",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color="#000000dc" />,
    link: "https://www.linkedin.com/in/ugurcansarici/",
  },
  // {
  //   title: "Gmail",
  //   icon: <SiGmail color="#000000dc" />,
  //   link: "",
  // },
  // {
  //   title: "Instagram",
  //   icon: <SiInstagram color="#000000dc" />,
  //   link: "",
  // },
];
