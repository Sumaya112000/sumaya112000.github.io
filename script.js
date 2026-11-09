const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const themeButton = document.querySelector(".theme-toggle");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
  document.body.classList.add("dark");
  themeButton.textContent = "☀";
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");

  themeButton.textContent = isDark ? "☀" : "☾";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});
