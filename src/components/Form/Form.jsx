import React, { useState } from "react";

import cl from "./Form.module.css";

const Form = ({ onSearch }) => {
  const [form, setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(form.toLowerCase());
    setForm("");
  };

  return (
    <div>
      <form className={cl.form} onSubmit={handleSubmit}>
        <input
          className={cl.input}
          type="text"
          placeholder="Название покемона"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <button className={cl.button}>Поиск</button>
      </form>
    </div>
  );
};

export default Form;
