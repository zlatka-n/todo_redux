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

  renderList = () => {
    //nested data structure - took me a while to solve, there is "todo" array with objects inside
    //__proto__: Object => I need an array for mapping, otherwise error: "todoArray.map is not function". Therefore using Object.values() method
    let todoArray = Object.values(this.props.todos);
    const mapArray = todoArray.map((item) => {
      //mapping again to get access to object properties "text" and "id", __proto__: Array when console.log(item)
      const getObjectProps = item.map((el) => {
        // console.log(el);
        return <p key={el.id}>{el.text}</p>;
      });
      return getObjectProps;
    });

    return mapArray;
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
        {/* <List todoObject={this.props.todos} /> */}
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo })(Main);
