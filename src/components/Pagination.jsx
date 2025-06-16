import React from 'react';

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  totalItems, 
  itemsPerPage 
}) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  return (
    <div className="pagination-container">
      <div className="pagination-wrapper">
        <div className="pagination-info">
          Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, totalItems)} of {totalItems} todos
        </div>
        
        <div className="pagination-controls">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-btn"
          >
            ⬅️ Previous
          </button>
          
          <div className="pagination-numbers">
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => onPageChange(index + 1)}
                className={`pagination-btn ${currentPage === index + 1 ? 'active' : ''}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-btn"
          >
            Next ➡️
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;