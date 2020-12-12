import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";
import { useLocation, useParams, useRouteMatch } from "react-router-dom";

function ArtistPage(props) {
    const location = useLocation();
    const artistName = location.state.artistName;

    useEffect(() => {
        if (artistName) {

            props.getArtistInfo(artistName);
        }

    }, [artistName]);

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