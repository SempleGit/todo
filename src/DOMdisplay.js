import { projects, addProject, removeProject, addTodo, removeTodo } from "./helpers";

const modalTemplate = (...element) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  
  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  modal.appendChild(modalContent);

  const closeBtn = document.createElement('span');
  closeBtn.classList.add('close-btn');

  modalContent.append(closeBtn, ...element);

  content.insertAdjacentElement('afterbegin', modal);
}

const addTodoModal = (project) => {

  const pText = document.createElement('p');
  pText.textContent = "modal text";

  const addButton = document.createElement('button');
  addButton.textContent = 'Add Todo';
  addButton.onclick = () => {
    addTodo(project);
    renderPage();
  }
  
  modalTemplate(pText, addButton);
  
}

const addProjectModal = () => {

  const pText = document.createElement('p');
  pText.textContent = "modal text";

  const addButton = document.createElement('button');
  addButton.textContent = 'Add Project';
  addButton.onclick = () => {
    addProject('new project');
    renderPage();
  }
  
  modalTemplate(pText, addButton);

}

const renderPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  for (const project of projects) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');
    const h2 = document.createElement('h2');
    h2.textContent = project.getTitle();
    const projectList = document.createElement('div');
    
    project.getList().length > 0 && projectList.classList.add('project-list');
    content.appendChild(projectTab);
    
    for (const todo of project.getList()) {
      const todoDiv = document.createElement('div');
      todoDiv.classList.add('todo-div');
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const finishedBtn = document.createElement('button');
      const removeBtn = document.createElement('button');

      h3.textContent = todo.getTitle();
      p.textContent = `${todo.getDescription()}`; 
      finishedBtn.textContent = `${todo.getComplete() ? 'Complete' : 'Incomplete'}`;
      removeBtn.textContent = 'Remove';
      
      finishedBtn.onclick = () => {
        todo.setComplete();
        renderPage();
      }
      
      removeBtn.onclick = () => {
        removeTodo(project, todo);
        renderPage();
      }

      todoDiv.append(h3, p, finishedBtn, removeBtn)
      projectList.appendChild(todoDiv);
    }

    const addModal = document.createElement('button');
    addModal.textContent = 'Add';
    addModal.onclick = () => {
      addTodoModal(project);
    }

    const removeProjectBtn = document.createElement('button');
    removeProjectBtn.textContent = 'Remove Project';
    removeProjectBtn.classList.add('remove-project-button')
    removeProjectBtn.onclick = () => {
      removeProject(project);
      renderPage();
    }

    projectTab.append(h2, addModal, projectList, removeProjectBtn);
  }

  const addProjectBtn = document.createElement('button');
  addProjectBtn.textContent = 'Add Project';
  addProjectBtn.classList.add('add-project-button')
  addProjectBtn.onclick = () => {
    addProjectModal();
  }


  content.appendChild(addProjectBtn);
}

export default renderPage;