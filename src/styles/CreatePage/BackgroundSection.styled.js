import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Heading = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #181818;
`;

export const ToggleContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const ToggleButton = styled.button`
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  background: ${(props) => (props.isActive ? '#9935ff' : '#f6f6f6')};
  color: ${(props) => (props.isActive ? '#fff' : '#555')};
  transition:
    background 0.3s,
    color 0.3s;
`;

export const ColorGrid = styled.div`
  display: flex;
  gap: 16px;
`;

export const ColorBox = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  border: ${(props) =>
    props.isSelected ? '3px solid #9935ff' : '1px solid rgba(0, 0, 0, 0.08)'};
  background-color: ${(props) => props.color};
`;

export const ImageGrid = styled.div`
  display: flex; // flex로 수정
  gap: 16px;
`;

export const ImageBox = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  border: ${(props) =>
    props.isSelected ? '3px solid #9935ff' : '1px solid rgba(0, 0, 0, 0.08)'};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${(props) => (props.isSelected ? '0.6' : '1')};
  }
`;
