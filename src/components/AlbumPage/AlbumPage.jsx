import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistInfo } from "../../redux/artist_page-reducer";
import { Card, Grid, List } from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,

    },
    background: {
        height: '30vh',
        width: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

}));


export const AlbumPage = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const params = useParams()
    console.log('AlbumPage params', params);

    useEffect(() => {
        dispatch(getArtistInfo(params.albumId))

    }, [getArtistInfo, params])


    return (
        <div >
            Album Page
        </div >


    )
}


