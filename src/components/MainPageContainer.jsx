import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTopTracks } from "../redux/main_page-reduser";
import MainPageListItem from './MainPageListItem';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

}));

export function MainPageContainer() {

    const tracks = useSelector(state => state.mainPage.tracks);
    const isFetching = useSelector(state => state.mainPage.isFetching)
    const mainPage = useSelector(state => state.mainPage)
    const pages = Number(useSelector(state => state.mainPage.pages))
    const classes = useStyles();
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(1);
    console.log('mainPage', mainPage);
    useEffect(() => {
        const querry = 'new'
        dispatch(getTopTracks(querry, page));
    }, [dispatch, page]);


    const handleChange = (event, value) => {
        setPage(value);
    };

    return (

        <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
            <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                    Best Tracks
            </Typography>
                <Pagination count={pages} page={page} onChange={handleChange} />
            </Grid>
            <Grid item>
                <List className={classes.root}>
                    {isFetching ?
                        <div>Loading...</div>
                        :
                        tracks.map((track) =>
                            < MainPageListItem key={track.id} name={track.title} artist_name={track.user.name} artist_url={track.user.tracklist} img={track.picture_small} />
                        )
                    }
                </List>
            </Grid>
        </Grid>

    );
}
