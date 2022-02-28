import React from 'react';
import styled from 'styled-components';
import * as colors from "../../constants/colors";

const Button = styled.button`
    background: ${colors.COLOR_DONATE_GRADIENT}; 
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

const ButtonDonate = () => {
    return (
        <Button>
            Пожертвовать
        </Button>
    );
};

export default ButtonDonate;
