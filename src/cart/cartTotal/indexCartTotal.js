import "./stylesCartTotal.css";

function CartTotal({ currentSale, setCurrentSale, valorTotal }) {
  function del() {
    return setCurrentSale([]);
  }
  return (
    <div className="divFooter">
      <div className="divTotalPrice">
        <p className="total">Total {currentSale.length}</p>
        <p className="rs">R$ {valorTotal.toFixed(2)}</p>
      </div>
      <div className="divButton">
        <button className="buttonRemover" onClick={del}>
          Remover todos
        </button>
      </div>
    </div>
  );
}
export default CartTotal;
