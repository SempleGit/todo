import todo from "./todo";
import project from "./project";

const projects = [];

const addTodo = (project) => {
  const newTodo = todo('new todo', 'something else');
  project.addItem(newTodo);
}

const removeTodo = (project, todo) => {
  project.removeItem(todo);
}

const addProject = (title) => {
  projects.push(project(title));
}

const removeProject = (project) => {
  projects.splice(projects.indexOf(project), 1);
}

export { projects, addTodo, removeTodo, addProject, removeProject };