import RootRouter from '@components/commons/rootRouter';
import GlobalStyle from '@styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RootRouter />
      </ThemeProvider>
    </div>
  );
}

export default App;
