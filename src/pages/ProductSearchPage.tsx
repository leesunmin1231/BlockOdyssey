import React from 'react';
import TopBar from '../components/TopBar';
import SearchBar from '../components/SearchBar';
import TotalSearch from '../components/TotalSearch';
import ProductList from '../components/ProductList';
import '../styles/searchpage.scss';

export default function ProductSearchPage() {
  return (
    <div className="search_page_wrapper">
      <header className="search_header">
        <TopBar />
        <SearchBar />
      </header>
      <section>
        <TotalSearch />
        <ProductList />
      </section>
      <footer className="page_navigation" />
    </div>
  );
}
