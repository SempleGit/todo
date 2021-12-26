import todo from "./todo";
import project from "./project";
import renderPage from "./DOMdisplay";
import { projects } from "./helpers";
import './style.css';



const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);


const defaultProject = project('Project Title 1');
const secondProject = project('Project Title 2');

projects.push(defaultProject);
projects.push(secondProject);

const defaultTodo = todo('todo title', 'nothing to do');

defaultProject.addItem(defaultTodo);

renderPage(projects);



