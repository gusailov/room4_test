import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useHistory } from "react-router-dom";
import { getSearchResult } from "../../redux/search_page-reducer";
import { Button, Grid, Typography, Paper, Tabs, Tab } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { TracksSearchResult } from './TracksSearchResult'
import { AlbumsSearchResult } from './AlbumsSearchResult';
import { PlaylistsSearchResult } from './PlaylistsSearchResult';
import { ArtistsSearchResult } from './ArtistsSearchResult';
import { MoreResultsPage } from './MoreResultsPage';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export const SearchResultPageContainer = () => {
    let queryString = useQuery();

    const query = queryString.get('query')
    const lim = queryString.get('limit')
    console.log('query', queryString.get('query'));
    console.log('limit', queryString.get('limit'));

    const [limit, setLimit] = useState('')
    const { isFetching } = useSelector(state => state.searchPage)
    const dispatch = useDispatch()


    useEffect(() => {
        setLimit(lim)
    }, [lim])
    useEffect(() => {
        dispatch(getSearchResult(query, limit))
    }, [query, dispatch, limit])
    const history = useHistory();

    const handleClick = () => {
        let l
        limit === "5" ? l = '20' : l = '5'
        console.log('handleClick', l);
        setLimit(l)
        history.push({
            pathname: '/search',
            search: `query=${query}&limit=${l}`
        });
    }


    return (
        <div>
            {isFetching ?
                <div>Loading...</div>
                :
                limit === "5" ?
                    <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                        <Grid item>
                            <Typography gutterBottom variant="h5" component="h2">Search Results </Typography>
                            <Button onClick={handleClick} value={5}>More </Button >
                        </Grid>
                        <Grid item> <TracksSearchResult query={query} title={"Tracks"} /> </Grid>
                        <Grid item> <AlbumsSearchResult query={query} title={"Albums"} /> </Grid>
                        <Grid item> <PlaylistsSearchResult query={query} title={"Playlists"} /> </Grid>
                        <Grid item> <ArtistsSearchResult query={query} title={"Artists"} /> </Grid>
                    </Grid>
                    : <>
                        <Button onClick={handleClick}>Less </Button >

                        <MoreResultsPage query={query} />

                    </>
            }</div>


    )
}
