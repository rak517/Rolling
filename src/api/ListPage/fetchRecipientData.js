import { handleResponseError } from '../../utils/errorHandler';
import { HttpException } from '../../utils/exceptions';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const fetchRecipientData = async (limit = 10, offset = 0) => {
  const params = new URLSearchParams({ limit, offset });
  params.append('limit', limit);
  params.append('offset', offset);

  try {
    const response = await fetch(
      `${BASE_URL}/recipients/?${params.toString()}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

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
        '네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.',
      );
    }
  }
};

export default fetchRecipientData;