import { useState } from "react";
import "./style.css";

function Header({ setFilteredProducts }) {
  const [filtered, setfilterd] = useState();

  const productsFiltered = (event) => {
    event.preventDefault();
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div className="burguerHeader">
        <p className="logo">
          Burguer
          <span>Kenzie</span>
        </p>
        <form className="pesquisar" onSubmit={productsFiltered}>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(event) => setfilterd(event.target.value)}
          ></input>
          <button>Pesquisar</button>
        </form>
      </div>
    </>
  );
}

export default Header;
