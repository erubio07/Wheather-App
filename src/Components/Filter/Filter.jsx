import React from "react";
import style from "./Filter.module.css";

function Filter({ handleInputSearch, handleSearch, input, handleSort }) {
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
        <select className={style.filtersselect} onChange={(e) => handleSort(e)}>
          <option className={style.filtersoption} value="-">
            -
          </option>
          <option className={style.filtersoption} value="A-Z">
            A-Z
          </option>
          <option className={style.filtersoption} value="Z-A">
            Z-A
          </option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
