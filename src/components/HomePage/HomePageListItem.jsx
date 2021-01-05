import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, CardMedia } from '@material-ui/core';
import { NavLink } from "react-router-dom";

const useStyles = makeStyles({
    media: {
        height: 200,
    },
});

export function HomePageListItem(props) {
    const classes = useStyles();
    const list = props.list

    return (
        <Grid item xs={10} className={classes.root}>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <NavLink to={`/playlist/${list.id} `}>
                        <Paper elevation={3} >
                            <CardMedia
                                className={classes.media}
                                image={list.picture_big}
                                title={list.title}
                            />
                        </Paper> </NavLink>
                </Grid >
                <NavLink to={`/playlist/${list.id} `}> {list.title} </NavLink>


            </Grid >

        </Grid>
    );
}

