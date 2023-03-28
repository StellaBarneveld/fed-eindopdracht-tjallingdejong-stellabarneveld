import React, {useEffect, useState} from 'react';


import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
import './App.css';
import RandomAlles from './quote';

  fetch("image.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.images[Math.random(0)*25])
  });
  

  

function App() {

  const [quote, setQuote] = useState();

  const generateQuote = () => {
    
    fetch('https://type.fit/api/quotes')
    .then(results => results.json())
    .then(data => {
        console.log(data)
        let randomNumber = Math.round(Math.random() * (data.length - 0) + 0);
        setQuote(data[randomNumber].text)
    })
  };

  return (
    <div className="App">
      <header className="App-header">  
        <img src= {starsign} className="App-logo" alt="Starsigns" />
        <img src= {vrouw} className="vrouw" alt='Vrouw' />
        <div className='Rood'>
          
          
        </div>


        <div className='divje'>
       
          <h1 onClick={generateQuote}>Generate a new quote</h1>
          {quote}
          {/* <RandomAlles/> */}
        
        </div>


      </header>
    </div>
  );
}


export default App;
