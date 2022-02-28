import React from 'react'
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import * as colors from "../constants/colors";
import FilterMenu from '../components/FilterMenu';
import Footer from '../components/Footer';
import AnimalGallery from '../components/AnimalGallery';
import ButtonDonateLittle from '../components/buttons/ButtonDonateLittle';

const Container = styled.div`

`;

const Wrapper = styled.div`
`;

const Section = styled.div`
    height: calc(100vh - 12vh);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: #e3e3e3;
`;

const SectionHeader = styled.div`
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    position: relative;
`;

const SectionTitle = styled.span`
    font-size: 20px;
    font-weight: bold;
`;

const SectionHeaderButton = styled.div`
    position: absolute;
    right: 0;
`;

const Animals = () => {
    return (
        <Container>
            <Navbar />
            <FilterMenu />
            <Wrapper>
                <Section>
                    <SectionHeader>
                        <SectionTitle>Ищут Дом</SectionTitle>
                        <SectionHeaderButton>
                            <ButtonDonateLittle/>
                        </SectionHeaderButton>
                    </SectionHeader>
                    <AnimalGallery />
                </Section>
            </Wrapper>
            <Footer />
        </Container>
    )
}

export default Animals