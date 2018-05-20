import React, { Component } from "react";
import "../css/style.css";

export default class Header extends Component {
  // cpnstructor(props) {
  //   super(props);
  //   this.state = {
  //     keywords: "Hello"
  //   }
  // }
  state = { 
    active: "active",
    keywords: ""
  }

  inputChangeHandler = (event) => {
    const value = event.target.value === "" ? "non-active" : "active";
    this.setState({
      active: value,
      keywords: event.target.value
    });
  }
  render() {
    /*
    const style = {
      background: "red"
    };
    if (this.state.keywords !== "") style.background = "blue";
    else style.background = "red";
    */
    
    return (
      <header className={this.state.active}>
        <div className="logo">
            LOGO
        </div>
        <input 
          type="text" 
          // if use this part not need using class and React, this part functionality methods.
          onChange={this.props.keywords}
          //onChange={this.inputChangeHandler}
        />
        <div className="text">{this.state.title}</div>
        <div className="text">{this.state.keywords}</div>
      </header>
    );
  }
}