import { BsFillSunFill } from "react-icons/bs";
import { BsMoonFill } from "react-icons/bs";
import { PiDribbbleLogoFill } from "react-icons/pi";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoHtml5 } from "react-icons/bi";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoBootstrap } from "react-icons/bi";
import { BiLogoFigma } from "react-icons/bi";
import teslaWebsite from "./Images/tesla-project.webp";
import nikeWebsite from "./Images/nike-project.webp";
import brainwareWebsite from "./Images/brainware-project.webp";
import zentryWebsite from "./Images/zentry-project.PNG";

export const pageLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/About",
  },
  {
    name: "Portfolio",
    url: "/Portfolio",
  },
  {
    name: "Contact",
    url: "/Contact",
  },
];

export const skills = [
  {
    name: "HTML",
    icon: <BiLogoHtml5 />,
    color: "orange",
  },
  {
    name: "CSS",
    icon: <BiLogoCss3 />,
  },
  {
    name: "Javascript",
    icon: <BiLogoJavascript />,
  },
  {
    name: "Sass",
    icon: <FaSass />,
  },
  {
    name: "React JS",
    icon: <BiLogoReact />,
  },
  {
    name: "Tailwind CSS",
    icon: <BiLogoTailwindCss />,
  },
  {
    name: "Bootstrap",
    icon: <BiLogoBootstrap />,
  },
  {
    name: "Figma",
    icon: <BiLogoFigma />,
  },
];

export const darkMode = [<BsFillSunFill />, <BsMoonFill />];
export const socialLinks = [
  {
    name: "Dribbble",
    icon: <PiDribbbleLogoFill />,
    url: "https://dribbble.com/syedtaqiabbas",
  },
  {
    name: "Github",
    icon: <BsGithub />,
    url: "https://github.com/taqiabbas7906",
  },
  {
    name: "Facebook",
    icon: <BsFacebook />,
    url: "https://www.facebook.com/taqi.abbas.7906/",
  },
  {
    name: "LinkedIn",
    icon: <BiLogoLinkedin />,
    url: "https://www.linkedin.com/in/syedtaqiabbas/",
  },
];

export const projects = [
  {
    id: 0,
    name: "Zentry Website Project",
    tech: "React JS, Tailwind CSS, GSAP",
    img: zentryWebsite,
    github: "https://github.com/taqiabbas7906/Zentry.git",
    link: "https://zentry-drab.vercel.app/",
  },
  {
    id: 1,
    name: "Brainware Website Project",
    tech: "React JS, Tailwind CSS",
    img: brainwareWebsite,
    github: "https://github.com/taqiabbas7906/Brainware.git",
    link: "https://brainware-nine.vercel.app/",
  },
  {
    id: 2,
    name: "Tesla Website Project",
    tech: "HTML, Tailwind CSS, JS",
    img: teslaWebsite,
    github: "https://github.com/taqiabbas7906/Brainware.git",
    link: "https://tesla-landing-page-project.vercel.app/",
  },
  {
    id: 3,
    name: "Nike Website Project",
    tech: "HTML, Sass, JS",
    img: nikeWebsite,
    github: "https://github.com/taqiabbas7906/nike-landing-page-website",
    link: "https://taqiabbas7906.github.io/nike-landing-page-website/index.html",
  },
];

export const button = [
  {
    id: 1,
    name: "Resume",
    link: "https://drive.google.com/file/d/1LSbZsKg8zZJ8A0Ak_gKUUkF34Ah2-jC2/view?usp=sharing",
    size: "small",
    color: "text-primary-600",
    type: "hollow",
  },
  {
    id: 2,
    name: "Contact!",
    size: "big",
    link: "/Contact",
    color: "text-primary-800",
    type: "fill",
  },
  {
    id: 3,
    name: "Resume",
    size: "big",
    link: "https://drive.google.com/file/d/1LSbZsKg8zZJ8A0Ak_gKUUkF34Ah2-jC2/view?usp=sharing",
    color: "text-primary-800",
    type: "fill",
  },
  {
    id: 4,
    name: "See More",
    size: "big",
    link: "/Portfolio",
    color: "text-primary-800",
    type: "fill",
  },
  {
    id: 5,
    name: "Send Message",
    size: "big",
    link: "",
    color: "text-primary-800",
    type: "hollow",
  },
];
export const scrollDotsLinks = [
  {
    id: 1,
    src: "#hero",
  },
  {
    id: 2,
    src: "#skillSet",
  },
  {
    id: 3,
    src: "#about",
  },
  {
    id: 4,
    src: "#portfolio",
  },
  {
    id: 5,
    src: "#contact",
  },
];
