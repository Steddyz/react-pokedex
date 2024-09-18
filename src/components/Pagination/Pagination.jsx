import React from "react";

import cl from "./Pagination.module.css";

const Pagination = ({ onPageChange }) => {
  const nextPage = () => {
    onPageChange((prevPage) => prevPage + 10);
  };

  const previousPage = () => {
    onPageChange((prevPage) => (prevPage > 0 ? prevPage - 10 : 0));
  };

  return (
    <div className={cl.pagination}>
      <button onClick={previousPage} className={cl.arrow}>
        &#x2BC7;
      </button>
      <div className={cl.pagination_inner}>Pagination</div>
      <button onClick={nextPage} className={cl.arrow}>
        &#x2BC8;
      </button>
    </div>
  );
};

export default Pagination;
