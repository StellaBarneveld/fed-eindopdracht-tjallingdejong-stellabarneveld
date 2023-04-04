import React from "react";

class Favorite extends React.Component {
  render() {
    const fav = this.props.quoteFav.map(item => (
      <div className="quote" key={item.id}>
          <img className="image" src={item.image} alt={item.name} />
        <div className="descnya">
          <h3>{item.quote}</h3>
            <button onClick={() => this.props.delete(item.id)}>
              Delete from Favorite
            </button>
        </div>
      </div>
    ));
    return (
      <div>
        <h2>Favorite</h2>
        {fav}
      </div>
    );
  }
}

export default Favorite;