import "./stylesProduct.css";

function Products({ products, handleClick }) {
  const { img, name, price, category, id } = products;
  return (
    <div className="ContainerProduct">
      <div className="divImg">
        <img className="img" alt="Produto" src={img} />
      </div>
      <h3 className="nome">{name}</h3>
      <p className="category">{category}</p>
      <p className="price">R$ {price}</p>
      <div className="divButton">
        <button onClick={() => handleClick(id)} className="button">
          Adicionar
        </button>
      </div>
    </div>
  );
}
export default Products;
