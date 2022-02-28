import React from 'react'
import styled from 'styled-components';
import * as colors from "../constants/colors";
import { ExpandMore, Close } from "@material-ui/icons";
import { useState } from 'react';
import { Divider, SwipeableDrawer } from '@material-ui/core';

const Container = styled.div`
    width: 100%;
    height: 6vh;
    background-color: ${colors.COLOR_TERTIARY};
    margin-top: 6vh;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${colors.COLOR_PRIMARY};
    font-size: 20px;
    cursor: pointer;
    position: relative;
`;

const DropDownMenu = styled.div`
    position: absolute;
    top: 6vh;
    height: 150px;
    width: 100%;
    background-color: red;
    opacity: 0;
`;

const FilterMenu = () => {

    const [open, setOpen] = useState(false);

    return (
        <Container>
            <Wrapper onClick={() => setOpen(!open)}>
                Фильтры <ExpandMore />
            </Wrapper>
        </Container>
    )
}

export default FilterMenu