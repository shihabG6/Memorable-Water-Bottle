import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart,setCart]=useState([]);
  useEffect(() => {
    fetch("../../../public/data/public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  
  const handelToCartAdd = bottle =>{
    const newCart = [...cart,bottle];
    setCart(newCart);
  }

  return (
    <div>
      <h3>Bottles Hear: {bottles.length}</h3>
      <h4>Cart: {cart.length}</h4>
      <div
        style={{
          borderRadius: "20px",
          display: "grid",
          gridTemplateColumns: "repeat(3,1fr)",
          gap: "10px",
        }}
      >
        {bottles.map((bottle, index) => (
          <Bottle 
          bottle={bottle}
          handelToCartAdd={handelToCartAdd}
          key={index}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
