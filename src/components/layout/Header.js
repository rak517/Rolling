import { Link } from 'react-router-dom';

import styled from 'styled-components';
import logo from '../../assets/icons/logo.svg';
import Button from '../ui/Button';

const HeaderContainer = styled.header`
  width: 100%;
  height: 6.4rem;
  border-bottom: 1px solid #ededed;
`;

const HeaderContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1207px;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 1248px) {
    width: 100%;
    padding: 0 24px;
  }
`;

const Logo = styled.img`
  width: auto;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

function Header({ showButton }) {
  return (
    <HeaderContainer>
      <HeaderContentWrapper>
        <LogoLink to="/">
          <Logo src={logo} alt="Rolling Logo" />
        </LogoLink>
        {showButton && (
          <Button
            label="롤링 페이퍼 만들기"
            size={40}
            variant="outlined"
            className="text-base"
          />
        )}
      </HeaderContentWrapper>
    </HeaderContainer>
  );
}

export default Header;
