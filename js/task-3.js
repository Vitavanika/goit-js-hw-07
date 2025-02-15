const inputEl = document.querySelector("input#name-input");
const outputEl = document.querySelector("span#name-output");
inputEl.addEventListener("input", (event) =>
  event.target.value.trim() === ""
    ? (outputEl.textContent = "Anonymous")
    : (outputEl.textContent = event.target.value.trim())
);
