import React from 'react';
import Header from '../../components/layout/Header';
import Button from '../../components/ui/Button';
import mockData from '../../data/mockData.json';
import useResponsive from '../../hooks/useResponsive';
import useCarousel from '../../hooks/useCarousel';
import {
  PageContainer,
  SectionWrapper,
  ListSection,
  StyledLink,
} from './ListPage.styles';
import ResponsiveCarousel from './ResponsiveCarousel';

function ListPage() {
  const cardsToShow = 4;
  const isMobile = useResponsive(1248);

  // 상단 캐러셀
  const {
    currentIndex: currentIndexTop,
    maxIndex: maxIndexTop,
    handleNext: handleNextTop,
    handlePrev: handlePrevTop,
  } = useCarousel(mockData.length, cardsToShow);

  // 하단 캐러셀
  const {
    currentIndex: currentIndexBottom,
    maxIndex: maxIndexBottom,
    handleNext: handleNextBottom,
    handlePrev: handlePrevBottom,
  } = useCarousel(mockData.length, cardsToShow);

  return (
    <>
      <Header showButton={true} visibleOnMobile={true} />
      <PageContainer>
        <SectionWrapper>
          <h2 className="text-xl font-bold">인기 롤링 페이퍼 🔥</h2>
          <ListSection>
            <ResponsiveCarousel
              data={mockData}
              isMobile={isMobile}
              currentIndex={currentIndexTop}
              handlePrev={handlePrevTop}
              handleNext={handleNextTop}
              maxIndex={maxIndexTop}
              cardsToShow={cardsToShow}
            />
          </ListSection>
        </SectionWrapper>

        <SectionWrapper>
          <h2 className="text-xl font-bold">최근에 만든 롤링 페이퍼 ⭐️️</h2>
          <ListSection>
            <ResponsiveCarousel
              data={mockData}
              isMobile={isMobile}
              currentIndex={currentIndexBottom}
              handlePrev={handlePrevBottom}
              handleNext={handleNextBottom}
              maxIndex={maxIndexBottom}
              cardsToShow={cardsToShow}
            />
          </ListSection>
        </SectionWrapper>
      </PageContainer>
      <StyledLink to="/post">
        <Button
          label="나도 만들어보기"
          size={56}
          variant="primary"
          fullWidth={true}
          className="text-lg"
        />
      </StyledLink>
    </>
  );
}

export default ListPage;
