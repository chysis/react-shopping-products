import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global, ThemeProvider } from '@emotion/react';
import theme from './styles/theme.ts';
import globalStyles from './styles/globalStyles.ts';
import AppRouter from './router/AppRouter.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles()} />
      <AppRouter />
    </ThemeProvider>
  </React.StrictMode>
);
