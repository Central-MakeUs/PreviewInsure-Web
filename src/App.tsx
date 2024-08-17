import RootRouter from '@components/commons/rootRouter';
import GlobalStyle from '@styles/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme';
import { useEffect } from 'react';
import { useStore } from '@stores/useStore';

function App() {
  //ios
  const { setPlatform } = useStore();
  useEffect(() => {
    window.addEventListener('message', (e: any) => {
      const data = JSON.parse(e.data);
      setPlatform(data.platform);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RootRouter />
    </ThemeProvider>
  );
}

export default App;
