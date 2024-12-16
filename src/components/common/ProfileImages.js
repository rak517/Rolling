import styled from 'styled-components';

const ProfileGroup = styled.div`
  display: flex;
  align-items: center;
  z-index: 0};
`;

const ProfileImage = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 5rem;
  border: 0.15rem solid var(--white);
  border-color: var(--white);
  margin-left: -1rem;

  &:first-child {
    margin: 0;
  }
`;

const MoreProfiles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0.6rem;
  width: 3.3rem;
  height: 2.8rem;
  border-radius: 3rem;
  background-color: var(--white);
  color: var(--gray-500);
  margin-left: -1rem;
`;

function ProfileImages({ recentMessages, backgroundImageURL }) {
  const maxVisibleProfiles = 3;
  const visibleProfiles = recentMessages.slice(0, maxVisibleProfiles);
  const remainingProfiles = recentMessages.length - maxVisibleProfiles;

  return (
    <ProfileGroup>
      {visibleProfiles.map((message) => (
        <ProfileImage
          key={message.id}
          src={message.profileImageURL}
          alt={`${message.sender} 프로필 이미지`}
        />
      ))}
      {remainingProfiles > 0 && (
        <MoreProfiles className="text-2xs">+{remainingProfiles}</MoreProfiles>
      )}
    </ProfileGroup>
  );
}

export default ProfileImages;
