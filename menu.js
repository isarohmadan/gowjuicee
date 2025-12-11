document.addEventListener("DOMContentLoaded", () => {
  // Tambahkan delay untuk memastikan DOM dan GSAP siap
  setTimeout(() => {
    ScrollTrigger.create({
      id: "menu-trigger", // ID unik untuk ScrollTrigger ini
      trigger: ".description-menu",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.fromTo(
          ".description-menu",
          { marginLeft: -200, opacity: 0 },
          { marginLeft: 0, opacity: 1, duration: 1 }
        );

        gsap.fromTo(
          ".menu-picture",
          { marginRight: -200, opacity: 0 },
          { marginRight: 0, opacity: 1, duration: 1.5 }
        );
      },
      onLeaveBack: () => {
        gsap.fromTo(
          ".description-menu",
          { marginLeft: 0, opacity: 1 },
          { marginLeft: -200, opacity: 0, duration: 1 }
        );
        gsap.fromTo(
          ".menu-picture",
          { marginRight: 0, opacity: 1 },
          { marginRight: -200, opacity: 0, duration: 1.5 }
        );
      },
    });

    // Force refresh semua ScrollTriggers
    ScrollTrigger.refresh();
  }, 100); // Delay 100ms untuk memastikan semua elemen telah dimuat
});
