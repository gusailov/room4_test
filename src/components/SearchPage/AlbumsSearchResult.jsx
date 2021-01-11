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



export const AlbumsSearchResult = ({ query, title }) => {

    const classes = useStyles();
    const { albums } = useSelector(state => state.searchPage)
    console.log('AlbumsSearchResult', albums);

    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                <NavLink to={`/artist/${query} `}> {title}...</NavLink>
            </Typography>
            <Grid container spacing={1} justify={'space-evenly'} direction={"row"}>
                {albums.map((album) => <SliderItem key={album.id} item={album} img={album.cover_big} title={album.title} />)}
            </Grid >
        </div>
    );
}