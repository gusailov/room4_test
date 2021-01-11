import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Typography } from '@material-ui/core';
import { TracklistTable } from './../Common/TracklistTable';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    media: {
        height: 50,
        width: 50
    },
});



export const TracksSearchResult = ({ title, query }) => {
    const classes = useStyles();
    const { tracks } = useSelector(state => state.searchPage)
    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                <NavLink to={`/search/${title}/${query} `}> {title}...</NavLink>
            </Typography>
            <TracklistTable tracks={tracks} />
        </div>
    );
}