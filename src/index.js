import React, { Component } from "react";
import ReactDOM from "react-dom";
// db
import JSON from "./db.json";
// COMPONENTS
import Header from "./components/header";
import NewsList from "./components/news_list";

class App extends Component {
  
  state = {
    news: JSON,
    filtered: []
  };

  getKeword = (event) => {
    let keyWord = event.target.value;
    let filtered = this.state.news.filter((item) => {
      return item.title.indexOf(keyWord) > -1;
    });
    this.setState({
      filtered
    });
    //console.log(filtered);
  };

  render() {
    let newsFiltered = this.state.filtered;
    let newsWhole = this.state.news;
    return (
      <div>
        <Header keywords={this.getKeword} />
        <NewsList news={newsFiltered.length === 0 ? newsWhole : newsFiltered}>
          <h2>
            The news are:
          </h2>
        </NewsList>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));