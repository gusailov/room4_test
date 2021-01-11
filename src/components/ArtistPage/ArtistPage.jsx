import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistInfo } from "../../redux/artist_page-reducer";
import { Card, Grid, List } from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { TracklistTable } from './../Common/TracklistTable';

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


export const ArtistPage = () => {
    const { isFetching, tracklist, artist } = useSelector(state => state.artistPage)
    const dispatch = useDispatch()
    const classes = useStyles();
    const params = useParams()
    console.log('ArtistPage artist', artist);
    console.log('ArtistPage params', params.artistName);

    useEffect(() => {
        dispatch(getArtistInfo(params.artistId))

    }, [params, dispatch])



    return (<div >
        {isFetching ?
            <div>Loading...</div> :
            <div >
                <Grid item className={classes.background} style={{ backgroundImage: `url(${artist.picture_xl})` }}>
                </Grid >
                <Grid item>
                    <Typography gutterBottom variant="h5" component="h2">
                        {artist.name}
                    </Typography>
                    <Card >
                        <CardActionArea href={artist.link}>
                        </CardActionArea>

                    </Card>
                </Grid >
                <TracklistTable tracks={tracklist} />
            </div >

        } </div >
    )
}


