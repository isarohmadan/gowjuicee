// ScrollTrigger untuk #motto agar modalnya vertically centered saat #motto masuk viewport

// Pastikan GSAP dan ScrollTrigger sudah di-load di project Anda
// Contoh penggunaan di file JS vanilla

document.addEventListener("DOMContentLoaded", () => {
  const mottoCards = document.querySelectorAll(".motto-card");
  const descriptionGJ = [
    "Vitamin alami di setiap tegukan untuk bantu tubuh tetap fit dan bugar",
    "Ganti minuman manis dengan energi alami.",
    "Gaya hidup aktif!",
  ];

  const description = gsap.registerPlugin(ScrollTrigger);
  if (typeof gsap !== "undefined" && typeof ScrollTrigger !== "undefined") {
    ScrollTrigger.create({
      trigger: "#motto",
      start: "top top", // saat bagian atas #motto menyentuh tengah viewport
      end: "+=" + mottoCards.length * window.innerHeight,
      pin: true,
      // markers: true,
      onEnter: () => {
        // mottoCards.forEach((card, i) => {
        //   gsap.set(card, {opacity: 0, y: 30});
        //   gsap.to(card, {
        //     opacity: 1,
        //     y: 0,
        //     duration: 0.6,
        //     delay: 0.15 * i,
        //     ease: "power2.out",
        //   });
        // });
      },
    });
  }

  mottoCards.forEach((card, i) => {
    ScrollTrigger.create({
      trigger: ".motto-wrapper",
      start: () => `top+=${i * 633} 20%`,
      end: () => `top+=${(i + 1) * 633} top`,
      onEnter: () => {
        setActive(i);
        card.classList.add("active");
      },
      onLeave: () => card.classList.remove("active"),
      onEnterBack: () => {
        setActive(i);
        card.classList.add("active");
      },

      onLeaveBack: () => {
        card.classList.remove("active");
      },
      // markers: true,
    });
  });

  const descWrapper = document.querySelector("#motto-description-wrapper");

  function setActive(i) {
    gsap.to(mottoCards, {
      scale: 0.9,
      opacity: 0.7,
      duration: 0.3,
    }),
      gsap.to(mottoCards[i], {
        scale: 1.2,
        opacity: 1,
        duration: 0.3,
      });

    gsap.to(descWrapper, {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        descWrapper.style.maxHeight = descWrapper.scrollHeight + "px";
        descWrapper.innerHTML = `<h1 class="description-motto"> ${descriptionGJ[i]} </h1>`;
        gsap.to(descWrapper, { opacity: 1, duration: 0.4 });
      },
    });
  }
});
