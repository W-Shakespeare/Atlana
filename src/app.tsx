import React from "react";
import { Provider } from "./context/userList/userListContext";
import { Routes } from "./routes";

export const App = () => {
  return (
    <Provider>
      <main className="main">
        <h1>Git Hub Searcher</h1>
        <Routes />
      </main>
    </Provider>
  );
};
