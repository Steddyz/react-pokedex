import React from "react";

import cl from "./Form.module.css";

const Form = () => {
  return (
    <div>
      <form className={cl.form}>
        <input
          className={cl.input}
          type="text"
          placeholder="Название покемона"
        />
        <button className={cl.button}>Поиск</button>
      </form>
    </div>
  );
};

export default Form;
