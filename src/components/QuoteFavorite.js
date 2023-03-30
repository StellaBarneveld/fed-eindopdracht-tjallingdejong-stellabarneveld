import React from "react";
import quote from "./quote";

function QuoteFavorite () {
    const fav = this.props.quotefav.map(item => (
      <div className="listquote" key={item.id}>
        <div className="quoteImage">
          <img className="imgstyle" src={item.image} alt={item.name} />
        </div>
        <div className="quote">
          {quote}
            <button onClick={() => this.props.delete(item.id)}>
              Delete from Favorite
            </button>
        </div>
      </div>
    ));
    return (
      <div>
            <button onClick={() => QuoteFavorite}>
              Add to Favorite
            </button>
      </div>
    );
  }

export default QuoteFavorite;