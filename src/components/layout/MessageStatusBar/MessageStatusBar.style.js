import styled from 'styled-components';

export const StatusBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6.8rem;
  border-bottom: 0.1rem solid #ededed;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
  }
`;

export const StatusBarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120rem;

  @media (max-width: 1248px) {
    width: 100%;
    padding: 0 2.4rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    align-items: flex-start;
  }
`;

export const TitleWrapper = styled.div`
  @media (max-width: 768px) {
    width: 100%;
    border-bottom: 0.1rem solid var(--gray-200);
  }
`;

export const Title = styled.h2`
  color: var(--gray-800);

  @media (max-width: 768px) {
    padding: 1.2rem 2.4rem;
  }
`;

export const StatusBarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 2.8rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.2rem;
  }
`;

export const StatusBarSectionWrapperLeft = styled.div`
  display: flex;
  gap: 0.2rem;

  &::after {
    content: '';
    display: block;
    width: 0.1rem;
    height: 2.8rem;
    background-color: var(--gray-200);
    margin-left: 2.4rem;
  }

  @media (max-width: 1248px) {
    display: none;
  }
`;

export const StatusBarSectionWrapperRight = styled.div`
  display: flex;
  gap: 0.8rem;

  @media (max-width: 768px) {
    width: 100%;
    padding: 1.2rem 2.4rem;
  }
`;

export const ReactionsWrapper = styled.div`
  display: flex;

  img {
    margin-left: 0.8rem;
  }
`;

export const MessageCount = styled.p`
  color: var(--gray-900);
`;

export const EmojiDropDown = styled.img`
  margin-right: 0.4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  &::after {
    content: '';
    display: block;
    width: 0.1rem;
    height: 2.8rem;
    background-color: var(--gray-200);
    margin-left: 0.8rem;
  }
`;
