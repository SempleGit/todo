import { projects, project, task } from "./projects"

export { render, addTaskForm }

  function addTaskForm() {
    const popout = document.querySelector(".popout-form");
    // Creating the html to open the add task form.
    
    const html =  `<div class="add-task">
                    <label for="title">Title
                      <input type="text" id="title" placeholder="Title">
                    </label>
                    <label for="description">Description
                      <input type="text" id="description" placeholder="description">
                    </label>
                    <label for="startTime">Start Time
                      <input type="time" id="startTime">
                    </label>
                    <label for="notes">Notes
                      <textarea rows="4" id="notes" placeholder="Notes"></textarea>
                    </label>
                    <div class="form-buttons">
                      <button class="submit-button">Submit</button>
                      <button class="close-button">Close</button>
                    </div>
                  </div>`

    popout.insertAdjacentHTML("afterbegin", html);

    const submitButton = document.querySelector(".submit-button");
    submitButton.addEventListener("click", submit);
  
    const closeButton = document.querySelector(".close-button");
    closeButton.addEventListener("click", closeOverlay);
  }

  const closeOverlay = e => {
    const popoutOverlay = document.querySelector(".popout-overlay");
    popoutOverlay.classList.remove("open");
    // replace with while loop
    e.target.closest(".container").innerHTML = "";
  }

  const getSelectedTask = () => {
    if (document.querySelector(".selected")) {
      const id = document.querySelector(".selected").getAttribute(["data-key"])
      const index = projects.getProjectList().findIndex( item => item.getId() == id);
      return index;
    }   
    return 0;
  }

  function submit(e) {
    const newTask = task(title.value, description.value, startTime.value, notes.value);
    const index = getSelectedTask();
    projects.getProjectList()[index].add(newTask);
    closeOverlay(e);
    render(projects.getProjectList()[index].getId());
  }

const render = (selection) => {
  const renderTab = (() => {
    const tabSelector = document.querySelector(".tab-selector");
    tabSelector.innerHTML = "";
    let tabHTML = "";
    projects.getProjectList().forEach(project => {
      tabHTML += `<p data-key=${project.getId()} class="selector">${project.getName()}
                      <img data-close="x" class="closeX" src="./images/no16.png"></p>`;
    })
    tabSelector.insertAdjacentHTML("afterbegin", tabHTML);
  })();

  const renderTask = ((selected = selection || projects.getProjectList()[0].getId()) => {
    const container = document.querySelector(".project-container");
    container.innerHTML = "";
    let taskHTML = "";
    const indexSelected = projects.getProjectList().findIndex( element => element.getId() == selected);
    const tasks = projects.getProjectList()[indexSelected].getTasks();
    let index = 0;
    tasks.forEach(task => {
      taskHTML +=  `<div data-key="${task.getTitle()}" class="todo-container">
                      <h2 class="todo-header">${task.getTitle()}</h2>
                      <ul>
                        <li>Description: ${task.getDescription()}</li>
                        <li>Start Time: ${task.getStartTime()}</li>
                        <li>Notes: ${task.getNotes()}</li>
                      </ul>
                      <button class="remove" data-projectIndex=${indexSelected} data-taskindex=${index}>Remove</button>
                    </div>`
      index++;
    });
    container.insertAdjacentHTML('afterbegin', taskHTML);

    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach(button => button.addEventListener("click", () => {
      projects.getProjectList()[indexSelected].removeTask(button.getAttribute(["data-taskIndex"]));
      render(selected);
    }))

  })(selection);
}