import { css, styled } from "styled-components";

export const PaymentMethodContainer = styled.div`
  input {
    visibility: hidden;
    appearance: none;
  }

  input:checked + label div {
    ${({ theme }) => css`
      background: ${theme.colors["brand-purple-light"]};
      border-color: ${theme.colors["brand-purple"]};

      &:hover {
        background: ${theme.colors["brand-purple-light"]};
      }
    `}
  }
`;

export const ContentContainer = styled.div`
  padding: 1.6rem;
  background: ${({theme}) => theme.colors["base-button"]};
  color: ${({theme}) => theme.colors["base-text"]};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.2rem;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: .6rem;
  height: 5.1rem;
  border: 1px solid ${({theme}) => theme.colors["base-button"]};
  transition: .4s;
  user-select: none;

  &:hover {
    background: ${({theme}) => theme.colors["base-hover"]};
    cursor: pointer;
  }

  svg {
    color: ${({theme}) => theme.colors["brand-purple"]};
  }
`