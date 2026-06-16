document.getElementById("year").textContent = new Date().getFullYear();

document.documentElement.classList.add("js-enabled");

const themeToggle = document.querySelector("[data-theme-toggle]");
const themeKey = "portfolio-theme";

const applyTheme = (theme) => {
  const isDark = theme === "dark";
  document.documentElement.setAttribute(
    "data-theme",
    isDark ? "dark" : "light",
  );

  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute(
      "aria-label",
      isDark ? "Disable dark mode" : "Enable dark mode",
    );

    const label = themeToggle.querySelector(".theme-toggle-label");
    if (label) {
      label.textContent = isDark ? "Light mode" : "Dark mode";
    }
  }
};

const savedTheme = window.localStorage.getItem(themeKey);
applyTheme(savedTheme === "dark" ? "dark" : "light");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme =
      document.documentElement.getAttribute("data-theme") === "dark"
        ? "light"
        : "dark";

    window.localStorage.setItem(themeKey, nextTheme);
    applyTheme(nextTheme);
  });
}

const revealTargets = [
  ".hero-copy",
  ".hero-panel",
  ".section-heading",
  ".skills-banner",
  ".project-feature",
  ".project-card",
  ".mini-card",
  ".skill-card",
  ".timeline-item",
  ".contact-card",
].flatMap((selector) => Array.from(document.querySelectorAll(selector)));

revealTargets.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 420)}ms`);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 },
  );

  revealTargets.forEach((element) => revealObserver.observe(element));
} else {
  revealTargets.forEach((element) => element.classList.add("is-visible"));
}

const galleries = document.querySelectorAll("[data-gallery]");

galleries.forEach((gallery) => {
  const galleryToggle = gallery.parentElement?.querySelector(
    "[data-gallery-toggle]",
  );

  if (galleryToggle) {
    galleryToggle.addEventListener("click", () => {
      const expanded = gallery.classList.toggle("gallery-expanded");
      galleryToggle.textContent = expanded ? "View less" : "View more";
      galleryToggle.setAttribute("aria-expanded", String(expanded));
    });
  }
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxCloseButton = document.querySelector(".lightbox-close");
const lightboxTriggers = document.querySelectorAll("[data-lightbox-trigger]");
const lightboxClosers = document.querySelectorAll("[data-lightbox-close]");

if (lightboxCloseButton) {
  lightboxCloseButton.textContent = "×";
}

if (lightbox && lightboxImage && lightboxTriggers.length) {
  const closeLightbox = () => {
    lightbox.hidden = true;
    lightboxImage.src = "";
    lightboxImage.alt = "";
    document.body.style.overflow = "";
  };

  lightboxTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      lightboxImage.src = trigger.dataset.lightboxSrc || "";
      lightboxImage.alt = trigger.dataset.lightboxAlt || "";
      lightbox.hidden = false;
      document.body.style.overflow = "hidden";
    });
  });

  lightboxClosers.forEach((closer) => {
    closer.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
}

const contactForm = document.querySelector("[data-contact-form]");
const contactStatus = document.querySelector("[data-contact-status]");

if (contactForm && contactStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const project = (formData.get("project") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const subject = encodeURIComponent(`Portfolio Inquiry: ${project}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Project Type: ${project}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    contactStatus.textContent =
      "Opening your email draft. If nothing appears, use the direct email link below.";
    window.location.href = `mailto:zeramiehill03@gmail.com?subject=${subject}&body=${body}`;
  });
}
