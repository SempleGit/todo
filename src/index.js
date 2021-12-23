import todo from "./todo";
import project from "./project";
import './style.css';

const projects = [];

const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);


const defaultProject = project('Project Title 1');
const secondProject = project('Project Title 2');

projects.push(defaultProject);
projects.push(secondProject);

const defaultTodo = todo('todo title', 'nothing to do');

defaultProject.addItem(defaultTodo);

const addTodo = (project) => {
  const newTodo = todo('new todo', 'something else');
  project.addItem(newTodo);
  renderPage();
}

const renderPage = () => {

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
      finishedBtn.onclick = () => {
        todo.setComplete();
        renderPage();
      }
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => {
        project.removeItem(todo);
        renderPage();
      }

      projectList.append(h3, p, finishedBtn, removeBtn);
    }

    const btn = document.createElement('button');
    btn.textContent = 'Add';
    btn.onclick = () => {
      addTodo(project);
    }

    projectTab.append(h2, projectList, btn);
  }
  const addProjectBtn = document.createElement('button');
  addProjectBtn.textContent = 'Add Project';
  addProjectBtn.classList.add('add-project-button')
  addProjectBtn.onclick = () => {
    projects.push(project('new project'));
    renderPage();
  }
  content.appendChild(addProjectBtn);
}


renderPage();



