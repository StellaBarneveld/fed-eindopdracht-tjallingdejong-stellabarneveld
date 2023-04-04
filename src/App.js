import React from 'react';

import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
import './App.css';
import RandomQuote from './components/quote';
import Favorite from './components/Favorites';
import ButtonComponent from './components/FavButton';
import FormInput from './components/FormInput';

function App() {
  addToFavorite = id => {
    const data = this.state.quote.find(item => item.id === id);
    this.setState({
      quitefav: [...this.state.quotefav, data]
    });
  };

  deleteToFavorite = id => {
    const hapus = this.state.quotefav.filter(item => item.id !== id);
    this.setState({ quotefav: hapus });
  };

  addNewQuote = data => {
    this.setState({
      quote: [data, ...this.state.quote]
    });
  };

  return (
    <div className="App">
      <header className="App-header">  
        <img src= {starsign} className="App-logo" alt="Starsigns" />
        <img src= {vrouw} className="vrouw" alt='Vrouw' />
        <div className='Rood'>
          
        </div>

        <div className='divje'>
          state = {            
            <RandomQuote />
          };
        </div>

      </header>
      <div className="container">
        <h1 className="center">Exercise : Add Favorite Quote</h1>
        <FormInput />
        <div className="wrap">
          <div className="container-left">
            <RandomQuote quote={this.state.quote} add={this.addToFavorite} />
            <hr />
          </div>
          <div className="container-right">
            <Favorites
              quotefav={this.state.quotefav}
              delete={this.deleteToFavorite}
            />
          </div>
          <div>
            <ButtonComponent load={this.state.isloading} />
          </div>
        </div>
      </div>
    </div>
  );

}

export default App;
