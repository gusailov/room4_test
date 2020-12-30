import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { HomePageContainer } from './HomePageContainer';
import { getTopTracks } from "../../redux/home_page-reduser";
import { sortBy } from "lodash";


const queries = [{ id: 1, value: "hits" }, { id: 2, value: "2020" }, { id: 3, value: "chart" }]
export const HomePage = () => {
    const isFetching = useSelector(state => state.mainPage.isFetching)
    const dispatch = useDispatch()
    const lists = useSelector(state => state.mainPage.lists);
    const listsSorted = sortBy(lists, 'id');

    useEffect(() => {
        queries.forEach(query => dispatch(getTopTracks(query.value, query.id)))

    }, [dispatch]);


    return (
        <div>
            {
                isFetching ?
                    <div>Loading...</div>
                    :
                    <div>
                        {
                            listsSorted.map((list) =>
                                <HomePageContainer key={list.value} lists={list.lists} title={list.value} />)
                        }</div>

            }</div>
    )
}