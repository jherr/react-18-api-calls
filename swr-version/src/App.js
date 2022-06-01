import React from "react";
import { useAsync } from "react-async-hook";

import "./App.css";

const fetchPeople = async () => (await fetch(`/people.json`)).json();

// This double-fetchs on 18.
function App() {
  const { result } = useAsync(fetchPeople, []);
  return (
    <div className="App">
      <div>{JSON.stringify(result)}</div>
    </div>
  );
}

export default App;
