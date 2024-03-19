import React, { useState } from 'react';
import { catalog } from "../../catalog";
import { BookCatalog } from "../../components/BookCatalog/BookCatalog";
import Pagination from "../../components/Pagination/Pagination";
import { CartItem } from '../../components/CartItem/CartItem';

export const CatalogPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage] = useState(6);
  const total = catalog.length;

  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = catalog.slice(startIndex, endIndex);

  const handlePageSwitch = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
    <CartItem />
      <BookCatalog catalog={displayedBooks} />
      <Pagination
        onPageChange={handlePageSwitch}
        totalCount={total}
        pageSize={booksPerPage}
        currentPage={currentPage}
      />
    </>
  );
};
