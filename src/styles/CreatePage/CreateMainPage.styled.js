import styled from 'styled-components';

export const Container = styled.div`
  padding: 24px;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: flex-start;
`;

export const LogoButton = styled.button`
  font-size: 24px;
  font-weight: bold;
  background: none;
  border: none;
  color: #9935ff;
  cursor: pointer;
`;
