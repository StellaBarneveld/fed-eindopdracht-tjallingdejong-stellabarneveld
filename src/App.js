import starsign from './starsign_1.svg';
//import starsign2 from './starsign.svg';

import './App.css';

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
  });

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <a href=''>
          <h1>Generate a new quote</h1>
          </a>      
        <img src= {starsign} className="App-logo" alt="Starsigns" />
        {/* // <img src= {starsign2} className="App-logo" alt='Starsigns'/> */}
      </header>
    </div>
  );
}

export default App;
