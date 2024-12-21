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
  AllEmojiButton,
  AllEmojiDropdown,
  ButtonText,
} from './MessageStatusBar.style';
import ProfileImages from '../../common/ProfileImages';
import Reactions from '../../common/Reactions';
import EmojiCard from '../../common/EmojiCard';
import errow_down from '../../../assets/icons/arrow_down.svg';
import Button from '../../ui/Button';
import buttonIcon from '../../../assets/icons/button-icon.svg';
import shareButton from '../../../assets/icons/share-button.svg';

function MessageStatusBarPresenter({
  isEmojiPickerVisible,
  toggleEmojiPicker,
  onEmojiClick,
  isShareDropdownVisible,
  toggleShareDropdown,
  reactions,
  recipients,
  isAllEmojisVisible,
  toggleAllEmojis,
  handleKakaoShare,
  handleURLShare,
}) {
  return (
    <StatusBarContainer>
      <StatusBarWrapper>
        <TitleWrapper>
          <Title className="text-3xl font-bold">To. {recipients.name}</Title>
        </TitleWrapper>

        <StatusBarSection>
          <StatusBarSectionWrapperLeft>
            <ProfileImages
              recentMessages={recipients.recentMessages}
            ></ProfileImages>
            <MessageCount className="text-lg">
              <strong>{recipients.messageCount}</strong>명이 작성했어요!
            </MessageCount>
          </StatusBarSectionWrapperLeft>

          <StatusBarSectionWrapperRight>
            <ReactionsWrapper>
              <Reactions
                topReactions={recipients.topReactions}
                noMargin
              ></Reactions>
              <AllEmojiButton
                src={errow_down}
                alt="이모지 드롭다운"
                isRotated={isAllEmojisVisible}
                onClick={toggleAllEmojis}
              />
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
              <li onClick={handleKakaoShare}>카카오톡 공유</li>
              <li onClick={handleURLShare}>URL 공유</li>
            </ul>
          </ShareDropdownMenu>
        )}

        {isAllEmojisVisible && (
          <AllEmojiDropdown>
            {reactions.map((reaction) => (
              <EmojiCard
                key={reaction.id}
                emoji={reaction.emoji}
                count={reaction.count}
              />
            ))}
          </AllEmojiDropdown>
        )}
      </StatusBarWrapper>
    </StatusBarContainer>
  );
}

export default MessageStatusBarPresenter;
