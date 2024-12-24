import React from 'react';
import { Section, SectionHeading, Select } from '../../styles/SendMessagePage/RelationshipSection.styled';

const RelationshipSection = ({ relationship, setRelationship }) => (
  <Section>
    <SectionHeading>상대와의 관계</SectionHeading>
    <Select value={relationship} onChange={(e) => setRelationship(e.target.value)}>
      <option value="지인">지인</option>
      <option value="친구">친구</option>
      <option value="가족">가족</option>
      <option value="동료">동료</option>
    </Select>
  </Section>
);

export default RelationshipSection;
