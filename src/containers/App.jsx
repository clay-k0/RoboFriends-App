import React, { Component } from "react";
import CardList from "../components/card-list/card-list.component";
import SearchBox from "../components/search-box/search-box.component";
import Scroll from "../components/scroll/scroll.component";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return (
        robot.name.toLowerCase().includes(searchField.toLowerCase()) ||
        robot.email.toLowerCase().includes(searchField.toLowerCase()) ||
        robot.username.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    return robots.length ? (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    ) : (
      <h1 className="tc">Loading...</h1>
    );
  }
}

export default App;
