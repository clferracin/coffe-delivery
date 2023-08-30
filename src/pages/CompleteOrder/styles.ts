import { styled } from "styled-components";

export const CompleteOrderContainer = styled.form`
  margin-top: 4rem;
  display: flex;
  justify-content: space-between;
  gap: 3.2rem;
`

export const SectionBaseStyle = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors["base-card"]};
  border-radius: .6rem;
  padding: 4rem;
`