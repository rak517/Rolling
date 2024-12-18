import styled from 'styled-components';
import EmojiCard from './EmojiCard';

const ReactionGroup = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 0.8rem;
  margin-top: ${(props) => (props.noMargin ? '0' : '1.6rem')};
`;

function Reactions({ topReactions, noMargin }) {
  return (
    <ReactionGroup noMargin={noMargin}>
      {topReactions.map((reaction) => (
        <EmojiCard emoji={reaction.emoji} count={reaction.count} />
      ))}
    </ReactionGroup>
  );
}

export default Reactions;
