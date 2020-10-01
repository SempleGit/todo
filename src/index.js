import { addTaskForm } from "./addTask.js"

const tabSelector = document.querySelector(".tab-selector");

tabSelector.addEventListener("click", (e) => {
  if (e.target.getAttribute(["data-key"])) {
    const selected = e.target.getAttribute(["data-key"]);
    const selectors = document.querySelectorAll(".selector");
    selectors.forEach(selector => {
      if (selector.getAttribute(["data-key"]) === selected) {
        selector.classList.add("selected");
      } else {
        selector.classList.remove("selected");
      }
    });
  }
});

const addButton = document.getElementById("add-button");
const popoutOverlay = document.querySelector(".popout-overlay");


addButton.addEventListener("click", () => {
  popoutOverlay.classList.add("open");
  addTaskForm();
  console.log("add button!");
});