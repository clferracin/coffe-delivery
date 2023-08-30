import { css, styled } from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;

  > p {
    color: ${({theme}) => theme.colors["base-error"]}
  }
`

interface InputContainerProps {
  hasError: boolean;
}

export const InputContainer = styled.div<InputContainerProps>`
  height: 4.2rem;
  border-radius: .4rem;
  border: 1px solid ${({theme}) => theme.colors["base-button"]};
  background: ${({theme}) => theme.colors["base-input"]};
  transition: .4s;

  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;

  &:focus-within {
    border-color: ${({theme}) => theme.colors["brand-yellow-dark"]};
  }

  ${({ theme, hasError }) =>
    hasError &&
    css`
      border-color: ${theme.colors["base-error"]};
    `}

`

export const InputStyled = styled.input`
  flex: 1;
  background: none;
  border: none;
  padding: 1.2rem;
  height: 100%;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors["base-text"]};

  &::placeholder {
    color: ${({ theme }) => theme.colors["base-label"]};
  }
`

export const RightText = styled.p`
  font-size: 1.2rem;
  margin-right: 1.2rem;
  font-style: italic;
  color: ${({ theme }) => theme.colors["base-label"]};
`;