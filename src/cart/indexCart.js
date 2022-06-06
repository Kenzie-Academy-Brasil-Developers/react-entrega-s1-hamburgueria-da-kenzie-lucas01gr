import "./stylesCart.css";
import CartProduct from "./cartProduct/indexCartProduct.js";
import CartTotal from "./cartTotal/indexCartTotal";

function Cart({ currentSale, setCurrentSale }) {
  const valorTotal = currentSale.reduce((valorAnterior, atualValue) => {
    return valorAnterior + atualValue.price;
  }, 0);

  return (
    <div className="ContainerCart">
      <div className="divH3">
        <h3 className="h3Carrinho">Carrinho de compras</h3>
      </div>
      {currentSale.length > 0 ? (
        <>
          <div className="divBody">
            {currentSale.map((item, index) => (
              <div className="divCarrinho" key={index}>
                <CartProduct
                  item={item}
                  setCurrentSale={setCurrentSale}
                  currentSale={currentSale}
                />
              </div>
            ))}
          </div>
          <div className="divTotal">
            <CartTotal
              currentSale={currentSale}
              setCurrentSale={setCurrentSale}
              valorTotal={valorTotal}
            />
          </div>
        </>
      ) : (
        <>
          <div className="divSacolaVazia">
            <h3 className="sacolaVazia">Sua Sacola está Vazia </h3>
            <p className="addItens">Adicione itens</p>
          </div>
          <div></div>
        </>
      )}
    </div>
  );
}
export default Cart;
