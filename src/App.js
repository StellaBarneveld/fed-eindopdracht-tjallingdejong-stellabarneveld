import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
import './App.css';
import RandomQuote from './quote';
import React, {useEffect, useState} from 'react'

function App() {
  const [data, setData] = useState([]);

  console.log (localStorage);

useEffect(() => {
  localStorage.setItem('dataKey', JSON.stringify(data));
}, [{RandomQuote}]);

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
        <div>
        <a href="" onClick={useState} > 
                <h1 >Add to Favourites</h1>
            </a>
        </div>

      </header>
    </div>
  );
}

export default App;
