import React from 'react';
import { IconButton, Typography, ListItemText, ListItem, Paper, Grid } from '@material-ui/core';
import Album from '@material-ui/icons/Album';



function SearchResultItem(props) {
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
                                        artist: {props.artist}
                                    </Typography>
                                }
                            />
                            <IconButton href={props.url} >
                                <Album />
                            </IconButton>
                        </ListItem>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

export default SearchResultItem;