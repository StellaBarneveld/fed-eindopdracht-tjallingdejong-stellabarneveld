import React from 'react';
import './index.css';
import App from './App';

const [favorites, setFavorites] = useState([] as Array<number>);

<td> 
{favorites.includes(i) ? (
    <IoIosHeart
    onClick={() => addFav({items, i })}
    style={( color: 'red' )}
    />
) : (
    <IoIosHeartEmpty
    onClick={() => addFav({items, i })}
    style={( color: 'red' )}
    />
)}
</td>

const addFav = (props: any) => {
    let array = favorites;
    let addArray = true;
    array.map((item: any, key: number) => {
        if (item === props.i) {
            array.splice(key, 1) ;
            addArray = false;
        }
    }):
    if (addArray) {
    array.push (props.i);
    }
    setFavorites([...array])
}

setFavorites([...array])
localStorage.setItem("favorites", JSON.stringify (favorites)) ;

var storage = localStorage.getItem('favItem' + (props.i) || 'O')
if (storage == null) {
    localStorage.setItem(("favItem' + (props.)), JSON.stringify(props.items));
}
else {
    localStorage.removeItem("favItem' + (props.i));
}

const [favorites, setFavorites] = useState ([] as Array<number>);
const getArray = JSON.parse(localStorage.getItem('favorites') || 'O');

useEffect(() => {
    if (getArray !== 0) {
        setFavorites([...getArray])
    }
}, [])