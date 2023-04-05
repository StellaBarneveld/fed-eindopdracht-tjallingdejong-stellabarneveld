import './Favorites.css';
import openBook from './bookopen.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import RandomQuote from './quote';
import { render } from '@testing-library/react';

function Favorites() {

    const [favs, setFavs] = useState([]);
    useEffect(()  => {
      setFavs(JSON.parse(localStorage.getItem('favorites')));
  }, []);

    

    

  return (
    <div className="favorites">
        {favs && 
            <div>
            <h1>favourites</h1>
            {favs.map((fav, i) => 
                <div id='favQuotes' className="favQuote" key={i}>
                    <h3 id='favTekst' className='scaleBoth'>{fav.quote}</h3>
                    <img id='favImg' className='scaleBoth' src={fav.img} />
                    
                </div>    
            )}
            
            
            </div>
        }
        
        

        <NavLink to={'/'} className="home-button">
            &larr;Go back
        </NavLink>
        
      <img src= {openBook} className="openBook" alt="Book Open" />
      
      
    </div>
    
  );
}

export default Favorites;
