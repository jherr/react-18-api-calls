import React from "react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import "./App.css";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  tagTypes: ["People"],
  endpoints: (build) => ({
    getPeople: build.query({
      query: () => ({ url: "people.json" }),
      invalidatesTags: [{ type: "People", id: "LIST" }],
    }),
  }),
});

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

function App() {
  const { data } = api.useGetPeopleQuery({
    pollingInterval: 3000,
    refetchOnMountOrArgChange: true,
    skip: false,
  });

  return (
    <div className="App">
      <div>{JSON.stringify(data)}</div>
    </div>
  );
}

const AppWithProvider = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWithProvider;
