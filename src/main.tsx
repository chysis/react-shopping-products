import React from 'react';
import ReactDOM from 'react-dom/client';

import { Global, ThemeProvider } from '@emotion/react';
import theme from './styles/theme.ts';
import globalStyles from './styles/globalStyles.ts';
import AppRouter from './router/AppRouter.tsx';
<<<<<<< HEAD
=======
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastProvider } from '@_context/ToastProvider.tsx';

const queryClient = new QueryClient();
>>>>>>> 9560a8eead974ee3fb4a1a0133cdef54db98ede2

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <Global styles={globalStyles()} />
      <AppRouter />
=======
      <ToastProvider>
        <QueryClientProvider client={queryClient}>
          <Global styles={globalStyles()} />
          <AppRouter />
        </QueryClientProvider>
      </ToastProvider>
>>>>>>> 9560a8eead974ee3fb4a1a0133cdef54db98ede2
    </ThemeProvider>
  </React.StrictMode>
);
