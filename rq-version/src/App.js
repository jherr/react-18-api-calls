import React, { useEffect, useState } from "react";

import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    fetch("/people.json", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then(setPeople);
    return () => controller.abort();
  }, []);

  return (
    <div className="App">
      <div>{JSON.stringify(people)}</div>
    </div>
  );
}

export default App;
