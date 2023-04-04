
import React, {useEffect, useState} from 'react'

function RandomQuote(){

    const [quote, setQuote] = useState();
    const [img, setImg] = useState();
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if(localStorage.getItem('favorites')) {
            setFavorites(JSON.parse(localStorage.getItem('favorites')));
        }
    }, []);

    const addFavorites = (e) => {
        let fav = {
            quote: quote,
            img: img
        };

        setFavorites([...favorites, fav]);
    }

    // Use the useEffect hook, to fire a function that saves our favorites state
    // to the localStorage.
    useEffect(() => {
        if(favorites.length) {
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }, [favorites]);

    const generateQuote = (e) => {
    
        e.preventDefault();

        fetch('https://type.fit/api/quotes')
        .then(results => results.json())
        .then(data => {
            // console.log(data)
            let randomNumber = Math.round(Math.random() * (data.length - 0) + 0);
            setQuote(data[randomNumber].text)

        });

        fetch('image.json')
        .then(results => results.json())
        .then(data => {
            // console.log(data.images)
            let randomNumber = Math.round(Math.random() * (data.images.length - 0) + 0);
            setImg(data.images[randomNumber])
            // console.log(img)
        });       

    }

    return(
        <>
        { !quote &&
            <a href="" onClick={generateQuote} > 
                <h1 >Generate a quote</h1>
            </a>
        }
        { quote &&
        <div className='Rood'>
            <a className="Volgende" href="" onClick={generateQuote}> 
            <p>Generate a new Quote</p>
            </a>
          
        </div>
        }
 
        {/* <div className='quote'> */}
        <div className='quote' style={{backgroundImage: "url(" + img + ")"}}>
            <button onClick={addFavorites}>add to favorites</button>
            <p className='tekst'>{quote}</p>
            {/* <img className='image' src={img} /> */}
            
        </div>
        </>
    )
    
};

export default RandomQuote;