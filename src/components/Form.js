import React from "react";

class Form extends React.Component {
  //onSubmit, action dispatcher ADD_TODO, store => mapping in component List.js

  render() {
    return (
      <div className="addForm">
        <form onSubmit={this.props.onSubmitForm}>
          <input
            onChange={this.props.onInputChange}
            value={this.props.input.text}
          ></input>
          <button className="addBtn">Add</button>
        </form>
        {/* <button className="addBtn">Add</button> */}
      </div>
    );
  }
}

export default Form;
