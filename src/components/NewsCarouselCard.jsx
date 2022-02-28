import React from 'react';
import styled from 'styled-components';
import sterelizationImg from "../images/SterelizationProgram.jpg";
import ButtonSeeMore from './buttons/ButtonSeeMore';

const Container = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 5px;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
    & ~ & {
        margin-left: 25px;
    }
    
`;

const CardImg = styled.div`
    background-color: grey;
    height: 50%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    color: white;
`;

const CardContent = styled.div`
    height: 50%;
    box-sizing: border-box;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 20px;
`;

const CardTitle = styled.span`
    font-size: 16px;
    font-weight: bold;
`;

const CardText = styled.p`
    font-size: 16px;
    height: auto;
    overflow: hidden;
    position: relative;
    &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: linear-gradient(transparent, white)
    }
`;

const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Date = styled.span`
    opacity: 0.75;
`;

const NewsCarouselCard = ({ id }) => {
    return (
        <Container>
            <CardImg>{id}</CardImg>
            <CardContent>
                <CardTitle>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, dolor.</CardTitle>
                <CardText>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam perferendis id repellat quibusdam esse tenetur beatae, exercitationem odit earum quas aliquam voluptates error tempora optio iste quae facilis molestias sint provident culpa autem rerum incidunt animi dolorum. Cum non sapiente aliquid aut aperiam tempore doloremque fugit voluptatem vero veniam nulla, porro mollitia earum voluptates, ducimus dolor, culpa voluptatibus alias asperiores? Repellat consequatur quae libero? Eius blanditiis consectetur obcaecati perspiciatis officiis laborum nihil esse ut iusto totam unde inventore ad non aspernatur numquam earum consequatur deserunt at rem repellendus, exercitationem nam placeat et! Eveniet adipisci quae molestias architecto ut itaque sed?
                </CardText>
                <Footer>
                    <Date>27.05.2021</Date>
                    <ButtonSeeMore/>
                </Footer>
            </CardContent>
        </Container>
    );
};

export default NewsCarouselCard;
