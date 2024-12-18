import styled from 'styled-components';
import ProfileImages from '../../components/common/ProfileImages';
import Reactions from '../../components/common/Reactions';
import { Link } from 'react-router-dom';

const Card = styled.div`
  position: relative; /* 오버레이 겹치기 위해 */
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  padding: 3rem 2.4rem;
  border: 0.1rem solid rgba(0, 0, 0, 0.12);
  border-radius: 1.6rem;
  width: 27.5rem;
  height: 26rem;
  overflow: hidden;
  cursor: pointer;

  /* 배경 이미지와 색상 설정 */
  background-color: ${(props) =>
    props.$backgroundImageURL
      ? 'transparent'
      : {
          purple: 'var(--purple-200)',
          green: 'var(--green-200)',
          blue: 'var(--blue-200)',
          beige: 'var(--beige-200)',
        }[props.$backgroundColor] || 'var(--blue-200)'};

  background-image: ${(props) =>
    props.$backgroundImageURL
      ? `url("${props.$backgroundImageURL}")`
      : `url(${
          {
            purple: '/assets/images/purple-bg.svg',
            green: '/assets/images/green-bg.svg',
            blue: '/assets/images/blue-bg.svg',
            beige: '/assets/images/beige-bg.svg',
          }[props.$backgroundColor] || 'none'
        })`};

  background-size: ${(props) => (props.$backgroundImageURL ? 'cover' : '50%')};

  /* 조건부 background-position 설정 */
  background-position: ${(props) =>
    props.$backgroundImageURL ? 'left' : 'bottom right'};

  background-repeat: no-repeat;

  /* 투명한 그라데이션 오버레이: 이미지가 있을 때만 추가 */
  &::before {
    content: ${(props) => (props.$backgroundImageURL ? '""' : 'none')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.54),
      rgba(0, 0, 0, 0.54)
    );
    pointer-events: none;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  border-bottom: 0.1rem solid rgba(0, 0, 0, 0.12);
`;

const CardTitle = styled.h3`
  color: ${(props) =>
    props.$backgroundImageURL ? 'var(--white)' : 'var(--gray-900)'};
  z-index: 0;
`;

const MessageCount = styled.p`
  color: ${(props) =>
    props.$backgroundImageURL ? 'var(--white)' : 'var(--gray-700)'};
  padding-bottom: 3rem;
  z-index: 0;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  width: 100%;
  text-decoration: none;
`;

const EmojiSection = styled.div``;

function ListPageCard({ data }) {
  return (
    <StyledLink to={`/post/${data.id}`}>
      <Card
        $backgroundColor={data.backgroundColor}
        $backgroundImageURL={data.backgroundImageURL}
      >
        <CardWrapper>
          <CardTitle
            className="text-2xl font-bold"
            $backgroundImageURL={data.backgroundImageURL}
          >
            To. {data.name}
          </CardTitle>
          <ProfileImages
            recentMessages={data.recentMessages}
            $backgroundImageURL={data.backgroundImageURL}
          />
          <MessageCount
            className="text-base"
            $backgroundImageURL={data.backgroundImageURL}
          >
            <strong>{data.messageCount}</strong>명이 작성했어요!
          </MessageCount>
        </CardWrapper>
        <EmojiSection>
          <Reactions topReactions={data.topReactions}></Reactions>
        </EmojiSection>
      </Card>
    </StyledLink>
  );
}

export default ListPageCard;
