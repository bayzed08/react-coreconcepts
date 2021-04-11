

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const products = [
    { ProductName: "Adobe Photoshop", price: "100$" },
    { ProductName: "Windows 10", price: "2000$" },
    { ProductName: "PDF reader", price: "20$"}
  ];
  const nayoks = ["Anwar", "jafar", "Salman Shah","Rajjak", "Shuva"];
  const nayokName = nayoks.map(nayok => nayok);
  console.log(nayokName);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit  here <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Person name="Munna" Profession="Photographer"></Person>
        <Person></Person>
        <Person></Person>
        {/* <Products name={products[0].ProductName} price={products[0].price}></Products> */}
        {/* <Products products={products[0]}></Products>
       // <Products products={products[2]}></Products> */}

        <ul>
          {nayoks.map(nayok => <li>{nayok}</li>)}
          {products.map(product => <li>{product.ProductName}."   " .
            {product.price}</li>)}
          {products.map(product => <Products product={product} ></Products>)}
        </ul>
        <Counter></Counter>
        <Users></Users>
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => {
    console.log("Clicked");
    const newCount = count + 1;
    setCount(newCount);
  }
  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={handleIncrease} >increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onMouseLeave={() => setCount(count - 1) }>Decrease</button>
    </div>
  )
}

function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data))
  });
  return (
    <div>
      <h2>Dynamic users: {users.length}</h2>
      <ul>
        {users.map(user => <li>{user.name}</li>) }

      </ul>

    </div>
  )
}



const personStyle1 = {
  margin: '5px',
  padding: '5px',
  borderRadius: '10px',
  border:'2px solid cyan'
}
function Person(props) {

  return (
    <div style={personStyle1}>
      <h1> my Name: {props.name}</h1>
      <p> My Profession: {props.Profession}</p>
    </div>
  )
}

const ProductsStyle={
  margin: "10px",
  border: "2px solid red",
  borderRadius: "10px",
  backgroundColor: "lightgray",
  height: "300px",
  width:"350px"
}
function Products(props) {
  //console.log(props);
  return (
    <div style={ProductsStyle}>
      <h2>Product name: {props.ProductName}</h2>
      <h1>Price: {props.price}</h1>
      <button>Buy Now</button>
    </div>
  )
}

export default App;
