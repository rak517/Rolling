import EmojiPicker from 'emoji-picker-react';
import {
  StatusBarContainer,
  StatusBarWrapper,
  Title,
  TitleWrapper,
  StatusBarSection,
  StatusBarSectionWrapperLeft,
  StatusBarSectionWrapperRight,
  ReactionsWrapper,
  MessageCount,
  EmojiDropDown,
  ButtonWrapper,
  EmojiSelector,
  ShareDropdownMenu,
} from './MessageStatusBar.style';
import ProfileImages from '../../common/ProfileImages';
import Reactions from '../../common/Reactions';
import errow_down from '../../../assets/icons/arrow_down.svg';
import Button from '../../ui/Button';
import buttonIcon from '../../../assets/icons/button-icon.svg';
import shareButton from '../../../assets/icons/share-button.svg';

function MessageStatusBarPresenter({
  data,
  isEmojiPickerVisible,
  toggleEmojiPicker,
  onEmojiClick,
  isShareDropdownVisible,
  toggleShareDropdown,
}) {
  return (
    <StatusBarContainer>
      <StatusBarWrapper>
        <TitleWrapper>
          <Title className="text-3xl font-bold">To. {data.name}</Title>
        </TitleWrapper>

        <StatusBarSection>
          <StatusBarSectionWrapperLeft>
            <ProfileImages recentMessages={data.recentMessages}></ProfileImages>
            <MessageCount className="text-lg">
              <strong>{data.messageCount}</strong>명이 작성했어요!
            </MessageCount>
          </StatusBarSectionWrapperLeft>

          <StatusBarSectionWrapperRight>
            <ReactionsWrapper>
              <Reactions topReactions={data.topReactions} noMargin></Reactions>
              <img src={errow_down} alt="이모지 드롭다운" />
            </ReactionsWrapper>
            <ButtonWrapper>
              <Button
                size="36"
                variant="outlined"
                className="text-base"
                onClick={toggleEmojiPicker}
              >
                <EmojiDropDown src={buttonIcon} alt="추가 버튼" />
                추가
              </Button>
            </ButtonWrapper>
            <Button size="36" variant="outlined" onClick={toggleShareDropdown}>
              <img src={shareButton} alt="공유 버튼" />
            </Button>
          </StatusBarSectionWrapperRight>
        </StatusBarSection>

        {/* 이모지 선택 창 */}
        {isEmojiPickerVisible && (
          <EmojiSelector>
            <EmojiPicker onEmojiClick={onEmojiClick} />
          </EmojiSelector>
        )}

        {/* 공유 드롭다운 메뉴 */}
        {isShareDropdownVisible && (
          <ShareDropdownMenu className="text-base">
            <ul>
              <li>카카오톡 공유</li>
              <li>URL 공유</li>
            </ul>
          </ShareDropdownMenu>
        )}
      </StatusBarWrapper>
    </StatusBarContainer>
  );
}

export default MessageStatusBarPresenter;
