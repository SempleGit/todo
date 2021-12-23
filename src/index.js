import todo from "./todo";
import project from "./project";
import './style.css';

const projects = [];
const defaultProject = project('Default');
const secondProject = project('secondtemp');

projects.push(defaultProject);
projects.push(secondProject);

const defaultTodo = todo('default', 'nothing to do');

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

    for (const todo of project.getList()) {
      const h3 = document.createElement('h3');
      const p = document.createElement('p');
      const btn = document.createElement('button');
      h3.textContent = todo.getTitle();
      p.textContent = `${todo.getDescription()}`; 
      btn.textContent = `${todo.getComplete() ? 'is finished' : 'not finished'}`;
      btn.onclick = () => {
        todo.setComplete();
        renderPage();
      }
      projectList.append(h3, p, btn);
    }

    const btn = document.createElement('button');
    btn.textContent = 'Add';
    btn.onclick = () => {
      addTodo(project);
    }

    projectTab.append(h2, projectList, btn);
  }
}

renderPage();



