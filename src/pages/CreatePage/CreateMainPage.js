import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
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
    // 유효한 배경색 매핑
    const colorMapping = {
      '#FFE2AD': 'beige',
      '#ECD9FF': 'purple',
      '#B1E4FF': 'blue',
      '#D0F5C3': 'green',
    };

    // 선택된 색상에 맞는 값을 API에서 요구하는 형식으로 변환
    const apiColor = colorMapping[selectedColor];
    const apiImage = selectedImage ? selectedImage : null; // 이미지가 선택되지 않으면 null

    // 상태 값 확인
    console.log('선택된 색상:', selectedColor);
    console.log('선택된 이미지:', selectedImage);

    if (!toValue.trim() || !apiColor) return; // 이름과 색상이 유효한지 확인

    setIsLoading(true); // 로딩 상태 활성화

    try {
      // 수정된 createRolling 호출: name, backgroundColor, backgroundImage
      const response = await createRolling(toValue, apiColor, apiImage);

      if (response && response.id) {
        navigate(`/post/${response.id}`);
      }
    } catch (error) {
      console.error(error);
      alert('생성에 실패했습니다.');
    } finally {
      setIsLoading(false); // 로딩 상태 비활성화
    }
  };

  useEffect(() => {
    // 상태 변경 후 로그로 확인
    console.log('현재 색상:', selectedColor);
    console.log('현재 이미지:', selectedImage);
  }, [selectedColor, selectedImage]);

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
