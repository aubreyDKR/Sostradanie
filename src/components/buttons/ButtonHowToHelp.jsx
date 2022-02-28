import React from 'react'
import styled from 'styled-components';
import * as colors from "../../constants/colors";

const Button = styled.button`
  background: transparent;
  box-sizing: content-box;
  border: 3px solid ${colors.COLOR_DONATE};
  padding: 7px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.COLOR_DONATE};
  cursor: pointer;
  transition: all .2s ease-in-out;
  text-transform: capitalize;
  &:hover {
      transform: scale(1.2);
  }
`;


const ButtonHowToHelp = () => {
  return (
    <Button>
      Как Ещё Помочь ?
    </Button>
  )
}

export default ButtonHowToHelp

