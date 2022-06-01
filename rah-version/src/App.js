import React from "react";
import useSWR from "swr";

import "./App.css";

const fetcher = (url) => fetch(url).then((res) => res.json());

// This double-fetchs on 18.
function App() {
  const { data } = useSWR("/people.json", fetcher);
  return (
    <div className="App">
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

export default App;
