import React, { useEffect, useState } from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";

const App = () => {
  const [searchfield, setSearchField] = useState("");
  const [robotes, setRobots] = useState([]);
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((resp) => resp.json())
      .then((user) => setRobots(user));
  }, []);

  const fileredRobots = robotes.filter((robot) => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase());
  });
  if (robotes.length === 0) {
    return <h1>Loading</h1>;
  } else {
    return (
      <div className="tc"> 
        <h1>Robofriends</h1>
        <SearchBox searchfield={searchfield} searchChange={onSearchChange} />
        <CardList robots={fileredRobots} />
      </div>
    );
  }
};

export default App;
