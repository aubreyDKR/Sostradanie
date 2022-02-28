import React from 'react';
import styled from 'styled-components';
import * as colors from "../constants/colors";
import sponsor1img from "../images/ДирижабльЛого.jpg";
import { Instagram, LocationOn, Phone, Mail } from "@material-ui/icons";
import { ReactComponent as LogoSostradanie } from '../images/logoSostradanie.svg';

const Container = styled.div`
    background-color: ${colors.COLOR_TERTIARY};
    padding: 20px;
`;

const Title = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.COLOR_PRIMARY};
`;

const Sponsors = styled.div`
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
    margin-top: 10px;
`;

const SponsorLogo = styled.div`
    background-image: url(${sponsor1img});
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    flex: 1;
    width: 100%;
    min-height: 59px;
    height: auto;
`;

const Socials = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 10px;
`;

const SocialButton = styled.button`
    background: none;
    border: none;
    color: ${colors.COLOR_PRIMARY};
    cursor: pointer;
`;

const Contacts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 20px;
    margin-top: 10px;
`;

const Contact = styled.div`
    color: ${colors.COLOR_PRIMARY};
    display: flex;
    align-items: center;
`;

const Credits = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
    color: ${colors.COLOR_PRIMARY};
    opacity: 0.5;
`;

const LogoSostradanieModified = styled(LogoSostradanie)`
    height: 50px;
    .st1, .st2, .st4 {
        fill: ${colors.COLOR_PRIMARY} !important;
    }
`;

const Footer = () => {
  return (
    <Container>
        <Title>Нам помогают</Title>
        <Sponsors>
            <SponsorLogo/>
            <SponsorLogo/>
            <SponsorLogo/>
            <SponsorLogo/>
            <SponsorLogo/>
        </Sponsors>
        <Title>Социальные сети</Title>
        <Socials>
            <SocialButton><Instagram style={{ fontSize: "35px" }}/></SocialButton>
        </Socials>
        <Title>Контакты</Title>
        <Contacts>
            <Contact>
                <LocationOn style={{ fontSize: "35px", padding: "0px 20px" }}/>
                г.Н.Новгород, Бурнаковский Проезд д.16а.
            </Contact>
            <Contact>
                <Phone style={{ fontSize: "35px", padding: "0px 20px"  }}/>
                8 (831) 2-162-162
            </Contact>
            <Contact>
                <Mail style={{ fontSize: "35px", padding: "0px 20px"  }}/>
                sostradanie@dekom-nn.ru
            </Contact>
        </Contacts>
        <Credits>
            <LogoSostradanieModified/>
            Создание сайта: Aubrey DEKKER
        </Credits>
    </Container>
  );
};

export default Footer;
