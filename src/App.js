// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Navbar from './component/navbar';
import ProductLists from './component/ProductLists';
import Footer from './component/Footer';
import AddItem from './component/AddItem';


function App() {
  const initialProductList = [
    {
      price:999,
      name: "T-Shirt",
      quantity: 0,
    },
    {
      price: 599,
      name: "Top",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(initialProductList);
  let [totalAmount, settotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount+= newProductList[index].price;
    settotalAmount(newTotalAmount)
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0)
      {
        newProductList[index].quantity--
        newTotalAmount -= newProductList[index].price;
      }
      settotalAmount(newTotalAmount)
      setProductList(newProductList);
  };

  const resetQuantity = () =>{
    let newProductList = [...productList];
  newProductList.map((initialProductList)=>{
  initialProductList.quantity =0
  })
  setProductList(newProductList);
  settotalAmount(0);
};

const removeItem = (index) => {
  let newProductList = [...productList];
  let newTotalAmount = totalAmount;
  newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
  newProductList.splice(index, 1);
  // console.log(newProductList);
  setProductList(newProductList);
  settotalAmount(newTotalAmount);
};

const handleAddItem = (name, price) => {
  let newProductList = [...productList];
  newProductList.push({
    price: price,
    name: name,
    quantity: 0
  });
  setProductList(newProductList);
};

  return (
    <>
      <Navbar/>
      <main className='container mt-5'>
        <AddItem AddItem={handleAddItem}/>
        <ProductLists 
          productList={productList} 
          incrementQuantity={incrementQuantity} 
          decrementQuantity={decrementQuantity} 
          removeItem={removeItem}
        />
        <Footer totalAmount={totalAmount} resetQuantity={resetQuantity}/>
      </main>
    </>
  );
}

export default App;

