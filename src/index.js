import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

// Theme Toggle
const themeToggleBtn = document.getElementById("theme-toggle");
const themeIconSun = document.getElementById("theme-icon-sun");
const themeIconMoon = document.getElementById("theme-icon-moon");
const htmlElement = document.documentElement;
const body = document.body;

// ตรวจสอบ theme ที่บันทึกไว้ หรือใช้ theme ระบบ
const savedTheme = localStorage.getItem("theme") || "light";
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const initialTheme = savedTheme === "auto" ? (prefersDark ? "dark" : "light") : savedTheme;

// ตั้ง theme เริ่มต้น
function setTheme(theme) {
  if (theme === "dark") {
    body.classList.add("dark-theme");
    htmlElement.setAttribute("data-theme", "dark");
    themeIconSun.classList.add("active");
    themeIconMoon.classList.remove("active");
  } else {
    body.classList.remove("dark-theme");
    htmlElement.setAttribute("data-theme", "light");
    themeIconSun.classList.remove("active");
    themeIconMoon.classList.add("active");
  }
  localStorage.setItem("theme", theme);
}

// ใช้ theme เริ่มต้น
setTheme(initialTheme);

// เมื่อคลิกปุ่ม toggle
if (themeToggleBtn) {
  themeToggleBtn.addEventListener("click", () => {
    const currentTheme = body.classList.contains("dark-theme") ? "dark" : "light";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  });
}

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
