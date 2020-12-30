import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Typography, ListItemText, Avatar, ListItemAvatar, ListItem, Paper, Grid } from '@material-ui/core';
import Album from '@material-ui/icons/Album';
import { NavLink } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles({
    root: {
        //maxWidth: 345,
        height: '100%',
    },
    media: {
        height: 140,
    },
});

export function HomePageListItem(props) {
    const classes = useStyles();
    const list = props.list
    console.log('HomePageListItem list', list);
    return (
        <Grid item xs={8}>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <div className={classes.root}>
                    <Paper >
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    className={classes.media}
                                    image={list.picture_big}
                                    title={list.title}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {list.title}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {list.title}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
        </Button>
                                <Button size="small" color="primary">
                                    Learn More
        </Button>
                            </CardActions>
                        </Card>
                    </Paper>
                </div>
            </Grid >

        </Grid>
    );
}

