import React from "react";

import cl from "./Header.module.css";

const Header = () => {
  return (
    <header className={cl.header}>
      <div className={cl.logo}>
        <img src="" alt="logo" />
      </div>
      <div className={cl.nav}>
        <ul className={cl.nav_inner}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
