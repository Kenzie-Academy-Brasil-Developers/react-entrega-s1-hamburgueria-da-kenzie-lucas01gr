import Products from "./product/indexProduct";
import "./stylesProductsList.css";

function ProductsList({ productsList, handleClick }) {
  return (
    <div className="ContainerListProd">
      <div className="divPai">
        {productsList.map((item) => (
          <Products products={item} key={item.id} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}
export default ProductsList;
