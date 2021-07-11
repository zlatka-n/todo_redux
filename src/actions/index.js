export const addTodo = (value) => {
  return {
    type: "ADD_TODO",
    payload: value,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "DELETE_TODO",
    payload: id,
  };
};

export const editTodo = (id, newValue) => {
  return {
    type: "EDIT_TODO",
    payload: {
      id: id,
      text: newValue,
    },
  };
};
