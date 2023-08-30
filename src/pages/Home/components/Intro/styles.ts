import { styled } from "styled-components"
import HomeIntroBackground from '../../../../assets/home-intro-bg.svg'
import { rgba } from "polished"
import { TitleText } from "../../../../components/Typography/styles"

export const IntroContainer = styled.section`

  width: 100%;
  height: 54.4rem;
  background: ${({ theme }) => `url(${HomeIntroBackground}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

`

export const IntroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7.9rem;

`

export const IntroImageContent = styled.div`
    width: 47.6rem;
    height: 36rem;
`

export const IntroTitle = styled(TitleText)`
  margin-bottom: 1rem;
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 2rem;
  margin-top: 6.6rem;
`