import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from '@/lib/styled';
import { Contacts } from './features/contacts';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Contacts />
  </ThemeProvider>
);

export default App;
