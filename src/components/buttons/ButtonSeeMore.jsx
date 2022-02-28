import React from 'react';
import styled from 'styled-components';
import * as colors from "../../constants/colors";
import { ChevronRightRounded } from "@material-ui/icons";

const Container = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Text = styled.span`
    text-decoration: underline;
    margin-right: 10px;
    color: ${colors.COLOR_TERTIARY};
`;

const Button = styled.button`
    background-color: ${colors.COLOR_TERTIARY};
    border: none;
    display: flex;
    color: white;
    border-radius: 5px;
    padding: 0;
`;

const ButtonSeeMore = () => {
  return (
    <Container>
        <Text>Показать все</Text>
        <Button><ChevronRightRounded/></Button>
    </Container>
  )
};

export default ButtonSeeMore;
