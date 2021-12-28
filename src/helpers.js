import todo from "./todo";
import project from "./project";

const projects = [];

const addTodo = (project, title = 'New Todo', description = "N/A") => {
  const newTodo = todo(title, description);
  project.addItem(newTodo);
  return newTodo;
}

const removeTodo = (project, todo) => {
  project.removeItem(todo);
}

const addProject = (title) => {
  const newProject = project(title);
  projects.push(newProject);
  return newProject;
}

const removeProject = (project) => {
  projects.splice(projects.indexOf(project), 1);
}

export { projects, addTodo, removeTodo, addProject, removeProject };