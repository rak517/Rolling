import styled from 'styled-components';

const EmojiCardWrapper = styled.div`
  display: flex;

  gap: 0.7rem;
  padding: 0.8rem 1.2rem;
  background-color: #0000008a;
  border-radius: 3.2rem;
  color: var(--white);
  z-index: 0;

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 2.1rem;
  }

  @media (max-width: 768px) {
    max-width: 5.5rem;
  }
`;

function EmojiCard({ emoji, count }) {
  return (
    <EmojiCardWrapper className="text-base">
      <span>{emoji}</span>
      <span>{count}</span>
    </EmojiCardWrapper>
  );
}

export default EmojiCard;
