import React from 'react';
import styled from 'styled-components';

// 관계에 따라 스타일을 동적으로 변경
export const CardRelation = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ relation }) =>
    relation === '지인'
      ? 'var(--beige-100)'
      : relation === '가족'
        ? 'var(--green-100)'
        : relation === '동료'
          ? 'var(--purple-100)'
          : relation === '친구'
            ? 'var(--blue-100)'
            : 'pink'};
  border-radius: 4px;
`;

export const CardRealtionText = styled.div`
  width: 25px;
  height: 20px;
  margin: 0 auto;
  background-color: ${({ relation }) =>
    relation === '지인'
      ? 'var(--beige-100)'
      : relation === '가족'
        ? 'var(--green-100)'
        : relation === '동료'
          ? 'var(--purple-100)'
          : relation === '친구'
            ? 'var(--blue-100)'
            : 'pink'};
`;

const CardRelationComponent = ({ relation }) => {
  let relationText;
  let textColor;

  // 각 관계별 텍스트와 색상 설정
  if (relation === '지인') {
    relationText = '지인';
    textColor = 'var(--beige-500)';
  } else if (relation === '가족') {
    relationText = '가족';
    textColor = 'var(--green-500)';
  } else if (relation === '동료') {
    relationText = '동료';
    textColor = 'var(--purple-600)';
  } else if (relation === '친구') {
    relationText = '친구';
    textColor = 'var(--blue-500)';
  }

  return (
    <CardRelation relation={relation}>
      <CardRealtionText relation={relation}>
        <p className="text-xs font-regular" style={{ color: textColor }}>
          {relationText}
        </p>
      </CardRealtionText>
    </CardRelation>
  );
};

export default CardRelationComponent;
