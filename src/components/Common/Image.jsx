import React from 'react'
import styles from './styles.css'

const Image = styled.img`
        height: 200px;
        width: 200px;
        border-radius: ${props => props.rounded ? "50%" : "0"};
`;

export const Image = () => {


    return (
        <img src="" alt="" />

}