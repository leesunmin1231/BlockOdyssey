import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import ProductSearchPage from './pages/ProductSearchPage';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ProductSearchPage />
    </QueryClientProvider>
  );
}

export default App;
