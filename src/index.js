import todo from "./todo";
import renderPage from "./DOMdisplay";
import { projects, addProject, addTodo } from "./helpers";
import './style.css';



const content = document.createElement('div');
content.setAttribute('id', 'content');
document.body.appendChild(content);


const defaultProject = addProject('My List');
const defaultTodo = addTodo(defaultProject, 'todo title', 'nothing to do');

renderPage(projects);



