const project = (title) => {
  const list = [];
  const getTitle = () => title;
  const addItem = (item) => list.push(item);
  const getList = () => list;
  return { getTitle, getList, addItem };
}

export default project;