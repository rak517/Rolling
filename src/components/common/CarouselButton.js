import styled from 'styled-components';
import CarouselLeft from '../../assets/icons/carousel-left.svg';
import CarouselRight from '../../assets/icons/carousel-right.svg';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 4rem;
  border: 0.1rem solid #dadcdf;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(4px);
  cursor: pointer;
  z-index: 10;

  &:hover {
    background-color: rgba(255, 255, 255, 1);
  }

  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${(props) => (props.direction === 'left' ? 'left: -2rem;' : 'right: -2rem;')}
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visible')};
  z-index: 2;

  @media (max-width: 1248px) {
    display: none !important;
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

function CarouselButton({ direction, onClick, hidden }) {
  return (
    <Button direction={direction} onClick={onClick} hidden={hidden}>
      <Icon
        src={direction === 'left' ? CarouselLeft : CarouselRight}
        alt={`${direction} arrow`}
      ></Icon>
    </Button>
  );
}

export default CarouselButton;
