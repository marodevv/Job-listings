const jobWrapper = {
  hidden: { opacity: 0, x: 250, skewY: 2 },
  shown: {
    opacity: 1,
    x: 0,
    skewY: 0,
    transition: {
      duration: 0.2,
      type: 'spring',
      stiffness: 125,
      delay: 0.2,
    },
  },
};

export default jobWrapper;
