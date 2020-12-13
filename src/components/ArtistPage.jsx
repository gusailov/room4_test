import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getArtistInfo } from "../redux/artist_page-reduser";


function ArtistPage(props) {
    const location = useLocation()
    const params = useParams()
    console.log('ArtistPage Params', params);
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