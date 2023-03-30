import React, {useEffect, useState} from 'react'


function RandomPlaatje

const [plaatje, setPlaatje] = useState();

const generatePlaatje = (e) => {

    e.preventDefault();

    console.log("sdfsdfdf");


}

 
return(
    <>
    { !quote &&
        <a href="" onClick={generatePlaatje}> 
            <h1 >Generate a new quote</h1>
        </a>
    }
    { quote &&
    <div className='Rood'>
        <a href="" onClick={generatePlaatje}> 
        <p> HUppeldepup</p>
        </a>
      
    </div>
    }

    <div className='quote'>
        {plaatje}
    </div>
    </>
)

};



export default RandomPlaatje