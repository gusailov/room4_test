import React from 'react';
import { IconButton, Typography, ListItemText, Avatar, ListItemAvatar, ListItem, Paper, Grid } from '@material-ui/core';
import Album from '@material-ui/icons/Album';
import { NavLink } from "react-router-dom";


function MainPageListItem(props) {

    const artistName = props.artist_name

    return (
        <div>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <Paper >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={`${artistName} - ${props.name}`} src={props.img} title={`${artistName} - ${props.name}`} />
                            </ListItemAvatar>
                            <ListItemText primary={
                                <Typography color="textPrimary"  >
                                    {props.name}
                                </Typography>
                            }
                                secondary={
                                    <NavLink to={{ pathname: `/artist/${artistName}`, state: { artistName } }}>
                                        {artistName}
                                    </NavLink>
                                }
                            />
                            <IconButton href={props.artist_url} >
                                <Album />
                            </IconButton>
                        </ListItem>
                    </Paper>
                </Grid>

            </Grid>
        </div>
    );
}

export default MainPageListItem;