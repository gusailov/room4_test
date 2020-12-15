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

    const params = useParams()
    const classes = useStyles();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const pages = Number(props.search.pages)
    const getSearchResult = props.getSearchResult
    useEffect(() => {
        getSearchResult(params.value, page)

    }, [getSearchResult, page, params])
    const result = props.search.result;

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
                    {!result.length ?
                        <div>Loading...</div>
                        :
                        result.map((res) =>
                            < SearchResultItem key={res.url} url={res.url} track={res.name} artist={res.artist} />
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