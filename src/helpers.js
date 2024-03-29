import todo from "./todo";
import project from "./project";

let projects = [];

const populateStorage = () => {
  console.log(JSON.stringify(projects));
  const projectStrings = projects.map( project => (
      {
      title: project.getTitle(),
      list: project.getList().map( item => (
            {
              title: item.getTitle(), 
              description: item.getDescription(), 
              complete: item.getComplete()
            }
          )
        )
      }
    )
  );
  window.localStorage.setItem('projects', JSON.stringify(projectStrings));
}

const setProjects = () => {
  const storedProjects = JSON.parse(window.localStorage.getItem('projects'));
  projects = storedProjects.map( ({title, list}) => (
          project(title, list.map( ({ title, description, complete }) => (
            todo(title, description, complete)
          )
        )
      )
    )
  );
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

if(!localStorage.getItem('projects')) {
  const defaultProject = addProject('My List');
  const defaultTodo = addTodo(defaultProject, 'todo title', 'nothing to do');
} else {
  setProjects();
}

export { projects, addTodo, removeTodo, addProject, removeProject };