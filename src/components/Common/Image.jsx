import React from 'react'
import styled from 'styled-components'



export const Image = styled.img.attrs(props => ({
    // we can define static props
    src: props.img,
    alt: props.title,

}))`
  height: ${props => props.size};
   width: ${props => props.size};
   border-radius : ${props => props.rounded || "0"}
`;
