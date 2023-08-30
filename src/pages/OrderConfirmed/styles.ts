import { styled } from "styled-components";

export const OrderConfirmedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;

  h1 {
    color: ${({theme}) => theme.colors["brand-yellow-dark"]};
  }

  > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const OrderDetailsContainer = styled.div`
  padding: 4rem;
  border-radius: .6rem 3.6rem;
  background: ${({theme}) => theme.colors["base-background"]};
  min-width: 52.6rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: .7rem 3.7rem;
    background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  }

  
`