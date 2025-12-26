export const getParticlesOptions = (isDark) => ({
  fullScreen: { enable: false },
  background: {
    color: {
      value: "transparent",
    },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      resize: true,
    },
  },
  particles: {
    color: {
      value: isDark ? "#ffffff" : "#000000",
    },
    links: {
      enable: false,
    },
    move: {
      enable: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 80,
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
      animation: {
        enable: true,
        speed: 1,
        sync: false,
      },
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 2 },
    },
  },
  detectRetina: true,
});
