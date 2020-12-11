import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ArtistPage from "./components/ArtistPage";
import MainPageContainer from "./components/MainPageContainer";

function App(props) {
  return (
    <div className="App">
      <div>
        <Switch>
          <Route path="/artist">
            <ArtistPage />
          </Route>
          <Route path="/search">
            <div>search</div>
          </Route>
          <Route path="/">
            <MainPageContainer />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
