import React, { useState } from 'react';


const ItemCounter = () => {

    const [counter, setCounter] = useState(0);

    const handlerCounterUp = () => {
      setCounter((prevState) => prevState + 1);
    };
    const handlerCounterDown = () => {
      setCounter((prevState) => prevState - 1);
    };
        return (
    <div>
        <p> CONTADOR: {counter}</p>

	    <button onClick={handlerCounterUp}>SUMAR</button>
		<button disabled = { counter<=0} onClick={handlerCounterDown}>RESTAR</button>
    </div>
  )
}

export default ItemCounter