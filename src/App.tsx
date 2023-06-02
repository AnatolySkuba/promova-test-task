import React from 'react';
import { QueryClientProvider } from 'react-query';

import AppRouter from 'router/AppRouter';
import queryClient from 'configs/queryClient';

import './App.css';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
