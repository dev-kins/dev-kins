const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

const lastUpdatedElement = document.getElementById("last-updated");
if (lastUpdatedElement) {
  lastUpdatedElement.textContent = "August 8, 2026";
}

document.documentElement.classList.add("js-enabled");

window.addEventListener("load", () => {
  document.documentElement.classList.add("is-loaded");
});

const allImages = Array.from(document.querySelectorAll("img"));
allImages.forEach((image) => {
  if (image.classList.contains("profile-photo")) {
    image.loading = "eager";
    image.decoding = "async";
    image.fetchPriority = "high";
    return;
  }

  image.loading = "lazy";
  image.decoding = "async";
});

const techIconSlugMap = {
  "tech-chip--php": "php.svg",
  "tech-chip--javascript": "javascript.svg",
  "tech-chip--html": "html5.svg",
  "tech-chip--css": "css.svg",
  "tech-chip--laravel": "laravel.svg",
  "tech-chip--bootstrap": "bootstrap.svg",
  "tech-chip--react": "react.svg",
  "tech-chip--mysql": "mysql.svg",
  "tech-chip--postgres": "postgresql.svg",
  "tech-chip--supabase": "supabase.svg",
  "tech-chip--docker": "docker.svg",
  "tech-chip--render": "render.svg",
  "tech-chip--vercel": "vercel.svg",
  "tech-chip--git": "git.svg",
  "tech-chip--github": "github.svg",
  "tech-chip--vscode": "vscode.svg",
  "tech-chip--postman": "postman.svg",
  "tech-chip--xampp": "xampp.svg",
  "tech-chip--figma": "figma.svg",
  "tech-chip--node": "nodedotjs.svg",
  "tech-chip--typescript": "typescript.svg",
};

document.querySelectorAll(".tech-chip").forEach((chip) => {
  const iconSlot = chip.querySelector(".tech-chip-icon");
  if (!iconSlot) return;

  const chipClass = Object.keys(techIconSlugMap).find((className) =>
    chip.classList.contains(className),
  );

  if (!chipClass) return;

  const fallbackText = iconSlot.textContent.trim();
  const slug = techIconSlugMap[chipClass];
  const iconPath = `./assets/tech-icons/${slug}`;
  const icon = document.createElement("img");
  icon.src = iconPath;
  icon.alt = "";
  icon.setAttribute("aria-hidden", "true");
  icon.loading = "lazy";
  icon.decoding = "async";
  iconSlot.textContent = "";
  iconSlot.classList.add("tech-chip-icon--image");
  iconSlot.appendChild(icon);
  icon.addEventListener("error", () => {
    icon.remove();
    iconSlot.classList.remove("tech-chip-icon--image");
    iconSlot.textContent = fallbackText;
  });
});

const lightboxTriggers = document.querySelectorAll("[data-lightbox-trigger]");

lightboxTriggers.forEach((trigger) => {
  const lightboxLabel = trigger.dataset.lightboxAlt;
  if (lightboxLabel && !trigger.getAttribute("aria-label")) {
    trigger.setAttribute("aria-label", `Open preview: ${lightboxLabel}`);
  }
  trigger.setAttribute("aria-haspopup", "dialog");
});

const rippleButtons = document.querySelectorAll(
  ".button, .gallery-image-button, .theme-toggle, .mobile-menu-toggle, .gallery-toggle",
);

rippleButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (!(button instanceof HTMLElement)) return;

    const rect = button.getBoundingClientRect();
    const ripple = document.createElement("span");
    ripple.className = "button-ripple";

    const size = Math.max(rect.width, rect.height);
    const pointerX = event.clientX || rect.width / 2;
    const pointerY = event.clientY || rect.height / 2;

    ripple.style.width = `${size}px`;
    ripple.style.height = `${size}px`;
    ripple.style.left = `${pointerX - size / 2}px`;
    ripple.style.top = `${pointerY - size / 2}px`;

    button.appendChild(ripple);
    window.setTimeout(() => ripple.remove(), 650);
  });
});

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
  ".hero-orb",
  ".professional-card",
  ".resume-preview-card",
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
const lightboxClosers = document.querySelectorAll("[data-lightbox-close]");

if (lightboxCloseButton) {
  lightboxCloseButton.textContent = "x";
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
    const company = (formData.get("company") || "").toString().trim();
    const position = (formData.get("position") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    const subject = encodeURIComponent(`Portfolio Inquiry: ${company} - ${position}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Position: ${position}`,
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

// Portfolio V2: keep the primary navigation in sync with the visible section.
const navLinks = Array.from(document.querySelectorAll('.topnav a[href^="#"]'));
const navSections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if (navLinks.length && navSections.length && "IntersectionObserver" in window) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) return;

      navLinks.forEach((link) => {
        const isActive = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("is-active", isActive);
        if (isActive) link.setAttribute("aria-current", "page");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-28% 0px -62%", threshold: [0.05, 0.25, 0.5] },
  );

  navSections.forEach((section) => navObserver.observe(section));
}

// Portfolio V2 Sprint 1.1: compact mobile navigation.
const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
const primaryNavigation = document.querySelector("#primary-navigation");

const closeMobileMenu = () => {
  if (!mobileMenuToggle || !primaryNavigation) return;
  primaryNavigation.classList.remove("is-open");
  mobileMenuToggle.setAttribute("aria-expanded", "false");
  mobileMenuToggle.setAttribute("aria-label", "Open navigation menu");
};

if (mobileMenuToggle && primaryNavigation) {
  mobileMenuToggle.addEventListener("click", () => {
    const willOpen = !primaryNavigation.classList.contains("is-open");
    primaryNavigation.classList.toggle("is-open", willOpen);
    mobileMenuToggle.setAttribute("aria-expanded", String(willOpen));
    mobileMenuToggle.setAttribute(
      "aria-label",
      willOpen ? "Close navigation menu" : "Open navigation menu",
    );
  });

  primaryNavigation.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    const header = document.querySelector("[data-site-header]");
    if (header && !header.contains(event.target)) closeMobileMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMobileMenu();
      mobileMenuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 820) closeMobileMenu();
  });
}
