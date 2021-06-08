import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="*" exact component={ErrorPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
