import React from 'react'
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css';
import PeopleList from './PeopleList';
import FruitList from './FruitList';

function App() {

  const name = "sameer";
  const year = 2025;

  

  return ( 
    <div> 
      <h2>
    Hi, I am {name} and I have started my React journey in {year + 2}!
  </h2>

  {/* < Greeting username = "Sameer"  age={25}/>
  < Greeting username = "Alice"  age={30}/>
  < Greeting username = "Bob"  age={35}/> */}

<Counter />
  <PeopleList />
  <FruitList />

    </div>
  );
  
}

export default App;



