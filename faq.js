// FAQ Accordion Functionality
document.addEventListener("DOMContentLoaded", function () {
  // Initialize FAQ functionality
  initializeFAQ();
});

function initializeFAQ() {
  // Add smooth scrolling behavior
  document.documentElement.style.scrollBehavior = "smooth";

  // Add keyboard navigation support
  addKeyboardNavigation();

  // Add analytics tracking (optional)
  addAnalyticsTracking();
}

function toggleFAQ(element) {
  const faqItem = element.closest(".faq-item");
  const faqAnswer = faqItem.querySelector(".faq-answer");
  const faqIcon = element.querySelector(".faq-icon");
  const isActive = faqItem.classList.contains("active");

  // Close all other FAQ items
  closeAllFAQs();

  if (!isActive) {
    // Open current FAQ
    faqItem.classList.add("active");
    faqAnswer.classList.add("active");
    element.classList.add("active");

    // Change icon from plus to X
    faqIcon.classList.remove("fa-plus");
    faqIcon.classList.add("fa-times");

    // Add smooth animation
    setTimeout(() => {
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }, 10);

    // Track FAQ interaction (optional)
    trackFAQInteraction(faqItem);
  }
}

function closeAllFAQs() {
  const allFAQItems = document.querySelectorAll(".faq-item");

  allFAQItems.forEach((item) => {
    const faqAnswer = item.querySelector(".faq-answer");
    const faqQuestion = item.querySelector(".faq-question");
    const faqIcon = item.querySelector(".faq-icon");

    item.classList.remove("active");
    faqAnswer.classList.remove("active");
    faqQuestion.classList.remove("active");
    faqAnswer.style.maxHeight = "0px";

    // Reset icon to plus
    faqIcon.classList.remove("fa-times");
    faqIcon.classList.add("fa-plus");
  });
}

function addKeyboardNavigation() {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.setAttribute("tabindex", "0");
    question.setAttribute("role", "button");
    question.setAttribute("aria-expanded", "false");

    question.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleFAQ(this);
      }
    });
  });
}

function trackFAQInteraction(faqItem) {
  const questionText = faqItem.querySelector(".faq-question span").textContent;

  // Optional: Send analytics data
  if (typeof gtag !== "undefined") {
    gtag("event", "faq_interaction", {
      event_category: "FAQ",
      event_label: questionText,
      value: 1,
    });
  }

  // Optional: Console log for debugging
  console.log("FAQ opened:", questionText);
}

function addAnalyticsTracking() {
  // Track page view
  if (typeof gtag !== "undefined") {
    gtag("event", "page_view", {
      page_title: "FAQ Page",
      page_location: window.location.href,
    });
  }
}

// Smooth scroll to FAQ section when coming from other pages
function scrollToFAQ() {
  const faqSection = document.querySelector(".faq-section");
  if (faqSection) {
    faqSection.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
}

// Handle URL hash navigation
window.addEventListener("hashchange", function () {
  if (window.location.hash === "#faq") {
    scrollToFAQ();
  }
});

// Initialize on page load if hash is present
if (window.location.hash === "#faq") {
  setTimeout(scrollToFAQ, 100);
}

// Add loading state management
function showLoadingState() {
  const faqAccordion = document.querySelector(".faq-accordion");
  if (faqAccordion) {
    faqAccordion.classList.add("faq-loading");
  }
}

function hideLoadingState() {
  const faqAccordion = document.querySelector(".faq-accordion");
  if (faqAccordion) {
    faqAccordion.classList.remove("faq-loading");
  }
}

// Add search functionality (optional)
function addSearchFunctionality() {
  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.placeholder = "Search FAQs...";
  searchInput.className = "faq-search";

  const faqContent = document.querySelector(".faq-content-section");
  if (faqContent) {
    faqContent.insertBefore(searchInput, faqContent.firstChild);

    searchInput.addEventListener("input", function (e) {
      const searchTerm = e.target.value.toLowerCase();
      const faqItems = document.querySelectorAll(".faq-item");

      faqItems.forEach((item) => {
        const questionText = item
          .querySelector(".faq-question span")
          .textContent.toLowerCase();
        const answerText = item
          .querySelector(".faq-answer p")
          .textContent.toLowerCase();

        if (
          questionText.includes(searchTerm) ||
          answerText.includes(searchTerm)
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  }
}

// Initialize search if needed
// addSearchFunctionality();

// Add print-friendly styles
function addPrintStyles() {
  const printStyles = `
        @media print {
            .faq-answer {
                max-height: none !important;
                display: block !important;
            }
            .faq-question {
                border-bottom: 1px solid #000 !important;
            }
        }
    `;

  const styleSheet = document.createElement("style");
  styleSheet.textContent = printStyles;
  document.head.appendChild(styleSheet);
}

// Initialize print styles
addPrintStyles();

// Export functions for external use
window.FAQ = {
  toggleFAQ,
  closeAllFAQs,
  scrollToFAQ,
  showLoadingState,
  hideLoadingState,
};
