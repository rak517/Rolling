import mockData from '../../../data/mockData.json';
import MessageStatusBarPresenter from './MessageStatusBarPresenter';
import { useState } from 'react';

function MessageStatusBarContainer() {
  const firstData = mockData[0];
  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible((prev) => !prev);
  };

  const handleEmojiClick = (event, emojiObject) => {
    setEmojiPickerVisible(false);
  };

  return (
    <MessageStatusBarPresenter
      data={firstData}
      isEmojiPickerVisible={isEmojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      onEmojiClick={handleEmojiClick}
    />
  );
}

export default MessageStatusBarContainer;
