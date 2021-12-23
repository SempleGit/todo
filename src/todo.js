const todo = (title, description, complete = false) => {
  const getTitle = () => title;
  const getDescription = () => description;
  const getComplete = () => complete;

  const setComplete = () => complete = !complete;

  return { getTitle, getDescription, getComplete, setComplete };
}

export default todo;