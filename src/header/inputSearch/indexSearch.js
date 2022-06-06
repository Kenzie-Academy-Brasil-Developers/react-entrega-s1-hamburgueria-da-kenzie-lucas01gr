import { useState } from "react";
import "./stylesSearch.css";

function InputSearch({ showProducts }) {
  const [search, setSearch] = useState("");

  return (
    <div className="divContainer">
      <input
        className="input"
        placeholder="Digitar Pesquisa"
        onChange={(event) => setSearch(event.target.value)}
      />
      <button className="button" onClick={() => showProducts(search)}>
        Pesquisa
      </button>
    </div>
  );
}
export default InputSearch;
