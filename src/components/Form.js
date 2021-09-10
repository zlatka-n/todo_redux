import React from "react";
import "../css/Form.css";
class Form extends React.Component {
  //onSubmit, action dispatcher ADD_TODO, store => mapping in component List.js

  render() {
    //FORM FOR EDITING TODO
    if (this.props.editValue) {
      return (
        <div className="updateForm">
          <form onSubmit={this.props.onEditSubmit}>
            <input
              className="input"
              value={this.props.editValue.text}
              onChange={this.props.onEditChange}
            ></input>
            <button className="addEditBtn">Edit</button>
          </form>
        </div>
      );
    }

    return (
      <div className="addForm">
        <form onSubmit={this.props.onSubmitForm} className="addForm">
          <input
            className="input"
            onChange={this.props.onInputChange}
            value={this.props.input.text}
          ></input>
          <button className="addEditBtn">Add</button>
        </form>
      </div>
    );
  }
}

export default Form;
