import React from 'react'
import styled from 'styled-components';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import * as colors from "../constants/colors";
import { AccessTime } from "@material-ui/icons";

const Container = styled.div`

`;

const Wrapper = styled.div`
    margin-top: 6vh;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: calc(100vh - 6vh);
    box-sizing: border-box;
    padding: 20px;
    gap: 20px;
`;

const SectionTitle = styled.span`
  font-size: 20px;
  font-weight: bold;
`;

const ContactForm = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

const Input = styled.input`
    background-color: #e3e3e3;
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;
`;

const TextArea = styled.textarea`
    background-color: #e3e3e3;
    border: none;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 215px;
    resize: none;
    font-size: 16px;

`;

const ScheduleContainer = styled.div`
    width: 100%;
    border: 3px solid ${colors.COLOR_SECONDARY};
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const Schedule = styled.div`
    border-top: 3px solid ${colors.COLOR_SECONDARY};
    border-bottom: 3px solid ${colors.COLOR_SECONDARY};
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    padding: 20px;
`;

const ScheduleInside = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5px;
`;

const ScheduleTitle = styled.span`
    text-transform: uppercase;
    font-size: 20px;
    font-weight: bold;
    position: absolute;
    top: -15px;
    background-color: ${colors.COLOR_PRIMARY};
    padding: 0px 5px;
`;

const ScheduleRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Day = styled.span`
    text-transform: uppercase;
`;

const Hour = styled.span`
    text-transform: uppercase;
`;

const Contact = () => {
    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Section>
                    <SectionTitle>Контакты</SectionTitle>
                    <ContactForm>
                        <Input type="text" placeholder="Ввудите ваше имя" />
                        <Input type="email" placeholder="Ввудите ваш майл" />
                        <TextArea placeholder="Введите ваше сообщение" />
                        <ButtonPrimary type="submit">Отправить</ButtonPrimary>
                    </ContactForm>
                    <ScheduleContainer>
                        <AccessTime style={{position: "absolute", top: "-25px", backgroundColor: colors.COLOR_PRIMARY, fontSize: "35px"}}/>
                        <Schedule>
                            <ScheduleTitle>Часы работы</ScheduleTitle>
                            <ScheduleInside>
                                <ScheduleRow>
                                    <Day>вторник</Day>
                                    <Hour>11:00 - 18:00</Hour>
                                </ScheduleRow>
                                <ScheduleRow>
                                    <Day>среда</Day>
                                    <Hour>11:00 - 18:00</Hour>
                                </ScheduleRow>
                                <ScheduleRow>
                                    <Day>четверг</Day>
                                    <Hour>11:00 - 18:00</Hour>
                                </ScheduleRow>
                                <ScheduleRow>
                                    <Day>пятница</Day>
                                    <Hour>11:00 - 18:00</Hour>
                                </ScheduleRow>
                                <ScheduleRow>
                                    <Day>суббота</Day>
                                    <Hour>9:00 - 15:00</Hour>
                                </ScheduleRow>
                                <ScheduleRow>
                                    <Day>воскресенье<br/>понедельник</Day>
                                    <Hour>выходной</Hour>
                                </ScheduleRow>
                            </ScheduleInside>
                        </Schedule>
                    </ScheduleContainer>
                </Section>
            </Wrapper>
            <Footer/>
        </Container>
    )
}

export default Contact