import { styled } from "styled-components";

export const ButtonContainer = styled.button`
  padding: 1.2rem .8rem;
  color: ${({theme}) => theme.colors["base-white"]};
  font-weight: 700;
  background: ${({theme}) => theme.colors["brand-yellow"]};
  font-size: ${({theme}) => theme.textSizes["components-button-g"]};
  border: none;
  border-radius: 0.6rem;
  text-transform: uppercase;
  transition: .4s;
  line-height: 2.24rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${({theme}) => theme.colors["brand-yellow-dark"]};
  }

`