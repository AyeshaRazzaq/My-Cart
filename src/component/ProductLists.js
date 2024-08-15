import React from 'react';
import Product from './Product.js';

export default function ProductLists(props) {
  return (
    props.productList.length > 0 ?
    props.productList.map((product, i) => {
      return (
        <Product 
          product={product} 
          key={i} 
          incrementQuantity={props.incrementQuantity} 
          decrementQuantity={props.decrementQuantity} 
          removeItem={props.removeItem}
          index={i} 
        />
      );
    })
    : <h1>No Products Exist In the Cart!</h1>
  );
}


