import React, { useEffect, useState } from "react";

import "./App.css";

const peoplePromise = fetch("/people.json").then((res) => res.json());

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    peoplePromise.then(setPeople);
  }, []);

  return (
    <div className="App">
      <div>{JSON.stringify(people)}</div>
    </div>
  );
}

export default App;
