import React from "react";
import useFetch from "react-fetch-hook";

import "./App.css";

// This double-fetchs on 18.
function App() {
  const { data } = useFetch("/people.json");
  return (
    <div className="App">
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
