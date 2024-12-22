import React from 'react';
import fetchDeleteAllRolling from '../../api/Editpage/fetchDeleteAllRolling';
import styled from 'styled-components';
import Button from '../../components/ui/Button';
// edit 페이지랑 색상으로 구분이 필요해 보입니다. 그래서 버튼 색상 다르게 구성
// 삭제하기 버튼을 누르면 이 롤링페이퍼 전체가 사라지므로
// 제 생각에는 이 버튼에서는 롤링페이지의 주인 id인 경우만 삭제가 가능
// 반면, 개별 카드에 있는 쓰레기통 버튼은 롤링페이퍼의 주인 + 작성자
// 이 두명의 id를 확인해서 둘 중 하나의 id면 삭제할 수 있게 하는 것이 좋아보입니다.
const DetailPageEditBtn = styled(Button)`
  width: 9.2rem;

  @media (max-width: 1248px) {
    width: calc(100% - 4.8rem);
    height: 5.5rem;
    position: fixed;
    bottom: 2.4rem;
    z-index: 100;
  }
  @media (max-width: 768px) {
    width: calc(100% - 4.8rem);
    height: 5.6rem;
    position: fixed;
    bottom: 2.4rem;
    z-index: 100;
  }
`;

function EditPageAllDeleteButton({ recipientId, onDeleteSuccess }) {
  const handleDelete = async () => {
    const isConfirmed = window.confirm(
      '정말로 삭제하시겠습니까? 이 작업은 되돌릴 수 없습니다.',
    );

    if (!isConfirmed) {
      return; // 사용자가 취소한 경우 함수 종료
    }

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
