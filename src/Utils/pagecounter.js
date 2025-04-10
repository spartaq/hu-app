import React from 'react';

const PageCounter = ({ currentPage, totalPages }) => {
  return (
    <div className="page-counter">
      <span>{currentPage} / {totalPages}</span>
    </div>
  );
};

export default PageCounter;
