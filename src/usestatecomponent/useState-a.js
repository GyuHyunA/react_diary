import {useState} from 'react'

function UseStateA() {

    const [arr, setarr] = useState(5);

    function decremet() {
        setarr(arr - 1); 
    }

    function increment() {
        setarr(arr + 1);
    }

    return (
        <>
         <button onClick={decremet}> - </button>   
         <span> {arr} </span>
         <button onClick={increment}> + </button>
        </>
    );
}

export default UseStateA;