import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { HomePageContainer } from './HomePageContainer';
import { getTopTracks } from "../../redux/home_page-reduser";


const queries = ["funk", "rock", "pop"]
export const HomePage = () => {
    console.log('queries ', queries);
    const isFetching = useSelector(state => state.mainPage.isFetching)
    const dispatch = useDispatch()
    const lists = useSelector(state => state.mainPage.lists);
    const mainPage = useSelector(state => state.mainPage)
    console.log('mainPage lists', lists);


    useEffect(() => {
        queries.forEach((query, index) => dispatch(getTopTracks(query, index)))

    }, [dispatch]);


    return (
        <div>
            {
                isFetching ?
                    <div>Loading...</div>
                    :
                    <div>
                        {
                            lists.map((list) =>
                                <HomePageContainer key={list.value} lists={list.lists} title={list.value} />)
                        }</div>

            }</div>
    )
}