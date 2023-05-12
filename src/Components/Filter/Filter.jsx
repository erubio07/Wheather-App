import React from "react";

function Filter({ handleInputSearch, handleSearch, input }) {
  return (
    <div>
      <p>Buscar Ciudad</p>
      <input
        type="search"
        onChange={(e) => handleInputSearch(e)}
        value={input}
      ></input>
      <button onClick={(e) => handleSearch(e)}>Search</button>
    </div>
  );
}

export default Filter;
