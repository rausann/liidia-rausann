const rejectButton = document.querySelector(".reject-btn");
const loveButton = document.querySelector(".love-btn");
const reaction = document.querySelector(".reaction");
const music = document.querySelector(".music");

function moveRejectButton() {
  const actions = document.querySelector(".actions");
  const buttonRect = rejectButton.getBoundingClientRect();
  const actionsRect = actions.getBoundingClientRect();

  rejectButton.classList.add("escape");

  const maxX = Math.max(0, actionsRect.width - buttonRect.width);
  const maxY = Math.max(0, actionsRect.height - buttonRect.height);
  const nextX = Math.random() * maxX;
  const nextY = Math.random() * maxY;

  rejectButton.style.left = `${nextX}px`;
  rejectButton.style.top = `${nextY}px`;
}

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";
  heart.textContent = "♥";
  heart.style.setProperty("--x", `${Math.random() * 100}vw`);
  heart.style.setProperty("--size", `${Math.random() * 22 + 16}px`);

  document.body.appendChild(heart);
  window.setTimeout(() => heart.remove(), 4000);
}

function showLoveReaction() {
  window.location.href = "valentine-love.html";
}

rejectButton.addEventListener("mouseenter", moveRejectButton);
rejectButton.addEventListener("focus", moveRejectButton);
rejectButton.addEventListener("click", (event) => {
  event.preventDefault();
  moveRejectButton();
});

loveButton.addEventListener("click", showLoveReaction);
