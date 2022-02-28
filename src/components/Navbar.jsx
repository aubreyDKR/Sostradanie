import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as LogoSostradanie } from '../images/logoSostradanie.svg';
import { Divider, SwipeableDrawer } from '@material-ui/core';
import { Menu, Close } from "@material-ui/icons";
import { Link } from 'react-router-dom';
import * as colors from "../constants/colors";

const Container = styled.div`
  position: fixed;
  top: 0;
  z-index: 999;
  background-color: ${colors.COLOR_PRIMARY};
  width: 100vw;
  height: 6vh;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

const Logo = styled(LogoSostradanie)`
  height: 100%;
`;

const BurgerMenu = styled.button`
  border: none;
  background: ${colors.COLOR_TERTIARY};
  border-radius: 50%;
  color: ${colors.COLOR_PRIMARY};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items:center;
  padding: 5px;
`;

const Hidden = styled.div`
  position: absolute;
`;

const MenuList = styled.div`
`;

const MenuItem = styled(Link)`
    font-size: 33px;
    font-weight: bold;
    cursor: pointer;
    margin: 20px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
`;

const DrawerNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 6vh;
  padding-left: 20px;
  padding-right: 20px;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: ${colors.COLOR_TERTIARY};
  color: ${colors.COLOR_PRIMARY};
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <Wrapper>
        <Logo/>
        <BurgerMenu>
          <Menu style={{ fontSize: "20px" }} onClick={() => setOpen(true)}/>
        </BurgerMenu>
        <Hidden>
          <SwipeableDrawer
            anchor="top"
            open={open}
            onOpen={() => setOpen(true)}
            onClose={() => setOpen(false)}
          >
            <DrawerNavbar>
              <Logo/>
              <CloseButton onClick={() => setOpen(false)}>
                <Close style={{ fontSize: "20px" }}/>
              </CloseButton>
            </DrawerNavbar>
            <Divider />
            <MenuList>
              <MenuItem to="/">
                Главная
              </MenuItem>
              <MenuItem to="/animals">
                Ищут дом
              </MenuItem>
              <MenuItem to="/contact">
                Контакты
              </MenuItem>
              <MenuItem to="/favory">
                Избранное
              </MenuItem>
              <MenuItem to="/aboutUs">
                О фонде
              </MenuItem>
            </MenuList>
          </SwipeableDrawer>
        </Hidden>
      </Wrapper>
    </Container>
  )
};

export default Navbar;
