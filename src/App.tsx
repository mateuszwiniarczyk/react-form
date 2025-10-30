import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/lib/styled';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <h1>React Form</h1>
  </ThemeProvider>
);

export default App;
