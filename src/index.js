import React from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import Header from "./components/header";
// import NewsList from "./components/new_list";

const App = () => {
  return (
    <Header />
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));