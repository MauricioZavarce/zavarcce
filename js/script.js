const terminalText = document.getElementById("terminal-text");
const messages = [
  "initializing creative_system...",
  "loading developer.mode...",
  "loading music.engine...",
  "zavarcce.exe is running."
];

let messageIndex = 0;
let charIndex = 0;

function typeTerminal() {
  if (!terminalText) return;

  if (charIndex < messages[messageIndex].length) {
    terminalText.textContent += messages[messageIndex][charIndex];
    charIndex++;
    setTimeout(typeTerminal, 38);
  } else {
    setTimeout(() => {
      terminalText.textContent = "";
      charIndex = 0;
      messageIndex = (messageIndex + 1) % messages.length;
      typeTerminal();
    }, 1800);
  }
}

typeTerminal();

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar nav");

menuToggle?.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("active"));
});

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", (event) => {
  glow.style.left = `${event.clientX}px`;
  glow.style.top = `${event.clientY}px`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".skill-card, .project, .about-text, .music-content").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity .7s ease, transform .7s ease";
  observer.observe(el);
});
