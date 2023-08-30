import { Button } from "../../../../../components/Button";
import { RegularText } from "../../../../../components/Typography/styles";
import { useCart } from "../../../../../hooks/useCart";
import { formatMoney } from "../../../../../utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5

export function ConfirmationSection() {

  const { cartItemsTotalPrice, cartQuantity } = useCart()

  const formattedCartItemsTotalPrice = formatMoney(cartItemsTotalPrice)
  const formattedCartTotal = formatMoney(cartItemsTotalPrice + DELIVERY_PRICE)
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return (
    <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total dos itens</RegularText>
        <RegularText>R$ {formattedCartItemsTotalPrice}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText>R$ {formattedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weight='700' color="subtitle" size="l">Total</RegularText>
        <RegularText weight='700' color="subtitle" size="l">R$ {formattedCartTotal}</RegularText>
      </div>
      <div className="last"></div>
      <Button text='Confirmar pedido' disabled={cartQuantity<=0} type="submit"/>
    </ConfirmationSectionContainer>
  )
}