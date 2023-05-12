import React from "react";
import style from "./Filter.module.css";

function Filter({ handleInputSearch, handleSearch, input }) {
  return (
    <div className={style.filters}>
      <div>
        <p className={style.p}>Buscar Ciudad</p>
        <input
          className={style.filtersinput}
          type="search"
          onChange={(e) => handleInputSearch(e)}
          value={input}
        ></input>
        <button
          className={style.filtersbutton}
          onClick={(e) => handleSearch(e)}
        >
          Search
        </button>
      </div>
      <div>
        <select className={style.filtersselect}>
          <option className={style.filtersoption}>A-Z</option>
          <option className={style.filtersoption}>Z-A</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
