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

export const AlbumItem = ({ album }) => {
    const classes = useStyles();

    return (

        <Grid item xs={2}>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <NavLink to={`/playlist/${album.id} `}>
                        <Paper elevation={3} className={classes.media}>
                            <CardMedia
                                className={classes.media}
                                image={album.cover_medium}
                                title={album.title}
                            />
                        </Paper> </NavLink>
                </Grid >
                <NavLink to={`/playlist/${album.id} `}> {album.title} </NavLink>
            </Grid >
        </Grid >

    );
}

