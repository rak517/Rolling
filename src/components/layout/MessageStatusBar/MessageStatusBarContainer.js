import MessageStatusBarPresenter from './MessageStatusBarPresenter';
import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { HttpException } from '../../../utils/exceptions';
import fetchRecipientReactions from '../../../api/DetailPage/fetchRecipientReactions';
import fetchRecipientsById from '../../../api/DetailPage/fetchRecipientsById';
import fetchAddReaction from '../../../api/DetailPage/fetchAddReaction';
import useKakaoShare from '../../../hooks/useKakaoShare';
import ToastContainer from '../../common/Toast';
import useOutsideClick from '../../../hooks/useOutsideClick';

function MessageStatusBarContainer() {
  const { id } = useParams();
  const [recipients, setRecipients] = useState(null);
  const [reactions, setReactions] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [isEmojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [isShareDropdownVisible, setShareDropdownVisible] = useState(false);
  const [isAllEmojisVisible, setAllEmojisVisible] = useState(false);

  const { shareToKakao } = useKakaoShare();

  const emojiPickerRef = useRef(null);
  const shareDropdownRef = useRef(null);
  const allEmojiDropdownRef = useRef(null);

  // 카카오톡 공유 핸들러
  const handleKakaoShare = useCallback(
    (addToast) => {
      shareToKakao();
      addToast('카카오톡으로 공유되었습니다.', 'success');
    },
    [shareToKakao],
  );

  // URL 공유 핸들러
  const handleURLShare = useCallback((addToast) => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        addToast('URL이 클립보드에 복사되었습니다.', 'success');
      })
      .catch((err) => {
        console.error('URL 복사 실패:', err);
        addToast('URL 복사에 실패했습니다.', 'error');
      });
  }, []);

  const getReactionsById = async () => {
    try {
      const data = await fetchRecipientReactions(id);
      setReactions(data.results);
    } catch (error) {
      if (error instanceof HttpException) {
        setError(error.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
      throw Error;
    }
  };

  const getRecipientById = async () => {
    try {
      const data = await fetchRecipientsById(id);
      setRecipients(data);
    } catch (error) {
      if (error instanceof HttpException) {
        setError(error.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
      throw Error;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        await Promise.all([getRecipientById(), getReactionsById()]);
      } catch (error) {
        console.error('Error in fetchData:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const toggleEmojiPicker = useCallback(() => {
    setEmojiPickerVisible((prev) => !prev);
  }, []);

  const toggleShareDropdown = useCallback(() => {
    setShareDropdownVisible((prev) => !prev);
  }, []);

  const toggleAllEmojis = useCallback(() => {
    setAllEmojisVisible((prev) => !prev);
  }, []);

  const closeDropdowns = useCallback(() => {
    if (isEmojiPickerVisible) toggleEmojiPicker();
    if (isShareDropdownVisible) toggleShareDropdown();
    if (isAllEmojisVisible) toggleAllEmojis();
  }, [
    isEmojiPickerVisible,
    isShareDropdownVisible,
    isAllEmojisVisible,
    toggleEmojiPicker,
    toggleShareDropdown,
    toggleAllEmojis,
  ]);

  useOutsideClick(emojiPickerRef, closeDropdowns);
  useOutsideClick(shareDropdownRef, closeDropdowns);
  useOutsideClick(allEmojiDropdownRef, closeDropdowns);

  const handleEmojiClick = async (emojiObject, event, addToast) => {
    setEmojiPickerVisible(false);
    const selectedEmoji = emojiObject.emoji;

    try {
      await fetchAddReaction(id, selectedEmoji, 'increase');
      addToast('이모지가 추가되었습니다.', 'success');
    } catch (error) {
      if (error instanceof HttpException) {
        setError(error.message);
      } else {
        setError('알 수 없는 오류가 발생했습니다.');
      }
      throw Error;
    }
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류: {error}</div>;
  }

  if (!recipients) {
    return <div>수신자를 찾을 수 없습니다.</div>;
  }

  return (
    <ToastContainer>
      {({ addToast }) => (
        <MessageStatusBarPresenter
          recipients={recipients}
          reactions={reactions}
          isEmojiPickerVisible={isEmojiPickerVisible}
          toggleEmojiPicker={toggleEmojiPicker}
          onEmojiClick={(emoji, event) =>
            handleEmojiClick(emoji, event, addToast)
          }
          isShareDropdownVisible={isShareDropdownVisible}
          toggleShareDropdown={toggleShareDropdown}
          isAllEmojisVisible={isAllEmojisVisible}
          toggleAllEmojis={toggleAllEmojis}
          handleKakaoShare={() => handleKakaoShare(addToast)}
          handleURLShare={() => handleURLShare(addToast)}
          emojiPickerRef={emojiPickerRef}
          shareDropdownRef={shareDropdownRef}
          allEmojiDropdownRef={allEmojiDropdownRef}
        />
      )}
    </ToastContainer>
  );
}

export default MessageStatusBarContainer;
