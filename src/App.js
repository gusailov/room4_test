import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Grid } from "@material-ui/core";
import ArtistPage from "./components/ArtistPage/ArtistPage";
import { HomePage } from "./components/HomePage/HomePage";
import { PlaylistPage } from "./components/PlaylistPage/PlaylistPage";
import SearchPage from "./components/SearchPage/SearchPage";
import SearchResultPageContainer from "./components/SearchPage/SearchResultPageContainer";

function App(props) {
  return (
    <div className="App">
      <Grid container direction={"column"} spacing={1} justify={"space-evenly"}>
        <Grid item>
          <SearchPage />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route path="/artist/:artistName?">
              <ArtistPage />
            </Route>
            <Route path="/playlist/:playlistId?">
              <PlaylistPage />
            </Route>
            <Route path="/search/:value?">
              <SearchResultPageContainer />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
