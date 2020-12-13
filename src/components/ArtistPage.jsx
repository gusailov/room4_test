import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";


function ArtistPage(props) {
    const location = useLocation()

    useEffect(() => {
        props.getArtistInfo(location.state.artistName)

    }, [])

    console.log('ArtistPage props', props);
    return (
        <div>

            <div>artistPage</div>
            <div>{props.artist.artist.name}</div>


        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        artist: state.artistPage,
    };
};
export default connect(mapStateToProps, { getArtistInfo })(ArtistPage)