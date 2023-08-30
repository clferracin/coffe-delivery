import { TitleText } from "../../../../components/Typography/styles";
import { coffees } from "../../../../data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeeList, OurCoffeesContainer } from "./styles";

export function OurCoffees() {

  return (
    <OurCoffeesContainer className="container">
      <TitleText size="l" color="subtitle">Nossos Cafés</TitleText>
      <CoffeeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>
        ))}
      </CoffeeList>
    </OurCoffeesContainer>
  )
}