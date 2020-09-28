const mainSelector = document.querySelector(".main-selector");

mainSelector.addEventListener("click", (e) => {
  if (e.target.getAttribute(["data-key"])) {
    const selected = e.target.getAttribute(["data-key"]);
    const selectors = document.querySelectorAll(".selector");
    selectors.forEach(selector => {
      if (selector.getAttribute(["data-key"]) === selected) {
        selector.classList.add("selected");
      } else {
        selector.classList.remove("selected");
      }
    })
  }
})

const addButton = document.getElementById("add-button");
const popoutOverlay = document.querySelector(".popout-overlay");
const closeButton = document.querySelector(".close-button");

closeButton.addEventListener("click", () => {
  popoutOverlay.classList.remove("open");
})

addButton.addEventListener("click", e => {
  popoutOverlay.classList.add("open");
  console.log("add button!");
})