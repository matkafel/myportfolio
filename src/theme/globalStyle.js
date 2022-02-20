import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

  }
  html{
    font-size: 62.5%;
    font-family: 'Poppins', 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
		overflow-x: hidden;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
	}

	h1{
		color: ${({ theme }) => theme.headline};
	}

	body::-webkit-scrollbar {
    width: 1em;
}
	body::-webkit-scrollbar-thumb {
  background-color: darkgrey;
  outline: 1px solid slategrey;
}
  `