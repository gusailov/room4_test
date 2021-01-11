import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Paper, Typography, CardMedia, Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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
    console.log('TracksSearchResult', tracks);
    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                <NavLink to={`/artist/${query} `}> {title}...</NavLink>
            </Typography>
            <TracklistTable tracks={tracks} />
        </div>
    );
}