
import { useState } from 'react';
import './App.css';
import Result from './Components/Result';

const secretNum = Math.floor(Math.random()*10+1)


function App() {

  const [term,setTerm] = useState();

  function handleChange(e){
      setTerm(e.target.value)
  }

  return (
    <div className='container'>
        <div className="head">
            <label htmlFor='term'>Guss the number between 1 to 10</label>
        </div>
        <input id='term' type="text"  name='term' onChange={handleChange}/>
        <Result secretNum={secretNum} term ={term}/>
    </div>
  );
}

export default App;
