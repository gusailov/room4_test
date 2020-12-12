import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import { useLocation } from "react-router-dom";

function SearchPage(props) {


    return (
        <div>

            <div>Search</div>


        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        artist: state.artistPage,
    };
};
export default connect(mapStateToProps, { getArtistInfo })(SearchPage)