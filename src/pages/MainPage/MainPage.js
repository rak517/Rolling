import { Link } from 'react-router-dom';
import Header from '../../components/layout/Header';
import CreatePaperIntro from './CreatePaperIntro';
import EmojiIntro from './EmojiIntro';
import Button from '../../components/ui/Button';
import styled from 'styled-components';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 1200px) {
    padding: 2.4rem;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  text-decoration: none;
`;

function MainPage() {
  return (
    <>
      <Header showButton={true} visibleOnMobile={true} />
      <MainWrapper>
        <CreatePaperIntro />
        <EmojiIntro />
        <StyledLink to="/list">
          <Button
            size={56}
            variant="primary"
            fullWidth={true}
            className="text-lg"
          >
            구경해보기
          </Button>
        </StyledLink>
      </MainWrapper>
    </>
  );
}

export default MainPage;
