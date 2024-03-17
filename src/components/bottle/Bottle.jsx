import { useState } from "react";

const Bottle = ({ bottle,handelToCartAdd }) => {
  const [bayBottle,setBayBottle]=useState(false);
  console.log(bottle);
  const {
    id,
    category,
    name,
    quantity,
    price,
    ratingsCount,
    seller,
    img,
    stock,
  } = bottle;
  const handelBay = ()=>{
    setBayBottle(!bayBottle)
  }

  return (
    <div
      style={{
        border: "1px solid",
        padding: "10px ",
        borderRadius: "20px",
        marginBottom: "5px",
      }}
    >
      <img style={ { width: "200px",borderRadius:'4px'  } }  src={img} alt="" />
      <h3>{name}</h3>
      <h3>Price: {price}$</h3>
      <p>{seller}</p>
      <button onClick={handelToCartAdd}>Purchase</button>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <p>Quantity:{quantity}</p>
        <p>Stock:({stock})</p>
        <p>Rating: ({ratingsCount})</p>
      </div>
    </div>
  );
};

export default Bottle;
