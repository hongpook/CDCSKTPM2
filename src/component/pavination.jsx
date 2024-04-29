import React, { useState, useEffect } from 'react';

const Pagination = ({ totalPages, itemsPerPage, onPageChange }) => {
    const [currentPage, setCurrentPage] = useState(1);


    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        if (onPageChange) {
        onPageChange(pageNumber);
        }
    };

    const buttons = [];

    // Previous button
    buttons.push(
    <button key="previous" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
        Previous
    </button>
    );

    // Next button
    buttons.push(
    <button key="next" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
        Next
    </button>
    );

    // Page number buttons (optional)
    if (totalPages > 5) {
    const numPagesToShow = Math.min(5, totalPages);
    const startPage = Math.max(1, currentPage - Math.floor(numPagesToShow / 2));
    const endPage = Math.min(totalPages, startPage + numPagesToShow - 1);

    for (let i = startPage; i <= endPage; i++) {
        buttons.push(
        <button key={i} className={currentPage === i ? 'active' : ''} onClick={() => handlePageChange(i)}>
            {i}
        </button>
        );
    }
    } else {
    for (let i = 1; i <= totalPages; i++) {
        buttons.push(
        <button key={i} className={currentPage === i ? 'active' : ''} onClick={() => handlePageChange(i)}>
            {i}
        </button>
        );
    }
    }


    return (
        <div className="pagination">
        {buttons}
        </div>
    );
  
};

export default Pagination;