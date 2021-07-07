import React from "react";
import Form from "./Form";
import { connect } from "react-redux";
import List from "./List";
import { addTodo } from "../actions/index.js";

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

    this.props.addTodo(this.state.input.text);
  };

  render() {
    return (
      <div className="todo-box">
        <h2>Main</h2>
        <Form
          onInputChange={this.onInputChange}
          input={this.state.input}
          onSubmitForm={this.onSubmitForm}
        />
        <List />
        {/* {this.renderList()} */}
      </div>
    );
  }
}

export default connect(null, { addTodo })(Main);
