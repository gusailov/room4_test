import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, List, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import { HomePageListItem } from '../HomePage/HomePageListItem';
import { SampleNextArrow, SamplePrevArrow } from "../assets/Arrows";

import { NavLink } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        //  height: '35vh',
    },
    container: {

        //   height: '35vh',
    },
    indicator: {
        opacity: 0,
    },
    disabled: {
        color: 'red',
    },
    sliderrrr: {
        display: 'flex',
        alignItems: 'center'

    }
}));
function SearchResultItem({ title, items }) {
    const classes = useStyles();
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        className: classes.sliderrrr,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 830,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: false,
                }
            }
        ]
    };
    // console.log('SearchResultItem', props);



    return (
        <div className={classes.root}>

            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>
            <div className={classes.container}>
                <Slider {...settings}>

                    {items.map((list) =>
                        < HomePageListItem key={list.id} list={list} />
                    )}

                </Slider>
            </div>


        </div >
    );
}

export default SearchResultItem;