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
  box-shadow: ${(props) => (props.isActive ? '0px 4px 6px rgba(153, 53, 255, 0.4)' : 'none')};
  transition: background 0.3s, color 0.3s;
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
  border: ${(props) => (props.isSelected ? '3px solid #9935ff' : '1px solid #ccc')};
  background-color: ${(props) => props.color};
  box-shadow: ${(props) => (props.isSelected ? '0px 4px 6px rgba(153, 53, 255, 0.4)' : 'none')};
`;

export const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
`;

export const ImageBox = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 16px;
  cursor: pointer;
  overflow: hidden;
  border: ${(props) => (props.isSelected ? '3px solid #9935ff' : '1px solid rgba(0, 0, 0, 0.08)')};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: ${(props) => (props.isSelected ? '0.6' : '1')};
  }

  &::after {
    content: ${(props) => (props.isSelected ? "'✔'" : "''")};
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    color: white;
    display: ${(props) => (props.isSelected ? 'block' : 'none')};
    background-color: rgba(0, 0, 0, 0.6);
    border-radius: 50%;
    padding: 10px;
  }
`;
