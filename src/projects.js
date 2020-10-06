export { projects, project, task }


const projects = (() => {
  const projectList = [];
  const getProjectList = () => projectList;
  const addProject = (project) => projectList.push(project);
  return { getProjectList, addProject }
})();

const uniqueId = ((currentId) => {
  const nextId = () => currentId++;
  return { nextId }
})(1000);

const project = (name) => {
  const id = uniqueId.nextId();
  const taskArray = [];
  const getId = () => id;
  const getName = () => name;
  const add = (task) => taskArray.push(task);
  const getTasks = () => taskArray;
  return { getId, getName, getTasks, add }
};

const task = (title, description, startTime, notes) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getStartTime = () => startTime;
  const getNotes = () => notes;
  return { getDescription, getNotes, getStartTime, getTitle }
};




