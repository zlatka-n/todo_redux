import _ from "lodash";

const initialState = {
  todos: [
    {
      text: "",
      id: null,
    },
  ],
};
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        // that has all the existing state data
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

    default:
      return state;
  }
};
