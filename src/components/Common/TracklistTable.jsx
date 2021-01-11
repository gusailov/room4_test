import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { Paper, Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Image } from './Image';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    media: {
        height: 100,
        width: 100
    },
});

export const TracklistTable = ({ tracks }) => {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="left">Title</TableCell>
                        <TableCell align="left">Artist</TableCell>
                        <TableCell align="left">Album</TableCell>
                        <TableCell align="left">Play</TableCell>
                        <TableCell align="left">Duration</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tracks.map((track) => (
                        <TableRow key={track.id}>
                            <TableCell align="left">{track.title}</TableCell>
                            <TableCell align="left"> <NavLink to={`/artist/${track.artist.id} `}>{track.artist.name}</NavLink></TableCell>
                            <TableCell align="left"><NavLink to={`/album/${track.id} `}>
                                <Paper className={classes.media} elevation={3} >
                                    <Image img={track.album.cover_medium}
                                        title={track.album.title}
                                        size={'100%'}
                                    />
                                </Paper>
                                {track.album.title}
                            </NavLink></TableCell>
                            <TableCell align="left"><audio controls src={track.preview}></audio></TableCell>
                            <TableCell align="left">{(track.duration * 0.016667).toFixed(2)}</TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}