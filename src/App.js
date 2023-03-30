import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
import './App.css';
import RandomQuote from './quote';


  

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
