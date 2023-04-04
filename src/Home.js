import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
import book from './book.png';
import './App.css';
import RandomQuote from './quote';
import { NavLink } from 'react-router-dom';

function Home() {

  return (
    <div className="App">

        <NavLink to={'/favorites'} className="favorites-link">
            <img src={book} />
        </NavLink>
        
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

export default Home;
