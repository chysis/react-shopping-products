import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global, ThemeProvider } from '@emotion/react';
import theme from './styles/theme.ts';
import globalStyles from './styles/globalStyles.ts';
import AppRouter from './router/AppRouter.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@_context/ToastProvider.tsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyles()} />
          <AppRouter />
          <ReactQueryDevtools initialIsOpen={false} position='right' />
        </QueryClientProvider>
      </ToastProvider>
    </ThemeProvider>
  </React.StrictMode>
);
