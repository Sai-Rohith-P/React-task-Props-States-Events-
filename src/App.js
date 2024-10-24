// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import './App.css'
import React, { useState } from 'react'
import Props from './Components/Props'


function App() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1)
  }
  const decrease = () => {
    if(count === 0 ){
      alert("Negative Numbers are Not Allowed....")
    }
     if(count > 0){
      setCount(count - 1)
     }

  }
  return (
    <>
      <div className='taskhead'> <h1 className='task'>Task</h1></div>
      <h2 className='taskName'>Properties in React (Props ):-</h2>
      <div className='Props'>
        <div>
          <h1>Users Data :</h1>
          <Props FirstName="Rohith" LastName="Sai" id="1" />
          <Props FirstName="Zeenath" LastName="Mam" id="2" />
          <Props FirstName="Vamsi" LastName="Sir" id="3" />
        </div>
      </div>
      <h2 className='taskName'>Hooks in React ( UseState ):-</h2>
      <div className="counterApp">
      <div><h1>Counter APP</h1></div>
        <div className="buttons">
          <button className='add' onClick={increase}>+</button>
          <span className='count'>{count}</span>
          <button className='sub' onClick={decrease}>-</button>
        </div>
      </div>
      <h2 className='taskName'>Events in React ( OnClick ):-</h2>
      <div className='Events'>
        <button onClick={()=>alert("This Alert is for On Click Event In React")}>Button</button>
      </div>
      <center><p>Ma'am, I Created this just for the task.</p></center>
    </>
  )
}

export default App

