import styled from 'styled-components';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SectionHeading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #181818;
`;

export const ProfileContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProfileBox = styled.label`
  width: 80px;
  height: 80px;
  border: ${({ isSelected }) => (isSelected ? '2px solid #9935ff' : '1px solid #cccccc')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background: #f6f6f6;
  transition: border 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;
