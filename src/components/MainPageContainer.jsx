import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Grid, Typography } from '@material-ui/core';
import { getTopTracks } from "../redux/main_page-reduser";
import { getArtistInfo } from "../redux/artist_page-reduser";
import MainPageListItem from './MainPageListItem';
import { useHistory } from "react-router-dom";


function MainPageContainer(props) {
    useEffect(() => {
        props.getTopTracks();
    }, []);
    let history = useHistory();
    const tracks = props.mainPage.tracks;

    const handleClick = (artist) => {
        props.getArtistInfo(artist)
        history.push(`/artist/${artist}`);
    }
    return (
        <div>
            <Typography gutterBottom variant="h5" component="h2">
                Best Tracks
            </Typography>
            <Grid container spacing={1} justify={'space-evenly'}>
                {!tracks.length ?
                    <div>Loading...</div>
                    :

                    tracks.map((track) =>
                        <Grid key={track.url} item xs={6} sm={4} md={2}>
                            < MainPageListItem handleClick={handleClick} name={track.name} artist_name={track.artist.name} artist_url={track.artist.url} img={track.image[1]} />
                        </Grid>)

                }
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