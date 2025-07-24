// ================= Typing Animation ====================
new Typed(".typing", {
  strings: [
    "Full Stack Developer",
    "React and Node.js Specialist",
    "Problem Solver & Debugger",
    "Backend API Builder",
    "Frontend UI Perfectionist",
    "SDE Aspirant | BTech CSE",
    "Tech Explorer & Collaborator"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

// ================ Variables ================
const nav = document.querySelector(".nav"),
      navLinks = nav.querySelectorAll("a"),
      sections = document.querySelectorAll(".section"),
      navTogglerBtn = document.querySelector(".nav-toggler"),
      aside = document.querySelector(".aside");

// =============== Navigation Click ===============
navLinks.forEach((link, index) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove all "active" from nav
    navLinks.forEach(nav => nav.classList.remove("active"));

    // Add active to clicked nav
    this.classList.add("active");

    // Show related section
    showSection(this);

    // Set back-section for animation (optional)
    updateBackSection(index);

    // Responsive toggle
    if (window.innerWidth < 1200) {
      toggleAside();
    }
  });
});

// ============= Show Section ================
function showSection(element) {
  const targetId = element.getAttribute("href").split("#")[1];

  // Hide all sections
  sections.forEach(section => section.classList.remove("active"));

  // Show target section
  document.getElementById(targetId).classList.add("active");
}

// =========== Back Section (for animation classes) ===========
function updateBackSection(activeIndex) {
  sections.forEach((section, index) => {
    section.classList.remove("back-section");
    if (index === activeIndex) {
      section.classList.add("back-section");
    }
  });
}

// ============ Hire Me Button ============
document.querySelector(".hire-me")?.addEventListener("click", function (e) {
  e.preventDefault();

  const sectionIndex = parseInt(this.getAttribute("data-section-index")) || 0;
  const href = this.getAttribute("href");
  const targetLink = document.querySelector(`.nav a[href="${href}"]`);

  // Activate the correct nav link
  navLinks.forEach(nav => nav.classList.remove("active"));
  targetLink?.classList.add("active");

  // Show the section
  showSection(this);
  updateBackSection(sectionIndex);

  // Close sidebar if mobile
  if (window.innerWidth < 1200) {
    toggleAside();
  }
});

// ============ Aside Toggle for Mobile ============
navTogglerBtn.addEventListener("click", toggleAside);

function toggleAside() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  sections.forEach(section => section.classList.toggle("open"));
}

// ============ Smooth Scroll (Anchor links) =============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    // Prevent default scroll and use JS scroll
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
