import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "../assets/Arrows";
import { SliderItem } from './../Common/SliderItem';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        //height: '35vh',
    },
    container: {
        height: '35vh',
    },
    indicator: {
        opacity: 0,
    },
    disabled: {
        color: 'red',
    },
    sliderrrr: {
        display: 'flex',
        alignItems: 'center',
        height: "100%",
    }
}));

export const HomePageContainer = (props) => {
    const classes = useStyles();
    const { lists, title } = props
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
    return (
        <div className={classes.root}>
            <Typography gutterBottom variant="h5" component="h2">
                {title}
            </Typography>

            <Slider {...settings}>
                {lists.map((list) =>
                    < SliderItem key={list.id} item={list} img={list.picture_big} title={list.title} />
                )}
            </Slider>

        </div >
    );
}
