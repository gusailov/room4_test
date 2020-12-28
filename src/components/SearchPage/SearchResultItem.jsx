import React from 'react';
import { IconButton, Typography, ListItemText, ListItem, Paper, Grid } from '@material-ui/core';
import Album from '@material-ui/icons/Album';

import { NavLink } from "react-router-dom";

function SearchResultItem(props) {
    // console.log('SearchResultItem', props);
    const artist_id = props.artist_id
    const artistName = props.artist

    return (
        <div>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <Paper >

                        <ListItem alignItems="flex-start">
                            <ListItemText primary={
                                <Typography color="textPrimary"  >
                                    track: {props.track}
                                </Typography>
                            }
                                secondary={
                                    <Typography color="textSecondary" component={'p'}>
                                        artist: <NavLink to={{ pathname: `/artist/${artist_id}`, state: { artist_id } }}>
                                            {props.artist}
                                        </NavLink>
                                    </Typography>
                                }
                            />
                            <IconButton href={props.url} >
                                <Album />
                            </IconButton>
                        </ListItem>
                        <audio
                            controls
                            src={props.mp3}>
                        </audio>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default SearchResultItem;