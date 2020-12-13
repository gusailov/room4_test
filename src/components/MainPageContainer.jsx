import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Grid, Typography, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTopTracks } from "../redux/main_page-reduser";
import { getArtistInfo } from "../redux/artist_page-reduser";
import MainPageListItem from './MainPageListItem';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        backgroundColor: theme.palette.background.paper,
    },

}));
function MainPageContainer(props) {
    useEffect(() => {
        props.getTopTracks();
    }, []);
    const classes = useStyles();

    const tracks = props.mainPage.tracks;


    return (
        <div>
            <Typography gutterBottom variant="h5" component="h2">
                Best Tracks
            </Typography>
            <Grid container spacing={1} justify={'space-evenly'}>
                <List className={classes.root}>
                    {!tracks.length ?
                        <div>Loading...</div>
                        :

                        tracks.map((track) =>

                            < MainPageListItem key={track.url} name={track.name} artist_name={track.artist.name} artist_url={track.artist.url} img={track.image[1]} />
                        )

                    }
                </List>
            </Grid>
        </div >
    );
}
const mapStateToProps = (state) => {
    return {
        mainPage: state.mainPage,
    };
};
export default connect(mapStateToProps, { getTopTracks, getArtistInfo })(MainPageContainer)