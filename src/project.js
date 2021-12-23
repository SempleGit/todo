const project = (title) => {
  const list = [];
  const getTitle = () => title;
  const addItem = (item) => list.push(item);
  const removeItem = (item) => {
    list.splice(list.indexOf(item), 1);
  };
  const getList = () => list;
  return { getTitle, getList, addItem,removeItem };
}

export default project;