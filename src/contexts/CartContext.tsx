import { ReactNode, createContext, useState, useEffect } from "react";
import { Coffee } from "../pages/Home/components/CoffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotalPrice: number;
  removeItemFromCart: (cartItemId:number) => void
  addCoffeeToCart: (coffee: CartItem) => void
  changeCartItemQuantity: (cartItemId: number, type: 'increase' | 'decrease') => void
  cleanCart: () => void
}

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = 'coffeeDelivery:cartItems'

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children } : CartContextProviderProps) {

  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)
    if(storedCartItems) {
      return JSON.parse(storedCartItems)
    }
    return []
  })
  
  const cartQuantity = cartItems.length

  const cartItemsTotalPrice = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity
  }, 0) 

  function removeItemFromCart(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex((cartItem) => cartItem.id === cartItemId)
      if (coffeeExistsInCart >= 0) {
        draft.splice(coffeeExistsInCart, 1)
      }
    })

    setCartItems(newCart);
  }

  function addCoffeeToCart(coffee: CartItem){

    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffee.id
    )

    const newCart = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffee)
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
      }
    })

    setCartItems(newCart)
  }

  function changeCartItemQuantity(cartItemId: number, type: 'increase' | 'decrease') {
    const newCart = produce(cartItems, (draft) => {
      const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)
      if (coffeeExistsInCart >= 0) {
        const item = draft[coffeeExistsInCart]
        item.quantity = type==='increase' ? item.quantity + 1 : item.quantity - 1
      }
    })
    setCartItems(newCart)
  }

  function cleanCart() {
    setCartItems([]);
  }


  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
  },[cartItems])



  return (
    <CartContext.Provider value={{ cartItems, cartQuantity, cartItemsTotalPrice, addCoffeeToCart, changeCartItemQuantity, removeItemFromCart, cleanCart }}>
      {children}
    </CartContext.Provider>
  )
}