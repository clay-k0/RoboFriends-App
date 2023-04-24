import React, { useState, useEffect } from "react";
import CardList from "../components/card-list/card-list.component";
import SearchBox from "../components/search-box/search-box.component";
import Scroll from "../components/scroll/scroll.component";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [robots, setRobots] = useState([]);
  const [filteredRobots, setFilteredRobots] = useState(robots);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  useEffect(() => {
    const newFilteredRobots = robots.filter((robot) => {
      return (
        robot.name.toLowerCase().includes(searchField) ||
        robot.email.toLowerCase().includes(searchField) ||
        robot.username.toLowerCase().includes(searchField)
      );
    });

    setFilteredRobots(newFilteredRobots);
  }, [robots, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return robots.length ? (
    <div className="tc">
      <h1 className="f1">RoboFriends</h1>
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        <ErrorBoundary>
          <CardList robots={filteredRobots} />
        </ErrorBoundary>
      </Scroll>
    </div>
  ) : (
    <h1 className="tc">Loading...</h1>
  );
};

export default App;
