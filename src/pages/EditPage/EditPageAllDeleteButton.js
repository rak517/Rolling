import React from 'react';
import { DetailPageEditBtn } from '../DetailPage/DetailPage.style';
import fetchDeleteAllRolling from '../../api/Editpage/fetchDeleteAllRolling';
// edit 페이지랑 색상으로 구분이 필요해 보입니다. 그래서 버튼 색상 다르게 구성
// 삭제하기 버튼을 누르면 이 롤링페이퍼 전체가 사라지므로
// 제 생각에는 이 버튼에서는 롤링페이지의 주인 id인 경우만 삭제가 가능
// 반면, 개별 카드에 있는 쓰레기통 버튼은 롤링페이퍼의 주인 + 작성자
// 이 두명의 id를 확인해서 둘 중 하나의 id면 삭제할 수 있게 하는 것이 좋아보입니다.

function EditPageAllDeleteButton({ recipientId, onDeleteSuccess }) {
  const handleDelete = async () => {
    try {
      await fetchDeleteAllRolling(recipientId);
      onDeleteSuccess();
    } catch (error) {
      console.error('메시지 삭제 오류: ', error);
    } finally {
      window.location.reload();
    }
  };

  return (
    <DetailPageEditBtn
      size={40}
      variant="primary"
      fullWidth={92}
      onClick={handleDelete}
    >
      삭제하기
    </DetailPageEditBtn>
  );
}

export default EditPageAllDeleteButton;
