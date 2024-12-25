import { handleResponseError } from '../../utils/errorHandler';
import { HttpException } from '../../utils/exceptions';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const sendMessage = async (
  recipientId,
  sender,
  profileImageURL,
  relationship,
  content,
  font,
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/recipients/${recipientId}/messages/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sender,
          profileImageURL,
          relationship,
          content,
          font,
        }),
      },
    );

    // 응답이 실패했을 경우 404 에러는 무시하고 넘어감
    if (!response.ok && response.status !== 404) {
      handleResponseError(response); // 다른 에러 처리
      return null; // 에러 발생 시 null 반환
    }

    const data = await response.json();
    return data; // 응답 데이터 반환
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

export default sendMessage;
