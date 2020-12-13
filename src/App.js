import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import ArtistPage from "./components/ArtistPage";
import MainPageContainer from "./components/MainPageContainer";
import SearchPage from "./components/SearchPage";
import SearchResultPageContainer from "./components/SearchResultPageContainer";

function App(props) {
  return (
    <div className="App">
      <div>
        <SearchPage />
        <Switch>
          <Route path="/artist/:artistName?">
            <ArtistPage />
          </Route>
          <Route path="/search/:value">
            <SearchResultPageContainer />
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
