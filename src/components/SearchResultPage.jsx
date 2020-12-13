import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import { getSearchResult } from "../redux/search_page-reduser";


function SearchResultPage(props) {
    const location = useLocation()
    const params = useParams()
    console.log('SearchResultPage location', location);
    console.log('SearchResultPage Params', params);

    useEffect(() => {
        props.getSearchResult(params.value)

    }, [])
    console.log('SearchResultPage', props);
    return (
        <div>

            <div>SearchResult</div>
            <div>SearchResult</div>


        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        search: state.searchPage,
    };
};
export default connect(mapStateToProps, { getSearchResult })(SearchResultPage)