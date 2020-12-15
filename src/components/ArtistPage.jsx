import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import { Card, Grid } from '@material-ui/core/';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
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
    const location = useLocation()
    const params = useParams()
    console.log('ArtistPage ', params.artistName);
    const getArtistInfo = props.getArtistInfo
    useEffect(() => {
        getArtistInfo(params.artistName)

    }, [getArtistInfo, params])
    const artist = props.artist.artist
    console.log('ArtistPage artist', artist);

    return (<div >
        {!artist ?
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
            </div >

        } </div >
    )
}
const mapStateToProps = (state) => {
    return {
        artist: state.artistPage,
    };
};
export default connect(mapStateToProps, { getArtistInfo })(ArtistPage)

