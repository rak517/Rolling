import { handleResponseError } from '../../utils/errorHandler'; // 에러 처리 함수
import { HttpException } from '../../utils/exceptions'; // HttpException 클래스

const BASE_URL = process.env.REACT_APP_BASE_URL;

// 메시지 삭제 함수
const fetchDeleteAllRolling = async (recipientId) => {
  try {
    const response = await fetch(`${BASE_URL}/recipients/${recipientId}/`, {
      method: 'DELETE', // DELETE 요청
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      handleResponseError(response); // 응답이 실패할 경우, 에러 처리 함수 호출
    }

    // 성공 시 204 상태 코드가 반환되므로 데이터를 반환하지 않음
    return;
  } catch (error) {
    if (error instanceof HttpException) {
      throw error; // 사용자 정의 예외 처리
    } else {
      console.error('네트워크 오류', error);
      throw new Error(
        '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요',
      );
    }
  }
};

export default fetchDeleteAllRolling;
