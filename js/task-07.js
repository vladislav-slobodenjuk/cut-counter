const inputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${inputEl.value}px`;

function onImputChange({ currentTarget: { value } }) {
  textEl.style.fontSize = `${value}px`;
}

inputEl.addEventListener("input", onImputChange);
