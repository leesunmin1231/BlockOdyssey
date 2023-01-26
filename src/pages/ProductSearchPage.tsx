import React from 'react';
import { useQuery } from 'react-query';
import { httpGet } from '../util/http';
import SearchBar from '../components/Header/SearchBar';
import ProductList from '../components/ProductSection/ProductList';
import PageNavigation from '../components/ProductSection/PageNavigation';
import '../styles/searchPage.scss';

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
        <div className="search_top_bar">상품 검색</div>
        <SearchBar />
      </header>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <main>
          <ProductList productData={data} />
          <PageNavigation />
        </main>
      )}
    </div>
  );
}
