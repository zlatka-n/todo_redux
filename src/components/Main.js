import React from "react";
import Form from "./Form";
import { connect } from "react-redux";
import List from "./List";
import { addTodo, deleteTodo, editTodo } from "../actions/index.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: {
        text: "",
      },
    };
  }

  onInputChange = (event) => {
    this.setState({
      input: {
        text: event.target.value,
      },
    });
  };

  onSubmitForm = (event) => {
    event.preventDefault();
    this.setState({
      input: {
        text: "",
      },
    });
    if (this.state.input.text !== "") {
      this.props.addTodo(this.state.input.text);
    }
    // this.props.addTodo(this.state.input.text);
  };

  onDeleteClick = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
    return (
      <div className="todo-box">
        <h2>Add your todos :)</h2>
        <Form
          onInputChange={this.onInputChange}
          input={this.state.input}
          onSubmitForm={this.onSubmitForm}
        />
        <List
          onDeleteClick={this.onDeleteClick}
          onEditClick={this.onEditClick}
        />
      </div>
    );
  }
}

export default connect(null, { addTodo, deleteTodo, editTodo })(Main);
