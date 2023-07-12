// Navbar Variants Start
export const headerVariants = {
  hidden: {
    opacity: 0,
    y: "-10vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};
export const navVariants = {
  hidden: {
    opacity: 0,
    y: "-10vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
      delayChildren: 0,
      staggerChildren: 0.2,
    },
  },
};
export const liVariants = {
  hidden: {
    y: "-10vh",
  },
  show: {
    y: 0,
    transition: {
      type: "tween",
    },
  },
};
export const logoVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.2,
    },
  },
  hover: {
    scale: 1.2,
  },
};
export const themeVariants = {
  hidden: {
    opacity: 0,
    y: "-10vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      delay: 0.4,
    },
  },
};
export const btnVariants = {
  hidden: {
    opacity: 0,
    y: "-10vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      type: "tween",
      delay: 0.7,
    },
  },
};
// Navbar Variants End

// Hero Variants Start
export const asideVariants = {
  hidden: {
    opacity: 0,
    y: "150vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.2,
      duration: 1,
      type: "spring",
      bounce: 0.3,
    },
  },
};
export const heroVariants = {
  hidden: {
    opacity: 0,
  },
};
export const leftheroVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      type: "tween",
      durationChildren: 0.4,
      staggerChildren: 0.4,
    },
  },
};
export const leftHeroChildVariants = {
  show: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: "1rem",
  },
};
export const rightHeroVariants = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      durationChildren: 0.0,
      staggerChildren: 0.5,
    },
  },
};
export const rightHeroCircleVariant = {
  show: {
    opacity: 1,
    y: 0,
  },
  hidden: {
    opacity: 0,
    y: "10vh",
  },
};
export const rightImgVariant = {
  show: {
    opacity: 1,
    x: "-30%",
    y: "40%",
  },
  hidden: {
    opacity: 0,
    y: "40%",
    transition: {
      type: "tween",
    },
  },
};
export const scrollVariant = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  show: {
    opacity: 1,
    y: 20,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      type: "tween",
      duration: 0.4,
    },
  },
};
export const scrollDotVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      durationChildren: 0.0,
      staggerChildren: 0.3,
    },
  },
};
export const scrollChildVariants = {
  hidden: {
    opacity: 0,
    y: "-3vh",
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "tween",
    },
  },
};
// Hero Variants End

// Skill Variants Start

export const skillVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
};

export const aboutVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
};
export const portfolioVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
};
export const contactVariants = {
  hidden: {
    opacity: 0,
    y: "5vh",
  },
};

// Skill Variants End
