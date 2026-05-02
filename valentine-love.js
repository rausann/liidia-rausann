const music = document.querySelector(".music");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "♥";
  heart.style.setProperty("--x", `${Math.random() * 100}vw`);
  heart.style.setProperty("--size", `${Math.random() * 22 + 16}px`);

  document.body.appendChild(heart);
  window.setTimeout(() => heart.remove(), 4000);
}

for (let index = 0; index < 36; index += 1) {
  window.setTimeout(createHeart, index * 90);
}

window.addEventListener("load", () => {
  music.volume = 0.85;
  music.play().catch(() => {
    music.controls = true;
  });
});
