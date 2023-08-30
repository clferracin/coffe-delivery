import { styled } from "styled-components";

export const CoffeeCartCardContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid ${({theme}) => theme.colors["base-button"]};
  padding-bottom: 2.4rem;
  margin-bottom: 2.4rem;

  > div {
    display: flex;
    align-items: center;
    gap: 2rem;
    img {
      height: 6.4rem;
      width: 6.4rem;
    }
  }

  > p {
    font-weight: 700;
    align-self: flex-start;
  }
`

export const ActionsContainer = styled.div`
  margin-top: .8rem;
  height: 3.2rem;
  display: flex;
  align-items: center;
  gap: .8rem;

  > div {
    max-width: 7.2rem;
    height: 100%;
  }
`

export const RemoveButton = styled.button`
  display: flex;
  align-items: center;
  gap: .4rem;
  color: ${({theme}) => theme.colors["base-text"]};
  font-size: 1.2rem;
  height: 100%;
  border: none;
  background: ${({theme}) => theme.colors["base-button"]};
  padding: 0 .8rem;
  border-radius: .6rem;
  transition: .4s;

  svg {
    color:${({theme}) => theme.colors["brand-purple"]};
  }

  &:hover {
    background: ${({theme}) => theme.colors["base-hover"]};
  }

`