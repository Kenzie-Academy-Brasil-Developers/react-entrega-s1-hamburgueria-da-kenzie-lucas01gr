import "./stylesCartProduct.css";

function CartProduct({ item, setCurrentSale, currentSale }) {
  const { name, category, img, id } = item;
  function del(event) {
    const idItem = +event.target.id;
    return setCurrentSale(currentSale.filter((e) => e.id !== idItem));
  }
  return (
    <div className="card">
      <img src={img} className="imgCarrinho" />
      <div className="divNomeDescricao">
        <h3 className="nome">{name}</h3>
        <p className="descricao">{category}</p>
      </div>
      <div className="divRemover">
        <button className="buttonRemover" id={id} onClick={(e) => del(e)}>
          Remover
        </button>
      </div>
    </div>
  );
}
export default CartProduct;
