import { styled } from "styled-components";

export const ConfirmationSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .last {
    margin-bottom: .8rem;
  }
`