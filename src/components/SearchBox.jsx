import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba br-pill w-40 b--light-gray bg-light-gray tc focus-outline"
        style={{ outlineColor: "#94e6d1" }}
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
