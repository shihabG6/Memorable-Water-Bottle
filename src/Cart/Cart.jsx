import './container.css'
const Cart = ({cart}) => {
  return (
    <div>
      <h2>Cart: {cart.length}</h2>
      <div className="cart-container">
        {
          cart.map((bottle,i) =><img key={i} src={bottle.img}></img>)
        }
      </div>
    </div>
  );
};

export default Cart;