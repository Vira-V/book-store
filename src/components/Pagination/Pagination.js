import React from 'react';
import classnames from 'classnames';

import './Pagination.scss';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}) => {
  const lastPage = Math.ceil(totalCount / pageSize);

  const range = [];
  for (let i = 1; i <= lastPage; i++) {
    if (
      i === 1 ||
      i === lastPage ||
      (i >= currentPage - siblingCount && i <= currentPage + siblingCount)
    ) {
      range.push(i);
    }
  }

  if (range.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  return (
    <ul className={classnames('pagination-container', className)}>
      <li
        key="previous"
        className={classnames('pagination-item pagination-arrows', {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className="arrow arrow-left left" />
      </li>
      {range.map((pageNumber, index) => (
        <li
          key={index}
          className={classnames('pagination-item', {
            selected: pageNumber === currentPage,
          })}
          onClick={() => {
            onPageChange(pageNumber);
          }}
        >
          {pageNumber}
        </li>
      ))}
      <li
        key="next"
        className={classnames('pagination-item pagination-arrows', {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className="arrow arrow-right right" />
      </li>
    </ul>
  );
};

export default Pagination;
