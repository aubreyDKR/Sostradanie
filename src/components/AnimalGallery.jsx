import React from 'react'
import styled from 'styled-components';
import * as colors from "../constants/colors";
import AnimalCard from './AnimalCard';

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    height: 80%;
`;

const AnimalGallery = () => {
    return (
        <Container>
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </Container>
    )
}

export default AnimalGallery