
import React, {useEffect, useState} from 'react'



function RandomAlles(){
    const [text, setText] = useState()

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
        .then(results => results.json())
        .then(data => {
            console.log(data.length)
            let randomNumber = Math.round(Math.random() * (data.length - 0) + 0);
            setText(data[randomNumber].text)
        })
    }, [])

    return(
        <div>
            {text}
        </div>
    )
    
}

export default RandomAlles