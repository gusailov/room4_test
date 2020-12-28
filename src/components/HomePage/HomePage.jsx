import React from 'react';
import { HomePageContainer } from './HomePageContainer';
import { generate as id } from "shortid";

export const HomePage = () => {

    const queries = [
        {
            id: id(),
            value: 'funk',
        },
        {
            id: id(),
            value: 'rock',
        },
        {
            id: id(),
            value: 'pop',
        },

    ]
    console.log(queries);
    return (
        <>
            { queries.map((querie) =>
                <HomePageContainer key={querie.id} id={querie.id} title={querie.value} />)}
        </>

    )
}