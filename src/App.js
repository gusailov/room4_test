import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Grid } from "@material-ui/core";
import { HomePage } from "./components/HomePage/HomePage";
import { SearchResultPageContainer } from "./components/SearchPage/SearchResultPageContainer";
import { AlbumPage } from "./components/AlbumPage/AlbumPage";
import { PlaylistPage } from "./components/PlaylistPage/PlaylistPage";
import { ArtistPage } from "./components/ArtistPage/ArtistPage";
import { NavBar } from "./components/Common/NavBar";

function App(props) {
  return (
    <div className="App">
      <Grid container direction={"column"} spacing={1} justify={"space-evenly"}>
        <Grid item>
          <NavBar />
        </Grid>
        <Grid item xs={12}>
          <Switch>
            <Route path="/artist/:artistId?">
              <ArtistPage />
            </Route>
            <Route path="/playlist/:playlistId?">
              <PlaylistPage />
            </Route>
            <Route path="/album/:albumId?">
              <AlbumPage />
            </Route>
            <Route path="/search/">
              <SearchResultPageContainer />
            </Route>
            {/* <Route path="/search/:title/:query">
              <SearchResultPageContainer />
            </Route> */}
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
