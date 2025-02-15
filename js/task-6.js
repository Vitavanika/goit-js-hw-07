function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnDestroyEl = document.querySelector("button[data-destroy]");
const btnCreateEl = document.querySelector("button[data-create]");
const inputEl = document.querySelector("input");
const boxesEl = document.querySelector("#boxes");

function createBoxes(number) {
  boxesEl.innerHTML = "";
  const fragment = document.createDocumentFragment();
  for (let i = 0; i < number; i += 1) {
    const divEl = document.createElement("div");
    divEl.style.width = 30 + i * 10 + "px";
    divEl.style.height = 30 + i * 10 + "px";
    divEl.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(divEl);
  }
  boxesEl.appendChild(fragment);
}

btnCreateEl.addEventListener("click", () => {
  const amount = Number(inputEl.value);
  amount >= 1 && amount <= 100
    ? createBoxes(amount)
    : alert("Enter a number from 1 to 100");
  inputEl.value = "";
});

btnDestroyEl.addEventListener("click", () => {
  boxesEl.innerHTML = "";
});
