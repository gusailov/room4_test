import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Grid } from "@material-ui/core";
import ArtistPage from "./components/ArtistPage";
import MainPageContainer from "./components/MainPageContainer";
import SearchPage from "./components/SearchPage";
import SearchResultPageContainer from "./components/SearchResultPageContainer";

function App(props) {
  return (
    <div className="App">
      <div>
        <Grid
          container
          direction={"column"}
          spacing={1}
          justify={"space-evenly"}
        >
          <Grid item>
            <SearchPage />
          </Grid>
          <Grid item>
            <Switch>
              <Route path="/artist/:artistName?">
                <ArtistPage />
              </Route>
              <Route path="/search/:value?">
                <SearchResultPageContainer />
              </Route>
              <Route path="/">
                <MainPageContainer />
              </Route>
            </Switch>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
