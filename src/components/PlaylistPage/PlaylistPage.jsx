import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylistInfo } from "../../redux/playlist_page-reducer";
import { TracklistTable } from './../Common/TracklistTable';



export const PlaylistPage = (props) => {
    const dispatch = useDispatch()
    const params = useParams()
    const tracks = useSelector(state => state.playlistPage.tracks);
    const isFetching = useSelector(state => state.playlistPage.isFetching)


    useEffect(() => {
        dispatch(getPlaylistInfo(params.playlistId))

    }, [params, dispatch])

    return (<div >
        PlaylistPage
        <div>
            {isFetching ? <div>Loading...</div> : <TracklistTable tracks={tracks} />}
        </div>

    </div>)
}