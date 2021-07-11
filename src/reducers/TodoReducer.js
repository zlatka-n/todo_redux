const initialState = {
  todos: [
    {
      text: "",
      id: null,
    },
  ],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        // existing state data
        ...state,
        // but has a new array for the `todos` field
        todos: [
          // with all of the old todos
          ...state.todos,
          // and the new todo object
          {
            id: Math.floor(Math.random() * 1000),
            text: action.payload,
          },
        ],
      };
    case "DELETE_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.filter((item) => {
            return item.id !== action.payload;
          }),
        ],
      };
    case "EDIT_TODO":
      return {
        ...state,
        todos: [
          ...state.todos.map((item) => {
            if (item.id !== action.payload.id) {
              return item;
            }
            return {
              ...item,
              ...action.payload,
            };
          }),
        ],
      };
    default:
      return state;
  }
};
