export { addTaskForm }

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
  closeButton();
}

const closeButton = () => {
  const closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", closeOverlay);
}

function closeOverlay() {
  const popoutOverlay = document.querySelector(".popout-overlay");
  popoutOverlay.classList.remove("open");
  // replace with while loop
  this.closest(".container").innerHTML = "";
}


