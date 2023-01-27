import React from 'react';
import RowPerPageDropdown from './RowPerPageDropdown';
import PageNavigator from './PageNavigator';

export default function ProductsFooter() {
  return (
    <footer className="products_page_footer">
      <RowPerPageDropdown />
      <PageNavigator />
    </footer>
  );
}
