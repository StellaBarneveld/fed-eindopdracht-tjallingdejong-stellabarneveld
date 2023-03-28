
import React, {useEffect, useState} from 'react'



function RandomQuote(){

      
    const [quote, setQuote] = useState();

    const generateQuote = (e) => {
    
        e.preventDefault();

        console.log("sdfsdfdf");

        fetch('https://type.fit/api/quotes')
        .then(results => results.json())
        .then(data => {
            console.log(data)
            let randomNumber = Math.round(Math.random() * (data.length - 0) + 0);
            setQuote(data[randomNumber].text)
        });

    }
  
     
    return(
        <>
        { !quote &&
            <a href="" onClick={generateQuote}> 
                <h1 >Generate a new quote</h1>
            </a>
        }
        { quote &&
        <div className='Rood'>
            <a href="" onClick={generateQuote}> 
            <p> HUppeldepup</p>
            </a>
          
        </div>
        }
 
        <div>
            {quote}
        </div>
        </>
    )
    
};

export default RandomQuote;