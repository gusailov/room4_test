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
    // console.log('mainPage ', mainPage);
    const classes = useStyles();
    const dispatch = useDispatch()

    const querry = props.title
    const id = props.id
    useEffect(() => {
        // console.log('querry id', id);
        dispatch(getTopTracks(querry, id));
    }, [dispatch, querry, id]);

    const tracks = useSelector(state => state.mainPage.tracks.slice(1));
    console.log('mainPage tracks', tracks);


    return (

        <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
            {isFetching ?
                <div>Loading...</div>
                :
                tracks.map((track) => <div>{track.value}+{track.id}</div>)}
            {/* {isFetching ?
                <div>Loading...</div>
                :
                tracks.map((track) =>
                    <>
                        <Grid item>
                            <Typography gutterBottom variant="h5" component="h2">
                                {track.value}
                            </Typography>

                        </Grid>
                        <Grid item>
                            <List className={classes.root}>

                                < HomePageListItem key={track.id} id={track.id} track={track} />


                            </List>
                        </Grid>
                    </>
                )} */}
        </Grid>

    );
}
