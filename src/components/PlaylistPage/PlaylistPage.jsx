import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPlaylistInfo } from "../../redux/playlist_page-reducer";
import { TracklistTable } from './../Common/TracklistTable';



export const PlaylistPage = () => {
    const dispatch = useDispatch()
    const params = useParams()
    const tracks = useSelector(state => state.playlistPage.tracks);
    const playlist = useSelector(state => state.playlistPage.playlist);
    const isFetching = useSelector(state => state.playlistPage.isFetching)


    useEffect(() => {
        dispatch(getPlaylistInfo(params.playlistId))

    }, [params, dispatch])

    return (
        <div>
            {isFetching ? <div>Loading...</div> :
                <div >
                    {playlist.title}
                    <TracklistTable tracks={tracks} />
                </div>
            }
        </div>
    )
}