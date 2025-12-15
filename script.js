const navbar = document.querySelector("#navbarNav");
navbar.addEventListener("shown.bs.collapse", () => {
  const navbarItems = document.querySelectorAll(".item-navbar-nav");

  navbarItems.forEach((item, index) => {
    item.classList.remove("opacity-0");
    gsap.fromTo(
      item,
      { opacity: 0, y: 100, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.1,
        delay: 0.1 * index,
        ease: "power4.out",
      }
    );
  });
});

navbar.addEventListener("hidden.bs.collapse", () => {
  const navbarItems = document.querySelectorAll(".item-navbar-nav");
  navbarItems.forEach((item) => {
    item.classList.add("opacity-0");
    item.style.opacity = 0;
  });
});

// Close the navbar collapse when any link inside it is clicked.
// This ensures the overlay closes on navigation or anchor clicks.
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target) return;
  // Find nearest anchor element (in case icon/text inside link was clicked)
  const link = target.closest && target.closest("#navbarNav a");
  if (link) {
    const collapseEl = document.getElementById("navbarNav");
    if (collapseEl && collapseEl.classList.contains("show")) {
      const bsCollapse =
        bootstrap.Collapse.getInstance(collapseEl) ||
        new bootstrap.Collapse(collapseEl, { toggle: false });
      bsCollapse.hide();
    }
  }
});
