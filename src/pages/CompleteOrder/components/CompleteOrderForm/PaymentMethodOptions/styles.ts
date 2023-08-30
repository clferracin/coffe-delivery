import { styled } from "styled-components";

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.2rem;

  > p {
    color: ${({theme}) => theme.colors["base-error"]};
    grid-column: span 3;
  }
`