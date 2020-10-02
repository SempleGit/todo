let uniqueId = 1000;

const task = (title, description, startTime, notes) => {
  const id = ++uniqueId;
  const getId = () => id;
  const getTitle = () => title;
  const getDescription = () => description;
  const getStartTime = () => startTime;
  const getNotes = () => notes;
  return { getDescription, getId, getNotes, getStartTime, getTitle }
};

const taskFactory = 

