import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import './common/styles/reset.css'
import './index.css'
import App from './App.tsx'
import { store } from './state/store'

import { GlobalStyles } from './common/styles/global-styles.ts';
import { ThemeStyles } from './common/styles/default-theme-styles.ts';

import { deferRender } from './mocks/deferRender.ts'

const queryClient = new QueryClient()

deferRender().then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <Router>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <GlobalStyles />
            <ThemeStyles />
            <App />
          </QueryClientProvider>
        </Provider>
      </Router>
    </StrictMode>,
  )
})
