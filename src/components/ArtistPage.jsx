import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import { useLocation } from "react-router-dom";

function ArtistPage(props) {
    let location = useLocation();
    useEffect(() => {
        props.getArtistInfo(location.state.location);
    }, []);
    console.log('ArtistPage', props);
    console.log('ArtistPage location', location.state.location);
    return (
        <div>
            <NavLink to={'/ '}>
                HOME
            </NavLink>
            <div>artistPage</div>


        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        artist: state,
    };
};
export default connect(mapStateToProps, { getArtistInfo })(ArtistPage)