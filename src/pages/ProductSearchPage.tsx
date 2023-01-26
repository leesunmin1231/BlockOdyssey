import React from 'react';
import { useQuery } from 'react-query';
import { httpGet } from '../util/http';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import ProductList from '../components/ProductList';
import '../styles/searchpage.scss';

interface SystemError {
  code: string;
  message: string;
}

export default function ProductSearchPage() {
  const { data, isLoading } = useQuery(['products'], () => httpGet('/products?limit=100'), {
    refetchOnWindowFocus: true,
    staleTime: 3 * 60 * 1000,
    onError: (error: SystemError) => alert(error),
  });
  return (
    <div className="search_page_wrapper">
      <header className="search_header">
        <TopBar />
        <SearchBar />
      </header>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <main>
          <ProductList productData={data} />
          <footer className="page_navigation" />
        </main>
      )}
    </div>
  );
}
