import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, CardMedia } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        width: '100%',
        //height: '35vh',
    },
    media: {
        height: 200,
        width: 200,
    },
    link: {
        height: 100,
    },
});

export const SliderItem = ({ item, img, title }) => {
    const classes = useStyles();

    return (
        <Grid item xs={2}>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <NavLink to={`/playlist/${item.id} `}>
                        <Paper elevation={3} className={classes.media}>
                            <CardMedia
                                className={classes.media}
                                image={img}
                                title={title}
                            />
                        </Paper> </NavLink>
                </Grid >
                <Grid item className={classes.link} >
                    <NavLink to={`/playlist/${item.id} `}> {title} </NavLink>
                </Grid>
            </Grid >
        </Grid >
    );
}

