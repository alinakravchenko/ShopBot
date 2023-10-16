import { useState, useEffect } from 'react';
import './App.css';
import Card from './Components/Card/Card';
import Cart from './Components/Cart/Cart';
const {getData} = require("./db/db")
const foods = getData();
const tele = window.Telegram.WebApp;

function App() {
  const [cartItems, setCartItems]=useState([])

  useEffect(()=>{
    tele.ready();
  });
  const onAdd = (food)=>{
    const exist = cartItems.find((x) => x.id===food.id);
    if(exist){setCartItems(cartItems.map((x)=>x.id===food.id ? {...exist, quantity: exist.quantity +1} :x));} else {
      setCartItems([...cartItems, {...food, quantity:1}]);
    }
  }

  const onRemove = (food) => {const exist = cartItems.find((x) => x.id===food.id);
  if(exist === 1){
    setCartItems(cartItems.filter((x)=>x.id !==food.id));
  }else{
    setCartItems(cartItems.map((x)=>x.id===food.id ? {...exist, quantity: exist.quantity -1} :x))
  }
  }
  return (
    <div>
      <h1 className='heading'>Food Order</h1>
      <Cart cartItems={cartItems}/>
      <div className='cards__container'>
        {foods.map((food)=>{return(<Card food={food} key={food.id} onAdd={onAdd} onRemove={onRemove} /> 
        );})} 
      </div>
    </div>
  );
}

export default App;
