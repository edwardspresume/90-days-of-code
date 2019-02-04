import React, { useState } from "react";
import styled from "styled-components";

function Product({ product, children }) {
  return (
    <StyledProducts>
      <h2>
        {product.name}: ${product.price}
      </h2>
      {children}
    </StyledProducts>
  );
}

function App() {
  const [products, setProducts] = useState([
    { name: "Shirt", price: 20 },
    { name: "Pants", price: 40 },
    { name: "Shoes", price: 60 },
    { name: "Hat", price: 20 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = index => setCart(cart.concat(products[index]));

  const calculateTotalPrice = () =>
    cart.reduce((price, product) => price + product.price, 0);

  return (
    <div className="App">
      {products.map((product, index) => (
        <Product product={product}>
          <button onClick={() => addToCart(index)}>Add to cart</button>
        </Product>
      ))}
      <hr />
      <p>Cart Items</p>
      <p> Total price: ${calculateTotalPrice()}</p>
      {cart.map(product => (
        <Product product={product} />
      ))}
    </div>
  );
}

const StyledProducts = styled.div`
  padding: 20px;
  max-width: 300px;
  border-radius: 5px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
`;
export default App;
