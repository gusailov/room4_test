import React from 'react';
import { IconButton, Typography, ListItemText, Avatar, ListItemAvatar, ListItem, Paper, Grid } from '@material-ui/core';
import Album from '@material-ui/icons/Album';
import { NavLink } from "react-router-dom";


export function HomePageListItem(props) {

    const list = props.list

    return (
        <div>

            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <Paper >
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={list.title} src={list.picture_big} title={list.title} />
                            </ListItemAvatar>
                            <ListItemText primary={
                                <Typography color="textPrimary"  >
                                    {list.title}
                                </Typography>
                            }
                            // secondary={
                            //     <NavLink to={{ pathname: `/artist/${artistName}`, state: { artistName } }}>
                            //         {artistName}
                            //     </NavLink>
                            // }
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

