import React from 'react';
import { useQuery } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { ProductsData, addProductsList } from '../redux/productsList';
import { ReducerType } from '../redux/rootReducer';
import { httpGet } from '../util/http';
import SearchBar from '../components/SearchBar';
import ProductsSection from '../components/ProductsSection';
import { getCurrentSearchOption, getCurrentSearchWord } from '../util/getSessionStorage';
import '../styles/searchpage.scss';

interface SystemError {
  code: string;
  message: string;
}

export default function ProductSearchPage() {
  const products = useSelector<ReducerType, ProductsData>((state) => state.productsList);
  const dispatch = useDispatch();
  const { isLoading } = useQuery(['products'], () => httpGet('/products?limit=100'), {
    refetchOnWindowFocus: true,
    staleTime: 3 * 60 * 1000,
    onError: (error: SystemError) => alert(error),
    onSuccess: (data) =>
      dispatch(
        addProductsList({ option: getCurrentSearchOption(), word: getCurrentSearchWord(), allProducts: data.products })
      ),
  });

  return (
    <div className="search_page_wrapper">
      <header className="search_header">
        <div className="search_top_bar">상품 검색</div>
        <SearchBar />
      </header>
      {isLoading ? (
        <main>
          <div id="loading_component">loading...</div>
        </main>
      ) : (
        <main>
          <div className="total_data">검색된 데이터: {products.total}건</div>
          <ProductsSection />
        </main>
      )}
    </div>
  );
}
