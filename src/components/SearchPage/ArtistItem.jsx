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

export const ArtistItem = ({ artist }) => {
    const classes = useStyles();

    return (

        <Grid item xs={2}>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <NavLink to={`/artist/${artist.id} `}>
                        <Paper elevation={3} className={classes.media}>
                            <CardMedia
                                className={classes.media}
                                image={artist.picture_big}
                                title={artist.name}
                            />
                        </Paper> </NavLink>
                </Grid >
                <NavLink to={`/artist/${artist.id} `}> {artist.name} </NavLink>
            </Grid >
        </Grid >

    );
}

