import { handleResponseError } from '../../utils/errorHandler';
import { HttpException } from '../../utils/exceptions';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const createRolling = async (name, backgroundColor, backgroundImageURL) => {
  try {
    console.log('name:', name);
    console.log('backgroundColor:', backgroundColor);
    console.log('backgroundImageURL:', backgroundImageURL); // backgroundImage 값 확인

    const response = await fetch(`${BASE_URL}/recipients/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        backgroundColor,
        backgroundImageURL, // 이미지 선택 시 해당 값 전송, 아니면 null
      }),
    });

    if (!response.ok) {
      handleResponseError(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error instanceof HttpException) {
      throw error;
    } else {
      console.error('네트워크 오류', error);
      throw new Error(
        '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요',
      );
    }
  }
};

export default createRolling;
