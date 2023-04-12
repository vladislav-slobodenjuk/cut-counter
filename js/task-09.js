const btnEl = document.querySelector(".change-color");
const outputEl = document.querySelector(".color");
const body = document.body;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onHandleClick() {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  outputEl.textContent = color;
}

btnEl.addEventListener("click", onHandleClick);
