import React from "react";
import axios from "axios";

function Cart() {
  axios
    .get("https://api.storerestapi.com/products/running-sneaker")
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return <div>Cart</div>;
}

export default Cart;
