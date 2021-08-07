import React, { useState } from 'react';
import PropTypes from 'prop-types'




const CounterApp = ({value = 0}) => {
    const [counter, setCounter] = useState( value );

    const sumar = () => setCounter(counter + 1);
    
    const resta = () => setCounter(counter - 1);
 
    const reset = () => setCounter(value);
    
    return(
        <>
            <h1>CounterApp</h1>
            <h2>{ counter }</h2>
            <button onClick={sumar}> +1 </button>
            <button onClick={reset}> reset</button>
            <button onClick={resta}> -1 </button>
        </>
    );
}
CounterApp.propTypes = {
    value: PropTypes.number
}

//// todo lo anterios se puede crear con el atajo rafcp+tab
export default CounterApp;