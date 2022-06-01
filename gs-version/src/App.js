import React, { useEffect, useState } from "react";

import "./App.css";

const createFetch = () => {
  const fetchMap = {};
  return (url, options) => {
    if (!fetchMap[url]) {
      fetchMap[url] = fetch(url, options).then((res) => res.json());
    }
    return fetchMap[url];
  };
};
const myFetch = createFetch();

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    myFetch("/people.json").then(setPeople);
  }, []);

  return (
    <div className="App">
      <div>{JSON.stringify(people)}</div>
    </div>
  );
}

export default App;
