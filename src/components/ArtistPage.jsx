import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import { Card, Grid, List } from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import MainPageListItem from './MainPageListItem';

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


function ArtistPage(props) {
    const classes = useStyles();
    const params = useParams()
    console.log('ArtistPage props', props);
    console.log('ArtistPage params', params.artistName);
    const getArtistInfo = props.getArtistInfo

    useEffect(() => {
        getArtistInfo(params.artistName)

    }, [getArtistInfo, params])

    const artist = props.artist
    const tracklist = props.tracklist

    return (<div >
        {props.isFetching ?
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
                <List className={classes.root}>
                    {
                        tracklist.map((track) =>
                            < MainPageListItem key={track.id} name={track.title} artist_name={track.artist.name} artist_url={track.artist.tracklist} img={track.album.cover_medium} />
                        )
                    }
                </List>
            </div >

        } </div >
    )
}
const mapStateToProps = (state) => {
    return {
        artist: state.artistPage.artist,
        tracklist: state.artistPage.tracklist,
        isFetching: state.artistPage.isFetching,
    };
};
export default connect(mapStateToProps, { getArtistInfo })(ArtistPage)

