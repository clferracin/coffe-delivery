
import { Router } from "./Router";
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default';
import { GlobalStyle } from './styles/global';
import { CartContextProvider } from "./contexts/CartContext";

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <CartContextProvider>
          <Router/>
        </CartContextProvider>
        <GlobalStyle/>
      </ThemeProvider>
    </BrowserRouter>
  )
}

