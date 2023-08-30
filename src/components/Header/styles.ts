import styled, { css } from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
width: 100%;
//padding: 3.2rem 16rem;
background: ${({theme}) => theme.colors["base-background"]};
height: 10.4rem;
position: sticky;
top: 0;
left: 0;
z-index: 5;

> div {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

img {
  width: 8.5rem;
  height: 4rem;
}

`

export const HeaderButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;

`

interface HeaderButtonProps{
  variant: 'purple' | 'yellow';
}

export const HeaderButton = styled.button<HeaderButtonProps>`

  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 3.8rem;
  height: 3.8rem;
  gap: .4rem;
  border-radius: 0%.6rem;
  border: none;
  padding: .8rem;
  position: relative;
  font-size: ${({theme}) => theme.textSizes["text-regular-s"]};
  cursor: inherit;

  span {
    position: absolute;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    top: calc(-2rem / 2);
    right: calc(-2rem / 2);
    color:  ${({theme}) => theme.colors["base-white"]};

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
  }


  ${({ variant, theme }) => css`
    background: ${theme.colors[`brand-${variant}-light`]};
    color: ${theme.colors[`brand-${variant}-dark`]};

    span {
      background: ${({theme}) => theme.colors[`brand-${variant}-dark`]}
    }
  `}

  ${({ variant, theme }) => 
    variant === 'purple' &&
    css`
      svg {
        color: ${theme.colors["brand-purple"]};
      }
    `}

`