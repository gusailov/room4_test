import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Link, CardActionArea, CardContent, CardMedia, Typography } from '@material-ui/core';
import { NavLink } from "react-router-dom";




const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function MainPageListItem(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={props.img['#text']}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="p">
                        {props.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <NavLink
                            to={{
                                pathname: `/artist/${props.artist_name}`,
                                state: { location: props.artist_name }


                            }}>
                            {props.artist_name}
                        </NavLink>

                    </Typography>
                    <Link href={props.artist_url} >
                        Link
  </Link>

                </CardContent>
            </CardActionArea>

        </Card>
    );
}