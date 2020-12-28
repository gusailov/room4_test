import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { HomePageListItem } from './HomePageListItem';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

}));

export const HomePageContainer = (props) => {
    const classes = useStyles();
    const { lists, title } = props

    return (

        <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
            <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>

            </Grid>
            <Grid item>
                <List className={classes.root}>
                    {
                        lists.map((list) =>
                            < HomePageListItem key={list.id} list={list} />)

                    }
                </List>
            </Grid>

        </Grid>

    );
}
