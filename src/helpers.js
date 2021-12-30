import todo from "./todo";
import project from "./project";

let projects = JSON.parse(localStorage.getItem('projects')) || [];

const populateStorage = () => {
  console.log(projects[0].getTitle());
  localStorage.setItem('projects', JSON.stringify(projects));
};

const setProjects = () => {
  projects = JSON.parse(localStorage.getItem('projects'));
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

export { projects, addTodo, removeTodo, addProject, removeProject };