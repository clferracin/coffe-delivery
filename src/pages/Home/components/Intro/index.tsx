import { useTheme } from "styled-components";
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { IntroContainer, IntroContent, IntroTitle, 
  IntroImageContent, BenefitsContainer } from "./styles";
import { RegularText } from "../../../../components/Typography/styles";
import { InfoWithIcon } from "../../../../components/InfoWithIcon";
import CupOfCoffe from '../../../../assets/cup-of-coffe.svg'


export function Intro() {
  const { colors } = useTheme();

  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
            Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText size="l" color="subtitle" as='h3'>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
            </RegularText>
          </section>
          <BenefitsContainer>
            <InfoWithIcon
              iconBg={colors["brand-yellow-dark"]}
              icon={<ShoppingCart weight="fill"/>}
              text='Compra simples e segura'
            />
            <InfoWithIcon
              iconBg={colors["base-text"]}
              icon={<Package weight="fill"/>}
              text='Embalagem mantém o café intacto'
            />
            <InfoWithIcon
              iconBg={colors["brand-yellow"]}
              icon={<Timer weight="fill"/>}
              text='Entrega rápida e rastreada'
            />
            <InfoWithIcon
              iconBg={colors["brand-purple"]}
              icon={<Coffee weight="fill"/>}
              text='O café chega fresquinho até você'
            />
          </BenefitsContainer>
        </div>
        <IntroImageContent>
          <img src={CupOfCoffe} alt="Copo de café" />
        </IntroImageContent>
      </IntroContent>
    </IntroContainer>
  )
}