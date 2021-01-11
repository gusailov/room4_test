import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import { NavLink } from "react-router-dom";
import { Image } from './Image';

const useStyles = makeStyles({
    link: {
        height: 100,
    },
});

export const SliderItem = ({ item, img, title, rounded }) => {
    const classes = useStyles();

    return (
        <Grid item xs={2}>
            <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
                <Grid item>
                    <NavLink to={`/playlist/${item.id} `}>
                        <Image img={img}
                            title={title}
                            size={'100%'}
                            rounded={rounded}
                        />
                    </NavLink>
                </Grid >
                <Grid item className={classes.link} >
                    <NavLink to={`/playlist/${item.id} `}> {title} </NavLink>
                </Grid>
            </Grid >
        </Grid >
    );
}

