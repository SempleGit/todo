import { addTaskForm, render  } from "./addTask"
import { projects, project, task } from "./projects"

  
(function () {
    const tabSelector = document.querySelector(".tab-selector");
    tabSelector.addEventListener("click", (e) => {
      if (e.target.getAttribute(["data-key"])) {
        const selected = e.target.getAttribute(["data-key"]);
        render(selected);  
        selectProject(selected);
      }

      if (e.target.getAttribute(["data-close"])) {
        closeProject(e.target.parentElement.getAttribute(["data-key"]));
      }
    });

    const addButton = document.getElementById("add-button");
    addButton.addEventListener("click", () => {
      const popoutOverlay = document.querySelector(".popout-overlay");
      popoutOverlay.classList.add("open");
      addTaskForm();
    });
})();

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

// Creates a default project tab if all tabs are deleted.
const defaultTab = () => {
  const myDefault = project("My List");
  projects.addProject(myDefault);

  const myDefault2 = project("My List2");
  projects.addProject(myDefault2);
};


const closeProject = (selected) => {
  const removeIndex = projects.getProjectList().findIndex( (e) => e.getId() == selected);
  projects.getProjectList().splice(removeIndex, 1);
  if (projects.getProjectList().length < 1) {
    defaultTab();
  }
  render(); 
}

defaultTab();
render();
