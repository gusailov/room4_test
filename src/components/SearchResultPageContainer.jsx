import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { getSearchResult } from "../redux/search_page-reduser";
import { Grid, List, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SearchResultItem from './SearchResultItem'
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',

        backgroundColor: theme.palette.background.paper,
    },

}));

function SearchResultPageContainer(props) {
    console.log('SearchResultPageContainer', props.search.result.data);
    const params = useParams()
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    console.log('SearchResultPageContainer params.value', params.value);
    const pages = Number(props.search.pages)
    useEffect(() => {
        props.getSearchResult(params.value, page)

    }, [page])
    const result = props.search.result.data;

    return (
        <Grid container spacing={1} justify={'space-evenly'} direction={"column"}>
            <Grid item>
                <Typography gutterBottom variant="h5" component="h2">
                    Search Results
            </Typography>
                <Pagination
                    count={pages}
                    page={page} onChange={handleChange} />
            </Grid>
            <Grid item>
                <List className={classes.root}>
                    {!result ?
                        <div>Loading...</div>
                        :
                        result.map((res) =>
                            < SearchResultItem key={res.id} url={res.link} track={res.title} mp3={res.preview} artist={res.artist.name} artist_id={res.artist.id} />
                        )
                    }
                </List>

            </Grid>

        </Grid>

    )
}
const mapStateToProps = (state) => {
    return {
        search: state.searchPage,
    };
};
export default connect(mapStateToProps, { getSearchResult })(SearchResultPageContainer)