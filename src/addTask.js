import { projects, project, task } from "./projects"

export { renderTask, addTaskForm }

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

  function submit(e) {
    const newTask = task(title.value, description.value, startTime.value, notes.value);
    projects.getProjectList()[0].add(newTask);
    closeOverlay(e);
    renderTask();
  }


  const renderTask = (selected = projects.getProjectList()[0].getId()) => {
    const container = document.querySelector(".project-container");
    container.innerHTML = "";
    let taskHTML = "";
    const indexSelected = projects.getProjectList().findIndex( element => element.getId() == selected);
    const tasks = projects.getProjectList()[indexSelected].getTasks();
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