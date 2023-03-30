import React from "react";
import starsign from './starsign_gradient.svg';
import vrouw from './waarzegger.png'
import './style/App.css';
import RandomQuote from './components/quote';
import QuoteFavorite from './components/QuoteFavorite';

class App extends React.Component {
  state ={
  //   fetch("image.json")
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(data) {
  //   console.log(data.images[Math.random(0)*25])
  // });
  quotefav: [],
  isLoading: false
};

addToFavorite = id => {
  const data = this.state.quote.find(item => item.id === id);
  this.setState({
    quotefav: [...this.state.quotefav, data]
  });
};

deleteToFavorite = id => {
  const hapus = this.state.booksfav.filter(item => item.id !== id);
  this.setState({ booksfav: hapus });
};

addNewBook = data => {
  this.setState({
    books: [data, ...this.state.books]
  });
};

  render() {
    return (
      <div className="App">
        <header className="App-header">  
          <img src= {starsign} className="App-logo" alt="Starsigns" />
          <img src= {vrouw} className="vrouw" alt='Vrouw' />
          <div className='Rood'>
            <div className="container-left">
              <RandomQuote quote={this.state.books} add={this.addToFavorite} />
              <hr />
              <div classname="container-right">
                <QuoteFavorite
                quotefav={this.state.quotefav}
                delete={this.deleteToFavorite}
                />
              </div>
            </div>
            
          </div>
  
          <div className='divje'>
         
            <RandomQuote />
           
          </div>
  
        </header>
      </div>
    );
  }
}

export default App;
