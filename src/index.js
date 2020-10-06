import { addTaskForm, renderTask  } from "./addTask"
import { projects, project, task } from "./projects"

const tabSelector = document.querySelector(".tab-selector");
const projectContainter = document.querySelector(".project-container");

tabSelector.addEventListener("click", (e) => {
  if (e.target.getAttribute(["data-key"])) {
    const selected = e.target.getAttribute(["data-key"]);
    renderTab();  
    selectProject(selected);
    console.log(selected);
  }

  if (e.target.getAttribute(["data-close"])) {
    closeProject(e.target.parentElement.getAttribute(["data-key"]));
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
  renderTask(selected);
}


// display tab when selected. 

const renderTab = () => {
  let tabHTML = "";
  if (projects.getProjectList().length < 1) {
    defaultTab();
  }

  projects.getProjectList().forEach(project => {
    console.log(project.getName());
    tabHTML += `<p data-key=${project.getId()} class="selector">${project.getName()}
                    <img data-close="x" class="closeX" src="./images/no16.png"></p>`;
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


// Creates a default project tab if all tabs are deleted.
const defaultTab = () => {
  const myDefault = project("My List");

  projects.addProject(myDefault);
}


const closeProject = (selected) => {
  const removeIndex = projects.getProjectList().findIndex( (e) => e.getId() == selected);
  projects.getProjectList().splice(removeIndex, 1);
  renderTab();
  renderTask(); 
}

renderTab();
renderTask();
