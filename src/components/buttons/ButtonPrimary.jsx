import React, { Children } from 'react'
import styled from 'styled-components';
import * as colors from "../../constants/colors";

const Container = styled.button`
    background-color: ${colors.COLOR_TERTIARY}; 
    padding: 10px;
    border-radius: 10px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: ${colors.COLOR_PRIMARY};
    cursor: pointer;
    transition: all .2s ease-in-out;
    text-transform: uppercase;
    &:hover {
        transform: scale(1.2);
    }
`;

const ButtonPrimary = ({children}) => {
  return (
    <Container>
      {children}
    </Container>
  )
}

export default ButtonPrimary