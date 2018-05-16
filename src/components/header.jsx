import React, { Component } from "react";

export default class Header extends Component {
  render() {
    const style = {
      Header: {
        background: "#03a9f4" 
      },
      logo: {
        color: "#fff",
        fontFamily: "Anton",
        textAlign: "center"
      }
    }
    return (
      <Header>
        <div>LOGO</div>
        <input type="text" />
      </Header>
    );
  },
};