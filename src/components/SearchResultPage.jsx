import React from 'react';
import { connect } from "react-redux";




function SearchResultPage(props) {

    console.log('SearchResultPage', props);
    return (
        <div>

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