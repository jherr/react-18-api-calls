import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";

import "./App.css";

function App() {
  const { data } = useQuery("people", () =>
    fetch("/people.json").then((res) => res.json())
  );

  return (
    <div className="App">
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

const AppWithProvider = () => (
  <QueryClientProvider client={new QueryClient()}>
    <App />
  </QueryClientProvider>
);

export default AppWithProvider;
