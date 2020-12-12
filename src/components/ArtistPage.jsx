import React from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";


function ArtistPage(props) {

    console.log('ArtistPage', props);


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
        artist: state.artistPage,
    };
};
export default connect(mapStateToProps, { getArtistInfo })(ArtistPage)