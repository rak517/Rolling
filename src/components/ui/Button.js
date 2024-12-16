import styled, { css } from 'styled-components';

const sizeStyles = {
  56: css`
    height: 5.6rem;
    padding: 14px 24px;
    border-radius: 1.2rem;
  `,

  40: css`
    height: 4rem;
    padding: 8px 16px;
    border-radius: 0.6rem;
  `,

  36: css`
    height: 3.6rem;
    padding: 6px 16px;
    border-radius: 0.6rem;
  `,

  28: css`
    height: 2.8rem;
    padding: 2px 16px;
    border-radius: 0.6rem;
  `,
};

const variantStyles = {
  primary: css`
    background-color: var(--purple-600);
    color: var(--white);
    border: none;

    &:hover {
      background-color: var(--purple-700);
    }

    &:active {
      background-color: var(--purple-800);
    }
  `,

  secondary: css`
    background-color: var(--white);
    border: 1px solid var(--purple-600);
    color: var(--purple-700);

    &:hover {
      background-color: var(--purple-100);
      color: var(--purple-600);
    }

    &:active {
      background-color: var(--purple-100);
      color: var(--purple-600);
    }
  `,

  outlined: css`
    background-color: var(--white);
    border: 1px solid var(--gray-300);

    &:hover {
      background-color: var(--gray-100);
    }

    &:active {
      background-color: var(--gray-100);
    }
  `,
};

const stateStyles = {
  disabled: css`
    background-color: var(--gray-300);
    color: var(--white);
  `,
};

const ButtonBase = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s,
    border-color 0.2s;

  ${({ size }) => sizeStyles[size]}
  ${({ variant }) => variantStyles[variant]}
  ${({ state }) => state === 'disabled' && stateStyles.disabled}

  /* PC에서 고정 너비 */
  width: ${({ fullWidth }) => (fullWidth ? '28rem' : 'auto')};

  /* 작은 화면에서 width를 100%로 변경 */
  @media (max-width: 1200px) {
    ${({ fullWidth }) =>
      fullWidth &&
      css`
        width: 100%;
      `}
  }
`;

function Button({ label, size, variant, state, className, fullWidth }) {
  return (
    <ButtonBase
      size={size}
      variant={variant}
      state={state}
      className={className}
      fullWidth={fullWidth}
    >
      {label}
    </ButtonBase>
  );
}

export default Button;
