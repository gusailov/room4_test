import React from 'react';
import { IconButton, Typography, Divider, ListItemText, ListItem } from '@material-ui/core';
import Album from '@material-ui/icons/Album';



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