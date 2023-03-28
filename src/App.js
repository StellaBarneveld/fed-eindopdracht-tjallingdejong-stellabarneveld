import React, {useEffect, useState} from 'react';
import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
import './App.css';
import RandomQuote from './quote';

  fetch("image.json")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.images[Math.random(0)*25])
  });
  

  

function App() {
  



  return (
    <div className="App">
      <header className="App-header">  
        <img src= {starsign} className="App-logo" alt="Starsigns" />
        <img src= {vrouw} className="vrouw" alt='Vrouw' />
        <div className='Rood'>
          
          
        </div>


        <div className='divje'>
       
          
          <RandomQuote />
         
        
        </div>


      </header>
    </div>
  );
}


export default App;
