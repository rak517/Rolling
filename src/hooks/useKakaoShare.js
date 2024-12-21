import { useEffect } from 'react';

const useKakaoShare = () => {
  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY);
      console.log('Kakao SDK initialized');
    }
  }, []);

  const shareToKakao = () => {
    if (window.Kakao && window.Kakao.isInitialized()) {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title: '🎉 롤링페이퍼로 마음을 전해보세요!',
          description:
            '친구들과 함께 소중한 순간을 롤링페이퍼에 담아보세요. 축하 메시지로 특별한 날을 더욱 빛내세요!',
          imageUrl:
            'https://cdn.sayun.studio/boottent/files/assets/codeit/portfolio/articles_bef5234f-f7c2-4f63-9f34-2d58703f1519.png',
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: '웹으로 보기',
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      });
    } else {
      console.error('Kakao SDK가 초기화되지 않았습니다.');
    }
  };

  return { shareToKakao };
};

export default useKakaoShare;
