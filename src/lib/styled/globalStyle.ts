import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    background-color: ${({ theme }) => theme.color.neutral};
    color: ${({ theme }) => theme.color.black};
    font-weight: 400;
    font-family: ${({ theme }) => theme.font.family.roboto};
    line-height: 1.5;
    font-size: 1.6rem;
    padding: 1.5rem;

    ${({ theme }) => theme.mq.md} {
      padding: 5rem;
    }
  }
`;
