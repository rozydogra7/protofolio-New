// Typing Animation
const roles = ["Front-End Developer",  "Web Designer"];
let index = 0;
let charIndex = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[index].length) {
    typingElement.textContent += roles[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 100);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typingElement.textContent = roles[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 50);
  } else {
    index = (index + 1) % roles.length;
    setTimeout(typeEffect, 200);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeEffect();
});
// Add flicker effect to glowing text
const glowText = document.querySelector(".glow-text");
setInterval(() => {
  glowText.style.opacity = Math.random() > 0.1 ? "1" : "0.9";
}, 300);
// === Background light particles ===
const skillsSection = document.querySelector('#skills');

for (let i = 0; i < 20; i++) {
  const dot = document.createElement('div');
  dot.classList.add('light-dot');

  // random position
  dot.style.left = Math.random() * 100 + "%";
  dot.style.top = Math.random() * 100 + "%";

  // random color hue
  const hue = Math.floor(Math.random() * 360);
  dot.style.background = `radial-gradient(circle, hsla(${hue}, 100%, 70%, 0.9), transparent 70%)`;

  // random delay
  dot.style.animationDelay = `${Math.random() * 8}s`;
  dot.style.animationDuration = `${6 + Math.random() * 4}s`;

  skillsSection.appendChild(dot);
}

// === Scroll reveal for skill boxes ===
const skillBoxes = document.querySelectorAll('.skill-box');

window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight * 0.85;
  skillBoxes.forEach(box => {
    const top = box.getBoundingClientRect().top;
    if (top < triggerBottom) {
      box.style.opacity = 1;
      box.style.transform = "translateY(0)";
    }
  });
});

skillBoxes.forEach(box => {
  box.style.opacity = 0;
  box.style.transform = "translateY(30px)";
});
