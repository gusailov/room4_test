import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Grid } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { TracksSearchResult } from './TracksSearchResult';
import { AlbumsSearchResult } from './AlbumsSearchResult';
import { PlaylistsSearchResult } from './PlaylistsSearchResult';
import { ArtistsSearchResult } from './ArtistsSearchResult';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}




const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export const MoreResultsPage = ({ query }) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Tracks" index={0} />
                    <Tab label="Albums" index={1} />
                    <Tab label="Playlists" index={2} />
                    <Tab label="Artists" index={3} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <Grid item> <TracksSearchResult query={query} title={"Tracks"} /> </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid item> <AlbumsSearchResult query={query} title={"Albums"} /> </Grid>

            </TabPanel>
            <TabPanel value={value} index={2}>
                <Grid item> <PlaylistsSearchResult query={query} title={"Playlists"} /> </Grid>
            </TabPanel>
            <TabPanel value={value} index={3}>
                <Grid item> <ArtistsSearchResult query={query} title={"Artists"} /> </Grid>
            </TabPanel>
        </div>
    );
}