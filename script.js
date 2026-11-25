// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Mobile menu
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav nav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => nav.classList.remove("open")));

// Service tabs
document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".tab").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((p) => p.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// Reveal sections on scroll
const sections = document.querySelectorAll("main > section:not(.hero)");
sections.forEach((s) => s.classList.add("reveal"));
const observer = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("visible"); observer.unobserve(e.target); }
  }),
  { threshold: 0.12 }
);
sections.forEach((s) => observer.observe(s));

// Gallery lightbox
const box = document.querySelector(".lightbox");
const boxImg = box.querySelector("img");
document.querySelectorAll(".shot").forEach((shot) =>
  shot.addEventListener("click", () => {
    boxImg.src = shot.dataset.full;
    boxImg.alt = shot.querySelector("img").alt;
    box.hidden = false;
  })
);
const closeBox = () => { box.hidden = true; boxImg.src = ""; };
box.addEventListener("click", (e) => { if (e.target !== boxImg) closeBox(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeBox(); });
