// Swiper Configuration for Product Cards
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Swiper for Product Cards
  if (typeof Swiper !== "undefined") {
    const productSwiper = new Swiper(".product-swiper", {
      // Swiper configuration
      slidesPerView: "auto",
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
          centeredSlides: false,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          centeredSlides: false,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
          centeredSlides: false,
        },
        1200: {
          slidesPerView: 4,
          spaceBetween: 30,
          centeredSlides: false,
        },
      },
      // Custom effects
      effect: "slide",
      speed: 600,
      // Accessibility
      a11y: {
        enabled: true,
        prevSlideMessage: "Previous slide",
        nextSlideMessage: "Next slide",
        firstSlideMessage: "This is the first slide",
        lastSlideMessage: "This is the last slide",
      },
      // Keyboard control
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      // Mouse wheel control
      mousewheel: {
        invert: false,
      },
      // Touch events
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
    });

    // Add hover pause functionality
    const swiperContainer = document.querySelector(".product-swiper");
    if (swiperContainer) {
      swiperContainer.addEventListener("mouseenter", () => {
        productSwiper.autoplay.stop();
      });

      swiperContainer.addEventListener("mouseleave", () => {
        productSwiper.autoplay.start();
      });
    }

    // Add click animations for buttons
    const actionBtns = document.querySelectorAll(".action-btn");
    const likeBtns = document.querySelectorAll(".like-btn");

    actionBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        // Simple click animation without GSAP
        btn.style.transform = "scale(0.9)";
        setTimeout(() => {
          btn.style.transform = "scale(1)";
        }, 100);
      });
    });

    likeBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        const icon = btn.querySelector("i");

        // Simple click animation
        btn.style.transform = "scale(1.2)";
        setTimeout(() => {
          btn.style.transform = "scale(1)";
        }, 200);

        // Toggle heart icon
        if (icon.classList.contains("fa-regular")) {
          icon.classList.remove("fa-regular");
          icon.classList.add("fa-solid");
          btn.style.backgroundColor = "#f44336";
          btn.style.color = "white";
        } else {
          icon.classList.remove("fa-solid");
          icon.classList.add("fa-regular");
          btn.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
          btn.style.color = "inherit";
        }
      });
    });
  }
});
