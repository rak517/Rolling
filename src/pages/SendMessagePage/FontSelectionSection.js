import React from 'react';
import { Section, SectionHeading, Select } from '../../styles/SendMessagePage/FontSelectionSection.styled';

const FontSelectionSection = ({ font, setFont }) => (
  <Section>
    <SectionHeading>폰트 선택</SectionHeading>
    <Select value={font} onChange={(e) => setFont(e.target.value)}>
      <option value="Noto Sans">Noto Sans</option>
      <option value="Pretendard">Pretendard</option>
      <option value="Roboto">Roboto</option>
      <option value="Arial">Arial</option>
    </Select>
  </Section>
);

export default FontSelectionSection;
