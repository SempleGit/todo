export { projectList, project, task }

let uniqueId = 1000;

const projectList = [];

const project = (name) => {
  const id = uniqueId++;
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




