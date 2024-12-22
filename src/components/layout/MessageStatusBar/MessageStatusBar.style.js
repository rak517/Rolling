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
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 120rem;

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
    padding: 1.2rem 0.4rem;
  }
`;

export const ReactionsWrapper = styled.div`
  display: flex;
  min-width: 6rem;
`;

export const AllEmojiButton = styled.img`
  width: 2.4rem;
  height: 3.7rem;
  margin-left: 0.8rem;

  transition: transform 0.3s ease;
  transform: ${({ isRotated }) =>
    isRotated ? 'rotate(180deg)' : 'rotate(0deg)'};
  cursor: pointer; /* 클릭 가능함을 나타내기 위해 커서를 포인터로 변경 */
`;

export const MessageCount = styled.p`
  color: var(--gray-900);
`;

export const EmojiDropDown = styled.img`
  margin-right: 0.4rem;

  @media (max-width: 768px) {
    margin: 0;
  }
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

export const EmojiSelector = styled.div`
  position: absolute;
  top: 4.6rem;
  right: 9rem;
  z-index: 1000;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);

  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    top: 100%;
    right: 0.5rem;
  }
`;

export const ShareDropdownMenu = styled.div`
  position: absolute;
  top: 4.6rem;
  right: 0rem;
  padding: 1rem 0.1rem;
  background-color: var(--white);
  border-radius: 0.8rem;
  color: var(--gray-900);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      padding: 1.2rem 1.6rem;
      cursor: pointer;

      &:hover {
        background-color: var(--gray-100);
      }
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const AllEmojiDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 16rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 0.8rem;
  border: 0.1rem solid #b6b6b6;
  border-radius: 0.8rem;
  padding: 2.4rem;
  background-color: var(--white);
  gap: 1rem;
  z-index: 1000;
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    top: 90%;
    right: 5rem;
  }
`;

export const AddText = styled.span`
  @media (max-width: 768px) {
    display: none;
  }
`;
