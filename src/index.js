import todo from "./todo";
import renderPage from "./DOMdisplay";
import { projects, addProject } from "./helpers";
import './style.css';



const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);


const defaultProject = addProject('Project Title 1');
const defaultTodo = todo('todo title', 'nothing to do');

defaultProject.addItem(defaultTodo);

renderPage(projects);



