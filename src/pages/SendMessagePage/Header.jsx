import React from 'react';
import { HeaderContainer, LogoButton } from '../../styles/SendMessagePage/Header.styled';

const Header = ({ navigate }) => (
  <HeaderContainer>
    <LogoButton onClick={() => navigate('/')}>Rolling</LogoButton>
  </HeaderContainer>
);

export default Header;
