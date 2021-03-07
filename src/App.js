

import logo from './logo.svg';
import './App.css';

function App() {
//   let name = "Dr. Mahfuz";
//   let person = {
//     name: "bayzed islam",
//     job:"singer"
//   };
//   let style11 = {
//     color: 'red',
//     backgroundColor:'white'
// };
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
        {/* <p style={ style11}>My heading file:{5 + 7} and name is : {name} and object property is : {person.job}</p>
        <p style={{backgroundColor:'cyan'}}> My first React paragraph </p> */}
        <Person></Person>
      </header>
    </div>
  );
}

function Person() {
  return <div>
    <h1>This is bayzed</h1>
    <h3>Hero of the Year</h3>
  </div>
}

export default App;
