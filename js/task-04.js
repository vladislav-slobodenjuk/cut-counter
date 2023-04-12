const decrementEl = document.querySelector("[data-action='decrement']");
const incrementEl = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

function onHandleClick(e) {
  const action = e.currentTarget.dataset.action;
  action === "increment" ? (counterValue += 1) : (counterValue -= 1);
  valueEl.textContent = counterValue;
}

decrementEl.addEventListener("click", onHandleClick);
incrementEl.addEventListener("click", onHandleClick);
