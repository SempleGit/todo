import { projects, addProject, removeProject, addTodo, removeTodo } from "./helpers";

const renderPage = () => {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  for (const project of projects) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');
    const h2 = document.createElement('h2');
    h2.textContent = project.getTitle();
    const projectList = document.createElement('div');
    projectList.classList.add('project-list');
    
    content.appendChild(projectTab);
    
    for (const todo of project.getList()) {
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const finishedBtn = document.createElement('button');
      const removeBtn = document.createElement('button');

      h3.textContent = todo.getTitle();
      p.textContent = `${todo.getDescription()}`; 
      finishedBtn.textContent = `${todo.getComplete() ? 'finished' : 'not finished'}`;
      removeBtn.textContent = 'Remove';
      
      finishedBtn.onclick = () => {
        todo.setComplete();
        renderPage();
      }
      
      removeBtn.onclick = () => {
        removeTodo(project, todo);
        renderPage();
      }

      projectList.append(h3, p, finishedBtn, removeBtn);
    }

    const addToDobtn = document.createElement('button');
    addToDobtn.textContent = 'Add To Do';
    addToDobtn.onclick = () => {
      addTodo(project);
      renderPage();
    }

    const removeProjectBtn = document.createElement('button');
    removeProjectBtn.textContent = 'Remove Project';
    removeProjectBtn.classList.add('remove-project-button')
    removeProjectBtn.onclick = () => {
      removeProject(project);
      renderPage();
    }

    projectTab.append(h2, projectList, addToDobtn, removeProjectBtn);
  }

  const addProjectBtn = document.createElement('button');
  addProjectBtn.textContent = 'Add Project';
  addProjectBtn.classList.add('add-project-button')
  addProjectBtn.onclick = () => {
    addProject('new project');
    renderPage();
  }
  

  content.appendChild(addProjectBtn);
}

export default renderPage;