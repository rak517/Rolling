import React from 'react';
import Header from '../../components/layout/Header';
import Button from '../../components/ui/Button';
import useResponsive from '../../hooks/useResponsive';
import useCarousel from '../../hooks/useCarousel';
import {
  PageContainer,
  SectionWrapper,
  ListSection,
  StyledLink,
} from './ListPage.styles';
import CarouselContainer from './CarouselContainer';

function ListPagePresenter({ popularPapers, recentPapers, loading, error }) {
  const cardsToShow = 4;
  const isMobile = useResponsive(1248);

  const {
    currentIndex: currentIndexTop,
    maxIndex: maxIndexTop,
    handleNext: handleNextTop,
    handlePrev: handlePrevTop,
  } = useCarousel(popularPapers?.length || 0, cardsToShow);

  const {
    currentIndex: currentIndexBottom,
    maxIndex: maxIndexBottom,
    handleNext: handleNextBottom,
    handlePrev: handlePrevBottom,
  } = useCarousel(recentPapers?.length || 0, cardsToShow);

  // 로딩 상태 처리
  if (loading) return <div>로딩 중...</div>;

  // 에러 상태 처리
  if (error) return <div>{error}</div>;

  // 데이터가 없는 경우 처리
  if (!popularPapers || !recentPapers) return <div>데이터가 없습니다.</div>;

  return (
    <>
      <Header showButton={true} visibleOnMobile={true} />
      <PageContainer>
        <SectionWrapper>
          <h2 className="text-xl font-bold">인기 롤링 페이퍼 🔥</h2>
          <ListSection>
            <CarouselContainer
              data={popularPapers}
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
            <CarouselContainer
              data={recentPapers}
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
          size={56}
          variant="primary"
          fullWidth={true}
          className="text-lg"
        >
          나도 만들어보기
        </Button>
      </StyledLink>
    </>
  );
}

export default ListPagePresenter;
