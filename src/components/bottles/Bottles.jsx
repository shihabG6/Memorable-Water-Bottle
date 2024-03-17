import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../bottle/Bottle";
import { getCartFromLT, setDataOnArray } from "../../utilitise/locolStorage";
import Cart from "../../Cart/Cart";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("../../../public/data/public/bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);


  useEffect(() => {
    if (bottles.length) {
      const dataFromLS = getCartFromLT();
      const seveCart = [];
      setCart(seveCart)

      for (const id of dataFromLS) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          seveCart.push(bottle);
        }
      }
    }
  }, [bottles]);


  const handelToCartAdd = (bottle) => {
    // console.log(bottle)
    const newCart = [...cart, bottle];
    setCart(newCart);
    setDataOnArray(bottle.id);
  };

  return (
    <div>
      <h3>Bottles Hear: {bottles.length}</h3>
      <Cart cart={cart} ></Cart>
      
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
