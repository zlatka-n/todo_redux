//TODO: mapStateToProps => store, listing todos
import React from "react";
import { connect } from "react-redux";

const List = (props) => {
  const renderList = () => {
    console.log(props.todoValues);

    return props.todoValues.map((item) => {
      return (
        <div key={item.todos.id}>
          <div>{item.todos.text}</div>
        </div>
      );
    });
  };

  return (
    <div>
      <div>{renderList()}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todoValues: state.todos,
  };
};

export default connect(mapStateToProps)(List);
