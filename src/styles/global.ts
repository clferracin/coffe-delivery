import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline:none;
}

:root {
  font-size: 62.5%;
}

body, input, button, textarea {
  font-family: ${({theme}) => theme.fonts.regular};
  font-weight: 400;
  font-size: ${({theme}) => theme.textSizes['text-regular-m']};
}

body {
  font-size: 1.6rem;
  line-height: 2rem;
  background: ${ ({ theme }) =>  theme.colors['base-background']};
  color: ${({theme}) => theme.colors['base-text'] };
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

::-webkit-scrollbar {
    width: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors["base-button"]}
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors["brand-purple"]}
  }

`