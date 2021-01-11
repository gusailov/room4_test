import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getSearchResult } from "../../redux/search_page-reducer";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TracksSearchResult } from './TracksSearchResult'
import * as queryString from 'querystring'
import { AlbumsSearchResult } from './AlbumsSearchResult';
import { PlaylistsSearchResult } from './PlaylistsSearchResult';
import { ArtistsSearchResult } from './ArtistsSearchResult';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        backgroundColor: theme.palette.background.paper,
    },

}));

export const SearchResultPageContainer = () => {
    const { isFetching } = useSelector(state => state.searchPage)
    const dispatch = useDispatch()
    const location = useLocation()
    const query = queryString.parse(location.search.substr(1)).query
    console.log('query', queryString.parse(location.search.substr(1)));

    useEffect(() => {
        dispatch(getSearchResult(query))
    }, [query, dispatch])

    return (
        <div>
            {
                isFetching ?
                    <div>Loading...</div>
                    :
                    <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                        <Grid item>
                            <Typography gutterBottom variant="h5" component="h2">Search Results </Typography>
                        </Grid>
                        <Grid item> <TracksSearchResult query={query} title={"Tracks"} /> </Grid>
                        <Grid item> <AlbumsSearchResult query={query} title={"Albums"} /> </Grid>
                        <Grid item> <PlaylistsSearchResult query={query} title={"Playlists"} /> </Grid>
                        <Grid item> <ArtistsSearchResult query={query} title={"Artists"} /> </Grid>
                    </Grid>
            }</div>


    )
}
