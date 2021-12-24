import project from "./project";
import { addTodo, removeTodo } from "./helpers";

const renderPage = (projects) => {
  const content = document.querySelector('#content');
  content.innerHTML = '';

  for (const project of projects) {
    const projectTab = document.createElement('div');
    projectTab.classList.add('project-tab');
    content.appendChild(projectTab);
    const h2 = document.createElement('h2');
    h2.textContent = project.getTitle();
    const projectList = document.createElement('div');
    projectList.classList.add('project-list');

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
        renderPage(projects);
      }
      
      removeBtn.onclick = () => {
        removeTodo(project, todo);
        renderPage(projects);
      }

      projectList.append(h3, p, finishedBtn, removeBtn);
    }

    const btn = document.createElement('button');
    btn.textContent = 'Add';
    btn.onclick = () => {
      addTodo(project);
      renderPage(projects);
    }

    projectTab.append(h2, projectList, btn);
  }
  const addProjectBtn = document.createElement('button');
  addProjectBtn.textContent = 'Add Project';
  addProjectBtn.classList.add('add-project-button')
  addProjectBtn.onclick = () => {
    projects.push(project('new project'));
    renderPage(projects);
  }
  content.appendChild(addProjectBtn);
}

export default renderPage;