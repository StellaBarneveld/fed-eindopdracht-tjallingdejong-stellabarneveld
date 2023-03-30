import React, { useState, useEffect } from 'react';
import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
import './App.css';
import RandomQuote from './quote';

export default function App (){
  const [quote, setQuote] = useState();
const [img, setImg] = useState();
const generateQuote = (e) => {

  e.preventDefault();

  fetch('https://type.fit/api/quotes')
  .then(results => results.json())
  .then(data => {
      console.log(data)
      let randomNumber = Math.round(Math.random() * (data.length - 0) + 0);
      setQuote(data[randomNumber].text)

  });

  fetch('image.json')
  .then(results => results.json())
  .then(data => {
      console.log(data.images)
      let randomNumber = Math.round(Math.random() * (data.images.length - 0) + 0);
      setImg(data.images[randomNumber])
      console.log(img)
  });       

}

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(data);
  }, []);

  useEffect(() => {
    console.log(favorites);
  }, [favorites]);

  function handleFavorite(id) {
    const newFavorites = favorites.map(item => {
      return item.id === id ? { ...item, favorite: !item.favorite } : item;
    });

    setFavorites(newFavorites);
  }

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
      <ul>
        {favorites.map((item, i) => (
          <li key={i}>
            {item.name}{" "}
            <button
              onClick={() => {
                handleFavorite(item.id);
              }}
            >
              {item.favorite === true ? "Remove" : "Add"}
            </button>
          </li>
        ))}
      </ul>

      <h1>Favorite list</h1>
      <ul>
        {favorites.map(item =>
          item.favorite === true ? <li key={item.id}>{item.name}</li> : null
        )}
      </ul>

    </div>
  );
}