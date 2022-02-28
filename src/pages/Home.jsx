import React from 'react';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import * as colors from "../constants/colors";
import heroImg from "../images/hero.jpg";
import { ExpandMoreRounded } from "@material-ui/icons";
import ButtonSeeMore from '../components/buttons/ButtonSeeMore';
import ButtonDonate from '../components/buttons/ButtonDonate';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import ButtonHowToHelp from '../components/buttons/ButtonHowToHelp';
import Footer from '../components/Footer';
import NewsCarousel from '../components/NewsCarousel';
import AnimalGallery from '../components/AnimalGallery';

const Container = styled.div``;

const Wrapper = styled.div`
  margin-top: 6vh;
`;

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 6vh);
  box-sizing: border-box;
  padding: 20px;
`;

const HeroImgContainer = styled.div`
  position: relative;
  height: 50%;
  width: 100%;
`;

const HeroImg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border: solid 3px ${colors.COLOR_PRIMARY};
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 2;
  border-radius: 10px;
  background-image: url(${heroImg});
  background-position: 75% 25%;
`;

const HeroImgBackground = styled.div`
  background-color: ${colors.COLOR_TERTIARY};
  width: 100%;
  height: 100%;
  transform: rotate(-5deg);
  border-radius: 10px;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 20px;
`;

const HeroTextTitle = styled.span`
  font-size: 33px;
  font-weight: bold;
`;

const HeroTextSubtitle = styled.span`
  
`;

const HeroButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Section = styled.div`
  height: calc(100vh - 6vh);
  background-color: #e3e3e3;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const SectionHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const SectionTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const CallToActionText = styled.span`
`;

const CallToActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Home = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <Hero>
          <HeroImgContainer>
            <HeroImg />
            <HeroImgBackground />
          </HeroImgContainer>
          <HeroText>
            <HeroTextTitle>Усыновите питомца своей мечты здесь</HeroTextTitle>
            <HeroTextSubtitle>Следующий член семьи находится на расстоянии одного клика!</HeroTextSubtitle>
          </HeroText>
          <HeroButtons>
            <ButtonPrimary>все животные</ButtonPrimary>
            <ButtonDonate />
          </HeroButtons>
          <ExpandMoreRounded style={{ alignSelf: "center", fontSize: "30px", opacity: "0.5" }} />
        </Hero>
        <Section>
          <SectionHeader>
            <SectionTitle>Ищут Дом</SectionTitle>
            <ButtonSeeMore />
          </SectionHeader>
          <AnimalGallery/>
          <CallToActionText>Вы сможете им помогать</CallToActionText>
          <CallToActionButtons>
            <ButtonDonate />
            <ButtonHowToHelp />
          </CallToActionButtons>
        </Section>
        <Section style={{ background: colors.COLOR_PRIMARY }}>
          <SectionHeader>
            <SectionTitle>Новости</SectionTitle>
            <ButtonSeeMore />
          </SectionHeader>
          <NewsCarousel>

          </NewsCarousel>
        </Section>
      </Wrapper>
      <Footer />
    </Container >
  )
};

export default Home;
