export const addTodo = (value) => {
  return {
    type: "ADD_TODO",
    payload: value,
  };
};
