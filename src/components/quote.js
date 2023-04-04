
import React, {useEffect, useState} from 'react'

function RandomQuote(){

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

    return(
        <>
        { !quote &&
            <a href="" onClick={generateQuote} > 
                <h1 >Generate a new quote</h1>
            </a>
        }
        { quote &&
        <div className='Rood'>
            <a href="" onClick={generateQuote}> 
            <p> Huppeldepup</p>
            </a>
          
        </div>
        }
 
        <div className='quote'>
            {quote}
            <img src={img} />
        </div>
        </>
    )
    
};

export default RandomQuote;