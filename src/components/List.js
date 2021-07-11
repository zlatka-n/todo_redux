//TODO: mapStateToProps => store, listing todos
import React from "react";
import { connect } from "react-redux";
import { useState } from "react";
import { editTodo } from "../actions";
import Form from "./Form";

const List = (props) => {
  ///EDITING TODO SECTION//
  const [edit, setEdit] = useState({
    id: null,
    text: "",
  });

  const onEditChange = (event) => {
    setEdit({
      id: edit.id,
      text: event.target.value,
    });
  };

  const onEditSubmit = (event) => {
    event.preventDefault();
    setEdit({
      id: null,
      value: "",
    });

    if (edit.text !== "") {
      props.editTodo(edit.id, edit.text);
    }
  };

  //show form when clicking edit
  if (edit.id) {
    return (
      //passing new functions and value for edit form
      <Form
        onEditChange={onEditChange}
        onEditSubmit={onEditSubmit}
        editValue={edit}
      />
    );
  }

  const renderList = () => {
    //nested data structure - took me a while to solve, there is "todo" array with objects inside
    //__proto__: Object => I need an array for mapping, otherwise error: "todoArray.map is not function". Therefore using Object.values() method
    let todoArray = Object.values(props.todos);
    const mapArray = todoArray.map((item) => {
      //mapping again to get access to object properties "text" and "id", __proto__: Array when console.log(item)
      const getObjectProps = item.map((el) => {
        const renderButton = () => {
          if (el.id) {
            return (
              <div key={el.id} className="editDeleteBtn">
                <button
                  id="deleteBtn"
                  onClick={() => props.onDeleteClick(el.id)}
                >
                  Delete
                </button>
                <button
                  id="editBtn"
                  onClick={() => setEdit({ id: el.id, text: el.text })}
                >
                  Edit
                </button>
              </div>
            );
          }
        };
        return (
          <div className="todoListContainer">
            <div key={el.id}>
              <p>{el.text}</p>
            </div>
            <div>{renderButton()}</div>
          </div>
        );
      });
      return getObjectProps;
    });

    return mapArray;
  };

  return (
    <div>
      <div>{renderList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { editTodo })(List);
