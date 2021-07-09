//TODO: mapStateToProps => store, listing todos
import React from "react";
import { connect } from "react-redux";
import { deleteTodo } from "../actions/index";

const List = (props) => {
  //delete item onClick

  const deleteItem = (id) => {
    props.deleteTodo(id);
    console.log("delete");
    console.log(id);
  };

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
              <div className="editDeleteBtn">
                <button onClick={() => deleteItem(el.id)}>Delete</button>
                <button>Edit</button>
              </div>
            );
          }
        };
        return (
          <div className="todoListContainer">
            <div>
              <p key={el.id}>
                {el.text} {el.id}
              </p>
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

export default connect(mapStateToProps, { deleteTodo })(List);
