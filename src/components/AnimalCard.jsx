import React from 'react';
import styled from 'styled-components';
import * as colors from "../constants/colors";
import animalImg from "../images/Белатриса.jpg";

const Container = styled.div`
    background-color: ${colors.COLOR_PRIMARY};
    display: flex;
    flex-direction: column;
    padding: 3px;
    border-radius: 10px;
    flex: 1;
`;

const Img = styled.div`
    background-image: url(${animalImg});
    border-radius: 5px;
    background-size: cover;
    background-repeat: no-repeat;
    height: 100%;
`;

const Infos = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const AnimalName = styled.span`
    font-weight: bold;
    font-size: 20px;
    text-align: center;
    margin-top: 15px;
    margin-bottom: 10px;
`;

const AnimalCharacteristics = styled.span`
    text-align: center;
    font-size: 16px;
    margin-bottom: 15px;
`;

const Buttons = styled.div`
    position: absolute;
`;

const LikeButton = styled.button`

`;

const AnimalCard = () => {
  return (
      <Container>
          <Img/>
          <Buttons>

          </Buttons>
          <Infos>
            <AnimalName>Белатриса</AnimalName>
            <AnimalCharacteristics>
            Молодая<br/>
            Коммуникабельная  
            </AnimalCharacteristics>
          </Infos>
      </Container>
  )
};

export default AnimalCard;
