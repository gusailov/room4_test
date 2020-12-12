import React from 'react';
import { connect } from "react-redux";
import { getSearchResult } from "../redux/search_page-reduser";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useHistory } from "react-router-dom";
import SearchResultPage from './SearchResultPage';

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));
function SearchPage(props) {
    let history = useHistory();
    console.log('SearchPage(props)', props);
    const classes = useStyles();
    const handleSubmit = (e) => {
        history.push("/search");
        e.preventDefault()
        console.log('handleSubmit', e.target[0].value);
        props.getSearchResult(e.target[0].value)


    }
    return (
        <Paper component="form" className={classes.root} onSubmit={handleSubmit}>

            <InputBase
                className={classes.input}
                placeholder="Search Track"

            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>


        </Paper>
    )
}
const mapStateToProps = (state) => {
    return {
        search: state.searchPage,
    };
};
export default connect(mapStateToProps, { getSearchResult })(SearchPage)