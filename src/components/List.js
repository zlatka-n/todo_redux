//TODO: mapStateToProps => store, listing todos
import React from "react";
import { connect } from "react-redux";

const List = (props) => {
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
                <button id="deleteBtn">Delete</button>
                <button id="editBtn">Edit</button>
              </div>
            );
          }
        };
        return (
          <div className="todoListContainer">
            <div>
              <p key={el.id}>{el.text}</p>
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

export default connect(mapStateToProps)(List);
