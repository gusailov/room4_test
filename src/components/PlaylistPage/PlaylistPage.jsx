import React from 'react';
import { useParams, useLocation } from "react-router-dom";


export const PlaylistPage = (props) => {

    const params = useParams()
    const location = useLocation()
    console.log('params', params);
    console.log('location', location);
    return (<div >
        PlaylistPage
    </div>)
}