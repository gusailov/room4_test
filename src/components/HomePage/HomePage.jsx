import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { HomePageContainer } from './HomePageContainer';
import { getTopTracks } from "../../redux/home_page-reducer";
import { sortBy, keyBy, forEachRight, includes } from "lodash";



export const HomePage = () => {
    const queries = [{ id: 1, value: "Best of the best" }, { id: 2, value: "2021" }, { id: 3, value: "chart" }, { id: 4, value: "hits" }, { id: 5, value: "Rock" }]
    console.log('queries', queries);
    const isFetching = useSelector(state => state.mainPage.isFetching)
    const dispatch = useDispatch()
    const lists = useSelector(state => state.mainPage.lists);
    console.log('lists', lists);
    const listsSorted = sortBy(lists, 'id');


    useEffect(() => {
        forEachRight(queries, query => {
            if (!includes(Object.keys(keyBy(listsSorted, 'value')), query.value)) {
                dispatch(getTopTracks(query.value, query.id))
            }
        }
        )
    }, [dispatch]);


    return (
        <div>
            {isFetching ?
                <div>Loading...</div>
                :
                <div> {listsSorted.map((list) => <HomePageContainer key={list.value} lists={list.lists} title={list.value} />)}</div>
            }</div>
    )
}