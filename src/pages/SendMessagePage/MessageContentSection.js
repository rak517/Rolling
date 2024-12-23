import React from 'react';
import { Section, SectionHeading, TextArea } from '../../styles/SendMessagePage/MessageContentSection.styled';

const MessageContentSection = ({ messageContent, setMessageContent }) => (
  <Section>
    <SectionHeading>내용을 입력해 주세요</SectionHeading>
    <TextArea
      placeholder="메시지를 입력해 주세요."
      value={messageContent}
      onChange={(e) => setMessageContent(e.target.value)}
    />
  </Section>
);

export default MessageContentSection;
