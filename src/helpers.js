import todo from "./todo";

const addTodo = (project) => {
  const newTodo = todo('new todo', 'something else');
  project.addItem(newTodo);
}

const removeTodo = (project, todo) => {
  project.removeItem(todo);
}

export { addTodo, removeTodo };