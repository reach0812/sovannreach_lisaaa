/* ---------- SCROLL ---------- */
function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ---------- SIMPLE TEXT ---------- */
function showMessage(text) {
  const el = document.getElementById("funText");
  if (el) el.innerText = text;
}

/* ---------- MODAL (NEW GAME MODAL) ---------- */
function openModal(text) {
  document.getElementById("modalText").innerText = text;
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

/* ---------- GUESS MY GIFT GAME ---------- */
const correctGift = "Ring"; // change if you want 😏

function guessGift(choice) {
  const modal = document.getElementById("gameModal");
  const text = document.getElementById("gameText");

  if (choice === correctGift) {
    text.innerText = "🎉 You’re right!\nI’ll buy your favorite food❤️";
  } else {
    text.innerText = "😆 Wrong!\nYou owe me 100 kisses💋";
  }

  modal.style.display = "flex";
}

function closeGame() {
  document.getElementById("gameModal").style.display = "none";
}

/* ---------- HEART EFFECT ---------- */
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 90 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 2 + "s";
  heart.style.width = 15 + Math.random() * 15 + "px";
  heart.style.height = heart.style.width;

  document.querySelector(".hearts-container")?.appendChild(heart);

  setTimeout(() => heart.remove(), 5000);
}

/* ---------- PAGE LOAD ---------- */
window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

/* ---------- STORY GIF POSITION ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const gifs = document.querySelectorAll(".story-gif");

  gifs.forEach((gif, i) => {
    gif.style.position = "fixed";
    gif.style.bottom = "10px";
    gif.style.left = `${10 + i * 18}%`;
  });
});

/* ---------- 3D CAROUSEL ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".carousel-container");

  if (!container) return;

  const items = container.querySelectorAll("video, img");
  const total = items.length;

  items.forEach((item, i) => {
    const angle = (360 / total) * i;
    item.style.transform = `rotateY(${angle}deg) translateZ(300px)`;
  });
});
