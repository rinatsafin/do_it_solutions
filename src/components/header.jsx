import React, { Component } from "react";
import "../css/style.css";
// import "./playground";

export default class Header extends Component {
  // cpnstructor(props) {
  //   super(props);
  //   this.state = {
  //     keywords: "Hello"
  //   }
  // }
  state = { 
    title: "The keywords are:",
    keywords: ""
  }

  inputChangeHandler = (event) => {
    // console.log(event.target.value);
    this.setState({
      keywords: event.target.value
    });
  }
  render() {
    console.log(this.state.keywords);
    return (
      <header>
        <div className="logo">
            LOGO
        </div>
        <input 
          type="text" 
          onChange={ this.inputChangeHandler }
        />
        <div className="text">{this.state.title}</div>
        <div className="text">{this.state.keywords}</div>
      </header>
    );
  }
}