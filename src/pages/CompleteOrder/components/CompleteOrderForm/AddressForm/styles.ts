import { styled } from "styled-components";

export const AddressFormContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 20rem 27.6rem 6rem;
  gap: 1.2rem;
  row-gap: 1.6rem;
  grid-auto-flow: dense;

.cep {
  grid-column: span 3;
  max-width: 20rem;
}

.street {
  grid-column: span 3;
}

.complement {
  grid-column: span 2;
}

`

