import { addTaskForm } from "./addTask"
import { projectList, project, task } from "./projects"

const tabSelector = document.querySelector(".tab-selector");
const projectContainter = document.querySelector(".project-container");

tabSelector.addEventListener("click", (e) => {
  if (e.target.getAttribute(["data-key"])) {
    const selected = e.target.getAttribute(["data-key"]);
    renderTab();
    renderTask(selected);
    selectProject(selected);
    console.log(selected);
  }

  if (e.target.getAttribute(["data-close"])) {
    closeProject(e.target.parentElement.getAttribute(["data-key"]));
    renderTab();
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


// display tab when selected. 

const renderTab = () => {
  let tabHTML = "";
  if (projectList.length < 1) {
    defaultTab();
  }
  projectList.forEach(project => {
    console.log(project.getName());
    tabHTML += `<p data-key=${project.getId()} class="selector">${project.getName()}
                    <img data-close="x" class="closeX" src="./images/no16.png"></p>`;
  })
  tabSelector.innerHTML = "";
  tabSelector.insertAdjacentHTML("afterbegin", tabHTML);
}

// display the tasks for the current project tab.
const renderTask = (selected = projectList[0].getId()) => {
  const container = document.querySelector(".project-container");
  container.innerHTML = "";
  let taskHTML = "";
  const indexSelected = projectList.findIndex( element => element.getId() == selected);
  const tasks = projectList[indexSelected].getTasks();
  tasks.forEach(task => {
    taskHTML +=  `<div data-key="${task.getTitle()}" class="todo-container">
                    <h2 class="todo-header">${task.getTitle()}</h2>
                    <ul>
                      <li>Description: ${task.getDescription()}</li>
                      <li>Start Time: ${task.getStartTime()}</li>
                      <li>Notes: ${task.getNotes()}</li>
                    </ul>
                  </div>`
  });

  container.insertAdjacentHTML('afterbegin', taskHTML);
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

  // to be removed when complete
    const task1 = task("read", "none", "11:15 am", "n/a");
    const task2 = task("read2", "none", "11:15 am", "n/a");
    myDefault.add(task1);
    myDefault.add(task2);
  // remove when complete

  projectList.push(myDefault);
}

const closeProject = (selected) => {
  const removeIndex = projectList.findIndex( (e) => e.getId() == selected);
  projectList.splice(removeIndex, 1);
}

renderTab();
renderTask();
