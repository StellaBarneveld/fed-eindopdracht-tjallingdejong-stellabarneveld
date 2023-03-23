import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
//import starsign2 from './starsign.svg';

import './App.css';

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

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
        <div className='divje'>
        <a  href=''>
          <h1>Generate a new quote</h1>
          </a>     
        </div>
      </header>
    </div>
  );
}

export default App;
