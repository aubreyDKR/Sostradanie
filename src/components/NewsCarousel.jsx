import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronLeftRounded ,ChevronRightRounded } from "@material-ui/icons";
import * as colors from "../constants/colors";
import NewsCarouselCard from './NewsCarouselCard';

const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    overflow-x: auto;
    justify-content: center;
    padding: 20px;
    box-sizing: border-box;
`;

const ArrowLeft = styled(ChevronLeftRounded)`
    position: absolute;
    font-size: 50px !important;
    left: -10px;
    color: ${colors.COLOR_TERTIARY};
    cursor: pointer;
    align-self: center;
`;

const ArrowRight = styled(ChevronRightRounded)`
    position: absolute;
    font-size: 50px !important;
    right: -10px;
    color: ${colors.COLOR_TERTIARY};
    cursor: pointer;
    align-self: center;
`;

const NewsCarousel = () => {
  const [frame, setFrame] = useState(1);

  const nextFrame = () => {

  }

  const prevFreme = () => {

  }

  return (
    <Container>
        <ArrowLeft/>
        <ArrowRight/>
        <NewsCarouselCard id={1}/>
        <NewsCarouselCard id={2}/>
        <NewsCarouselCard id={3}/>
        <NewsCarouselCard id={4}/>
    </Container>
  );
};

export default NewsCarousel;
