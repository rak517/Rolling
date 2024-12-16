import Header from '../../components/layout/Header';
import styled from 'styled-components';
import ListPageCard from './ListPageCard';
import mockData from '../../data/mockData.json';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 4rem;
`;

const SectionWrapper = styled.section`
  margin-bottom: 4rem;

  h2 {
    margin-bottom: 2rem;
  }
`;

const ListSection = styled.section`
  display: flex;
  gap: 2rem;
`;

function ListPage() {
  return (
    <>
      <Header showButton={true} visibleOnMobile={true} />
      <PageContainer>
        <SectionWrapper>
          <h2 className="text-xl font-bold">인기 롤링 페이퍼 🔥</h2>
          <ListSection>
            {mockData.map((data) => (
              <ListPageCard key={data.id} data={data} />
            ))}
          </ListSection>
        </SectionWrapper>

        <SectionWrapper>
          <h2 className="text-xl font-bold">최근에 만든 롤링 페이퍼 ⭐️️</h2>
          <ListSection>
            {mockData.map((data) => (
              <ListPageCard key={data.id} data={data} />
            ))}
          </ListSection>
        </SectionWrapper>
      </PageContainer>
    </>
  );
}

export default ListPage;
