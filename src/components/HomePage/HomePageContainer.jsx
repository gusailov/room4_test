import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTopTracks } from "../../redux/main_page-reduser";
import { HomePageListItem } from './HomePageListItem';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

}));

export const HomePageContainer = (props) => {


    const isFetching = useSelector(state => state.mainPage.isFetching)
    const mainPage = useSelector(state => state.mainPage)
    const pages = Number(useSelector(state => state.mainPage.pages))
    const classes = useStyles();
    const dispatch = useDispatch()
    const [page, setPage] = React.useState(1);
    const querry = props.title
    useEffect(() => {
        console.log('querry', querry);
        dispatch(getTopTracks(querry, page));
    }, [dispatch, page, querry]);
    console.log('mainPage', mainPage);
    const tracks = useSelector(state => state.mainPage.tracks);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (

        <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
            <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>
                <Pagination count={pages} page={page} onChange={handleChange} />
            </Grid>
            <Grid item>
                <List className={classes.root}>
                    {isFetching ?
                        <div>Loading...</div>
                        :
                        tracks.map((track) =>
                            < HomePageListItem key={track.id} name={track.title} artist_name={track.user.name} artist_url={track.user.tracklist} img={track.picture_small} />
                        )
                    }
                </List>
            </Grid>
        </Grid>

    );
}
