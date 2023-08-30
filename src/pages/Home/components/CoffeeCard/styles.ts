import { styled } from "styled-components"
import { RegularText, TitleText } from "../../../../components/Typography/styles"

export const CoffeeCardContainer = styled.div`
  width: 100%;
  background: ${({theme}) => theme.colors["base-card"]};
  border-radius: .6rem 3.6rem;
  padding: 0 2rem 2rem 2rem;


  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    width: 12rem;
    height: 12rem;
    margin-top: -2rem;
  }
`

export const Tags = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .8rem;
  margin-top: 1.2rem;
  margin-bottom: 1.6rem;
  flex-wrap: wrap;

  span {
    background: ${({theme}) => theme.colors["brand-yellow-light"]};
    color: ${({theme}) => theme.colors["brand-yellow-dark"]};
    font-size: ${({theme}) => theme.textSizes["components-tag"]};
    text-transform: uppercase;
    padding: 0rem .8rem;
    border-radius: 100rem;
    font-weight: 700;
  }
`
export const CoffeeName = styled(TitleText).attrs({
  size: 's',
  color: 'subtitle',
  weight: 700,
})`
  margin-bottom: .8rem;
`

export const CoffeeDescription = styled(RegularText).attrs({
  size: 's',
  color: 'label',
})`
  margin-bottom: 3.3rem;
`

export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .3rem;

  }
`

export const AddCartWrapper = styled.div`
  display: flex;
  width: 11.8rem;

  > button {
    height: 3.8rem;
    width: 3.8rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme.colors["brand-purple-dark"]};
    color: ${({theme}) => theme.colors["base-card"]};
    border-radius: .6rem;
    margin-left: .8rem;
    transition: 0.4s;

    &:hover {
      background: ${({theme}) => theme.colors["brand-purple"]};
    }
  }
`
