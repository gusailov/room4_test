import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { Paper, Grid, CardMedia, Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    media: {
        height: 100,
        width: 100
    },
});



export const PlaylistTable = ({ tracks }) => {
    const classes = useStyles();
    console.log('PlaylistTable', tracks);
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell></TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">Title</TableCell>
                        <TableCell align="right">Artist</TableCell>
                        <TableCell align="right">Album</TableCell>
                        <TableCell align="right">Play</TableCell>
                        <TableCell align="right">Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tracks.map((track) => (
                        <TableRow key={track.id}>
                            <TableCell component="th" scope="row">

                            </TableCell>
                            <TableCell align="right"><NavLink to={`/playlist/${track.id} `}>
                                <Paper elevation={3} >
                                    <CardMedia
                                        className={classes.media}
                                        image={track.album.cover_medium}
                                        title={track.title}
                                    />
                                </Paper> </NavLink></TableCell>
                            <TableCell align="right">{track.title}</TableCell>
                            <TableCell align="right">{track.artist.name}</TableCell>
                            <TableCell align="right">{track.album.title}</TableCell>
                            <TableCell align="right">{track.preview}</TableCell>
                            <TableCell align="right">{(track.duration * 0.016667).toFixed(2)}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}