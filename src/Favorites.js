import './Favorites.css';
import openBook from './bookopen.png';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Favorites() {

    const [favs, setFavs] = useState([]);

    useEffect(() => {
        setFavs(JSON.parse(localStorage.getItem('favorites')));
    }, []);

  return (
    <div className="favorites">
        {favs && 
            <div>
            <h1>favourites</h1>
            {favs.map((fav, i) => 
                <div className="favQuote" key={i}>
                    {fav.quote}
                    {fav.img}
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
