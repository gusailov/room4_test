import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams, useLocation } from "react-router-dom";
import { getPlaylistInfo } from "../../redux/playlist_page-reducer";
import { PlaylistTable } from './PlaylistTable';



export const PlaylistPage = (props) => {
    const dispatch = useDispatch()
    const params = useParams()
    const playlist = useSelector(state => state.playlistPage.playlist);
    const tracks = useSelector(state => state.playlistPage.tracks);
    const isFetching = useSelector(state => state.playlistPage.isFetching)
    // console.log('PlaylistPage', lists);
    // console.log('params', params);

    useEffect(() => {
        dispatch(getPlaylistInfo(params.playlistId))

    }, [params, dispatch])

    return (<div >
        PlaylistPage
        <div>
            {isFetching ? <div>Loading...</div> : <PlaylistTable tracks={tracks} />}
        </div>

    </div>)
}