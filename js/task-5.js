function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");

changeBtn.addEventListener("click", changeColor);

function changeColor() {
  const currentColor = getRandomHexColor();
  document.body.style.backgroundColor = currentColor;
  colorText.textContent = currentColor;
}
