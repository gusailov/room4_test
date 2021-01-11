import React from 'react';
import { useSelector } from "react-redux";
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { SliderItem } from './../Common/SliderItem';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        //  height: '35vh',
    },

    indicator: {
        opacity: 0,
    },
    disabled: {
        color: 'red',
    },
    sliderrrr: {
        display: 'flex',
        alignItems: 'center'

    }
}));

export const ArtistsSearchResult = ({ query, title }) => {
    const classes = useStyles();
    const { artists } = useSelector(state => state.searchPage)
    console.log('ArtistsSearchResult', artists);

    return (

        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                <NavLink to={`/artist/${query} `}> {title}...</NavLink>
            </Typography>
            <Grid container spacing={1} justify={'space-evenly'} direction={"row"}>
                {artists.map((artist) => <SliderItem rounded key={artist.id} item={artist} img={artist.picture_big} title={artist.name} />)}
            </Grid >
        </div>

    );
}