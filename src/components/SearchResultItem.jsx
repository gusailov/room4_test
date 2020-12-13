import React from 'react';
import { IconButton, Typography, Divider, ListItemText, Avatar, ListItemAvatar, ListItem } from '@material-ui/core';
import Album from '@material-ui/icons/Album';
import { NavLink } from "react-router-dom";


function SearchResultItem(props) {



    return (
        <div>

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
            <Divider variant="inset" component="li" />

        </div>
    );
}

export default SearchResultItem;