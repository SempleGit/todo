export { addTaskForm }

function addTaskForm() {
  const popout = document.querySelector(".popout-form");
  
  // Creating all the html elements and attaching classes and attributes.
  const addTask = document.createElement('div');
  addTask.classList.add("add-task");

  const title = document.createElement('label');
  title.setAttribute("for", "title");
  
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
  closeButton();
}

const closeButton = function() {
  const popout = document.querySelector(".popout-form");
  const popoutOverlay = document.querySelector(".popout-overlay");
  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", () => {
    popoutOverlay.classList.remove("open");
    popout.innerHTML = "";
  });
  
}

function clearHTML() {
  const popout = document.querySelector(".popout-form");

}

