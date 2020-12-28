import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTopTracks } from "../../redux/home_page-reduser";
import { HomePageListItem } from './HomePageListItem';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

}));

export const HomePageContainer = (props) => {


    const isFetching = useSelector(state => state.mainPage.isFetching)
    const mainPage = useSelector(state => state.mainPage)

    const classes = useStyles();
    const dispatch = useDispatch()

    const querry = props.title
    useEffect(() => {
        console.log('querry', querry);
        dispatch(getTopTracks(querry));
    }, [dispatch, querry]);
    console.log('mainPage', mainPage);
    const tracks = useSelector(state => state.mainPage.tracks);


    return (

        <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
            <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                    {props.title}
                </Typography>

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
