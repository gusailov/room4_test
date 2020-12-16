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

    const [page, setPage] = React.useState(1);
    const getTopTracks = props.getTopTracks
    useEffect(() => {
        getTopTracks(page);
    }, [getTopTracks, page]);
    const classes = useStyles();
    const tracks = props.mainPage.tracks.data;
    const pages = Number(props.mainPage.pages)
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
                    {!tracks ?
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
        mainPage: state.mainPage,
    };
};
export default connect(mapStateToProps, { getTopTracks, getArtistInfo })(MainPageContainer)