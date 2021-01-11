import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getSearchResult } from "../../redux/search_page-reducer";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Home from '@material-ui/icons/Home';
import { NavLink, useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',

    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },

}));
export const NavBar = () => {
    const dispatch = useDispatch()
    const [value, setValue] = useState("");
    const handleChange = ({ target }) => setValue(target.value);
    const classes = useStyles();
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!value) {
            return
        }
        history.push({
            pathname: '/search',
            search: `query=${value}`
        });
        dispatch(getSearchResult(value))
        // setValue(" ");
    }

    return (
        <Paper component="form" className={classes.root} onSubmit={handleSubmit}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <NavLink to={'/'}>
                    <Home />
                </NavLink>
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search Track"
                onChange={handleChange}
                value={value}
            />
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
        </Paper>
    )
}
