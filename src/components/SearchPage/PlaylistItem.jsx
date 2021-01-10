import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, CardMedia } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    media: {
        height: 200,
        width: 200,
    },
});

export const PlaylistsItem = ({ playlist }) => {
    const classes = useStyles();

    return (

        <Grid item xs={2}>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <NavLink to={`/playlist/${playlist.id} `}>
                        <Paper elevation={3} className={classes.media}>
                            <CardMedia
                                className={classes.media}
                                image={playlist.picture_big}
                                title={playlist.title}
                            />
                        </Paper> </NavLink>
                </Grid >
                <NavLink to={`/playlist/${playlist.id} `}> {playlist.title} </NavLink>
            </Grid >
        </Grid >

    );
}

