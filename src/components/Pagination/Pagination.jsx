import React from "react";

import cl from "./Pagination.module.css";

const Pagination = () => {
  return (
    <div className={cl.pagination}>
      <div className={cl.arrow}>&#x2BC7;</div>
      <div className={cl.pagination_inner}>Pagination</div>
      <div className={cl.arrow}>&#x2BC8;</div>
    </div>
  );
};

export default Pagination;
