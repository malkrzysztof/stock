particlesJS("particles-js", {
  particles: {
    number: {
      value: 232,
      density: { enable: true, value_area: 473.51100518494565 }
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 1, color: "#0021bb" },
      polygon: { nb_sides: 3 },
      image: { src: "img/github.svg", width: 100, height: 100 }
    },
    opacity: {
      value: 0.03156740034566304,
      random: true,
      anim: {
        enable: true,
        speed: 0.23976023976023975,
        opacity_min: 0.03196803196803197,
        sync: false
      }
    },
    size: {
      value: 0.6,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
    },
    line_linked: {
      enable: true,
      distance: 47.35110051849457,
      color: "#ffffff",
      opacity: 0.11048590120982064,
      width: 1.2626960138265217
    },
    move: {
      enable: true,
      speed: 3.204794372381079,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 }
    }
  },
  retina_detect: false
});
