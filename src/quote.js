
import React, {useEffect, useState} from 'react';

function RandomAlles(){
    const [text, setText] = useState()

    useEffect(() => {
        fetch('https://type.fit/api/quotes')
        .then(results => results.json())
        .then(data => {
            setText(data[0].text)
        })
    }, [])

    return(
        <div>
            {text}
        </div>
    )
    
}

export default RandomAlles