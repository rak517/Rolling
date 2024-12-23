import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  LogoButton,
  CreateButton,
} from '../../styles/CreatePage/CreateMainPage.styled';
import ToSection from './ToSection';
import BackgroundSection from './BackgroundSection';
import Header from '../../components/layout/Header';
import createRolling from '../../api/CreatePage/createRolling'; // create API 추가

const CreateMainPage = () => {
  const navigate = useNavigate();
  const [toValue, setToValue] = useState('');
  const [error, setError] = useState(false);
  const [selectedColor, setSelectedColor] = useState('#FFE2AD');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // 로딩 상태 state

  const handleBlur = () => {
    if (!toValue.trim()) setError(true);
  };

  const handleCreate = async () => {
    if (!toValue.trim() || (!selectedColor && !selectedImage)) return;

    // api 보내기 위한 색상 매핑
    const colorMapping = {
      '#FFE2AD': 'beige',
      '#ECD9FF': 'purple',
      '#B1E4FF': 'blue',
      '#D0F5C3': 'green',
    };

    const apiColor = colorMapping[selectedColor];

    // 유효한 색상인지 확인
    if (!apiColor) {
      alert('유효하지 않은 배경색입니다.');
      return; // 색상이 유효하지 않으면 함수 종료
    }

    setIsLoading(true); // API 로딩 상태 활성화

    try {
      const response = await createRolling(toValue, apiColor);

      // API 응답이 성공적이고 생성된 ID가 존재하면 해당 페이지로 이동
      if (response && response.id) {
        navigate(`/post/${response.id}`);
      }
    } catch (error) {
      console.error('생성 실패:', error.message);
      alert('생성에 실패했습니다. 다시 시도해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <ToSection
          toValue={toValue}
          setToValue={setToValue}
          error={error}
          handleBlur={handleBlur}
        />
        <BackgroundSection
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
        />
        <CreateButton
          disabled={!toValue.trim() || isLoading}
          size="56"
          variant="primary"
          className="text-lg"
          onClick={handleCreate}
        >
          {isLoading ? '생성 중...' : '생성하기'}
        </CreateButton>
      </Container>
    </>
  );
};

export default CreateMainPage;
