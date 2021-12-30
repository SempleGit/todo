import todo from "./todo";
import project from "./project";

let projects = [];



const populateStorage = () => {
  window.localStorage.setItem('projects', JSON.stringify(projects));
};

const setProjects = () => {
  const storedProjects = JSON.parse(window.localStorage.getItem('projects'));
  projects = storedProjects.map( project => console.log(project) );
}

const addTodo = (project, title = 'New Todo', description = "N/A") => {
  const newTodo = todo(title, description);
  project.addItem(newTodo);
  populateStorage();
  return newTodo;
}

const removeTodo = (project, todo) => {
  project.removeItem(todo);
  populateStorage();
}

const addProject = (title = 'New Project') => {
  const newProject = project(title);
  projects.push(newProject);
  populateStorage();
  return newProject;
}

const removeProject = (project) => {
  projects.splice(projects.indexOf(project), 1);
  populateStorage();
}

const defaultProject = addProject('My List');
// const defaultTodo = addTodo(defaultProject, 'todo title', 'nothing to do');

export { projects, addTodo, removeTodo, addProject, removeProject };