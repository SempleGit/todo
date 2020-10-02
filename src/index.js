import { addTaskForm } from "./addTask"
import { projectList, project, task } from "./projects"

const tabSelector = document.querySelector(".tab-selector");
const projectContainter = document.querySelector(".project-container");

tabSelector.addEventListener("click", (e) => {
  if (e.target.getAttribute(["data-key"])) {
    const selected = e.target.getAttribute(["data-key"]);
    renderTab();
    selectProject(selected);
    console.log(selected);
  }
});

const selectProject = (selected) => {
  const selectors = document.querySelectorAll(".selector");
  selectors.forEach(selector => {
    if (selector.getAttribute(["data-key"]) === selected) {
      selector.classList.add("selected");
    } else {
      selector.classList.remove("selected");
    }
  });
}

const renderTab = () => {
  let tabHTML = "";
  if (projectList.length < 1) {
    defaultTab();
  }
  projectList.forEach(project => {
    console.log(project.getName());
    tabHTML += `<p data-key=${project.getId()} class="selector">${project.getName()}</p>`;
  })
  tabSelector.innerHTML = "";
  tabSelector.insertAdjacentHTML("afterbegin", tabHTML);
}

const addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
  const popoutOverlay = document.querySelector(".popout-overlay");
  popoutOverlay.classList.add("open");
  addTaskForm();
  console.log("add button!");
});

// testing

const defaultTab = () => {
  const myDefault = project("My List");

  const task1 = task("read", "none", "11:15 am", "n/a");
  const task2 = task("read2", "none", "11:15 am", "n/a");

  myDefault.add(task1);
  myDefault.add(task2);

  projectList.push(myDefault);
}

renderTab();
