import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { Grid, Typography, List } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getTopTracks } from "../redux/main_page-reduser";
import { getArtistInfo } from "../redux/artist_page-reduser";
import MainPageListItem from './MainPageListItem';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },

}));

function MainPageContainer(props) {
    console.log('MainPageContainer(props', props);
    const [page, setPage] = React.useState(1);
    const getTopTracks = props.getTopTracks
    useEffect(() => {
        getTopTracks(page);
    }, [getTopTracks, page]);
    const classes = useStyles();
    const tracks = props.tracks;
    const pages = Number(props.pages)
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (

        <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
            <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                    Best Tracks
            </Typography>
                <Pagination count={pages} page={page} onChange={handleChange} />
            </Grid>
            <Grid item>
                <List className={classes.root}>
                    {props.isFetching ?
                        <div>Loading...</div>
                        :
                        tracks.map((track) =>
                            < MainPageListItem key={track.id} name={track.title} artist_name={track.user.name} artist_url={track.user.tracklist} img={track.picture_small} />
                        )
                    }
                </List>
            </Grid>
        </Grid>

    );
}
const mapStateToProps = (state) => {
    return {
        tracks: state.mainPage.tracks,
        isFetching: state.mainPage.isFetching,
        pages: state.mainPage.pages
    };
};
export default connect(mapStateToProps, { getTopTracks, getArtistInfo })(MainPageContainer)