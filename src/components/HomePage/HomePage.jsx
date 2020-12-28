import React from 'react';
import { HomePageContainer } from './HomePageContainer';
import { queries } from "./queries";


export const HomePage = () => {


    console.log('HomePage queries', queries);
    return (
        <>
            { queries.map((querie) =>
                <HomePageContainer key={querie.id} id={querie.id} title={querie.value} />)}
        </>

    )
}