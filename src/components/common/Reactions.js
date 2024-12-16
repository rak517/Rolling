import styled from 'styled-components';
import EmojiCard from './EmojiCard';

const ReactionGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.8rem;
  margin-top: 1.6rem;
`;

function Reactions({ topReactions }) {
  return (
    <ReactionGroup>
      {topReactions.map((reaction) => (
        <EmojiCard emoji={reaction.emoji} count={reaction.count} />
      ))}
    </ReactionGroup>
  );
}

export default Reactions;
