import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import { useLocation } from "react-router-dom";

function SearchResultPage(props) {

    console.log('SearchResultPage', props);
    return (
        <div>
            <NavLink to={'/ '}>
                HOME
            </NavLink>
            <div>SearchResult</div>


        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        search: state.searchPage,
    };
};
export default connect(mapStateToProps)(SearchResultPage)