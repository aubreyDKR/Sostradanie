import React from 'react'
import styled from 'styled-components';
import * as colors from "../../constants/colors";
import { ReactComponent as DonateIcon } from '../../images/DonateIcon.svg';

const Container = styled.div`
    background: ${colors.COLOR_DONATE_GRADIENT};
    width: 40px;
    height: 40px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

const ButtonDonateLittle = () => {
  return (
    <Container>
        <DonateIcon style={{width: "22px", height: "auto"}}/>
    </Container>
  )
}

export default ButtonDonateLittle