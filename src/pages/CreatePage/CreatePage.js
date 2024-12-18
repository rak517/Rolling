import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CreateColorPageContainer = styled.div`
  padding: 24px;
  max-width: 720px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-start;
`;

const LogoButton = styled.button`
  font-size: 24px;
  font-weight: bold;
  background: none;
  border: none;
  color: #9935ff;
  cursor: pointer;
`;

const ToSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const ToHeading = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #181818;
`;

const ToInput = styled.input`
  width: 100%;
  height: 50px;
  padding: 12px 16px;
  border: 1px solid ${(props) => (props.error ? 'red' : '#cccccc')};
  border-radius: 8px;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  color: #555555;
`;

const ErrorMessage = styled.p`
  font-size: 14px;
  color: red;
`;

const BackgroundSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const BackgroundHeading = styled.h3`
  font-family: 'Pretendard', sans-serif;
  font-size: 24px;
  font-weight: 700;
  color: #181818;
`;

const BackgroundDescription = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  color: #555555;
`;

const ToggleSection = styled.div`
  display: flex;
  gap: 8px;
`;

const ToggleButton = styled.button`
  flex: 1;
  height: 40px;
  border: none;
  border-radius: 6px;
  font-family: 'Pretendard', sans-serif;
  font-size: 16px;
  background: ${(props) => (props.active ? '#ffffff' : '#f6f6f6')};
  border: ${(props) => (props.active ? '2px solid #9935ff' : 'none')};
  color: ${(props) => (props.active ? '#861dee' : '#181818')};
  cursor: pointer;
`;

const ColorOptions = styled.div`
  display: flex;
  gap: 16px;
`;

const ColorBox = styled.div`
  width: 168px;
  height: 168px;
  border-radius: 16px;
  position: relative;
  border: ${(props) =>
    props.selected ? '3px solid #9935ff' : '1px solid rgba(0, 0, 0, 0.08)'};
  cursor: pointer;
  background-color: ${(props) => props.color};
`;

const CheckmarkOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 24px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const CreateButton = styled.button`
  width: 100%;
  height: 56px;
  background: #9935ff;
  color: #ffffff;
  font-family: 'Pretendard', sans-serif;
  font-size: 18px;
  font-weight: 700;
  border: none;
  border-radius: 12px;
  cursor: pointer;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const CreateColorPage = () => {
  const navigate = useNavigate();
  const [toValue, setToValue] = useState('');
  const [error, setError] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#FFE2AD');

  const handleBlur = () => {
    if (!toValue.trim()) {
      setError(true);
    }
  };

  const handleCreate = () => {
    if (toValue.trim()) {
      const generatedId = Math.floor(Math.random() * 1000);
      navigate(`/post/${generatedId}`);
    }
  };

  const colorOptions = [
    { color: '#FFE2AD', label: '베이지' },
    { color: '#ECD9FF', label: '퍼플' },
    { color: '#B1E4FF', label: '블루' },
    { color: '#D0F5C3', label: '그린' },
  ];

  return (
    <CreateColorPageContainer>
      <Header>
        <LogoButton onClick={() => navigate('/')}>Rolling</LogoButton>
      </Header>

      <ToSection>
        <ToHeading>To.</ToHeading>
        <ToInput
          type="text"
          placeholder="받는 사람 이름을 입력해 주세요."
          value={toValue}
          onChange={(e) => {
            setToValue(e.target.value);
            setError(false);
          }}
          onBlur={handleBlur}
          error={error}
        />
        {error && <ErrorMessage>값을 입력해 주세요.</ErrorMessage>}
      </ToSection>

      <BackgroundSection>
        <BackgroundHeading>배경화면을 선택해 주세요.</BackgroundHeading>
        <BackgroundDescription>
          컬러를 선택하거나, 이미지를 선택할 수 있습니다.
        </BackgroundDescription>
        <ToggleSection>
          <ToggleButton active>컬러</ToggleButton>
          <ToggleButton>이미지</ToggleButton>
        </ToggleSection>
        <ColorOptions>
          {colorOptions.map((option, index) => (
            <ColorBox
              key={index}
              color={option.color}
              selected={selectedColor === option.color}
              onClick={() => setSelectedColor(option.color)}
            >
              {selectedColor === option.color && (
                <CheckmarkOverlay>✔</CheckmarkOverlay>
              )}
            </ColorBox>
          ))}
        </ColorOptions>
      </BackgroundSection>

      <CreateButton onClick={handleCreate} disabled={!toValue.trim()}>
        생성하기
      </CreateButton>
    </CreateColorPageContainer>
  );
};

export default CreateColorPage;
