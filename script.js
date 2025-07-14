const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// ==== Animate on Scroll Initialize ==== //
AOS.init();

// ==== GSAP Animations ==== //
gsap.from(".logo", { opacity: 0, y: -10, delay: 1, duration: 0.5 });
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});
gsap.from(".toggle_btn", { opacity: 0, y: -10, delay: 1.4, duration: 0.5 });
gsap.from(".main-heading", { opacity: 0, y: 20, delay: 2.4, duration: 1 });
gsap.from(".info-text", { opacity: 0, y: 20, delay: 2.8, duration: 1 });
gsap.from(".btn_wrapper", { opacity: 0, y: 20, delay: 2.8, duration: 1 });
gsap.from(".team_img_wrapper img", { opacity: 0, y: 20, delay: 3, duration: 1 });

// ==== Smooth Scroll for Anchor Links ==== //
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// ==== Form Validation ==== //
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const name = form.querySelector("input[type='text']").value.trim();
      const email = form.querySelector("input[type='email']").value.trim();
      const message = form.querySelector("textarea").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in all fields.");
        return;
      }

      if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      alert("Message sent successfully!");
      form.reset();
    });
  }
});

// ==== Scroll‑based Fade‑In Animation ==== //
const fadeInElements = document.querySelectorAll(".fade-in");
const scrollObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);
fadeInElements.forEach(el => scrollObserver.observe(el));

// ==== Button Hover Animations ==== //
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("mouseenter", () => {
    gsap.to(button, { scale: 1.05, duration: 0.3 });
  });
  button.addEventListener("mouseleave", () => {
    gsap.to(button, { scale: 1.0, duration: 0.3 });
  });
});

// ==== Theme Toggle (Light / Dark) ==== //
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".nav");
  if (!nav) return;

  let themeBtn = document.getElementById("theme_toggle");
  if (!themeBtn) {
    themeBtn = document.createElement("button");
    themeBtn.id = "theme_toggle";
    themeBtn.className = "theme_toggle_btn btn";
    themeBtn.style.marginLeft = "1rem";
    themeBtn.innerHTML = '<i class="ri-moon-line"></i>';
    nav.appendChild(themeBtn);
  }

  const applyTheme = theme => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeBtn.innerHTML =
      theme === "dark"
        ? '<i class="ri-sun-line"></i>'
        : '<i class="ri-moon-line"></i>';
  };

  const preferredTheme =
    localStorage.getItem("theme") ||
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  applyTheme(preferredTheme);

  themeBtn.addEventListener("click", () => {
    const currentTheme =
      localStorage.getItem("theme") === "dark" ? "dark" : "light";
    applyTheme(currentTheme === "dark" ? "light" : "dark");
  });
});
