import React from 'react';
import { getCurrentPage } from '../../../../../util/getSessionStorage';

export default function LessThenSix({ pageNumbers }: { pageNumbers: number[] }) {
  return (
    <div className="page_number_list">
      {pageNumbers.map((x) => (
        <button key={x} type="button" className={x + 1 === getCurrentPage() ? 'page_button_selected' : 'page_button'}>
          {x + 1}
        </button>
      ))}
    </div>
  );
}
