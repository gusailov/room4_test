import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, IconButton, CardContent, CardMedia, Typography, Button } from '@material-ui/core';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function MainPageListItem(props) {
    const classes = useStyles();
    const artistName = props.artist_name

    return (
        <Card className={classes.root}>

            <CardMedia
                className={classes.media}
                image={props.img['#text']}
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h6" component="p">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p"></Typography>

                <Button
                    onClick={() => props.handleClick(artistName)}>{artistName}
                </Button>
                <Typography variant="body2" color="textSecondary" component="p">
                    <IconButton href={props.artist_url} >
                        <PhotoCamera />
                    </IconButton>
                </Typography>


            </CardContent>
        </Card>
    );
}

export default MainPageListItem;