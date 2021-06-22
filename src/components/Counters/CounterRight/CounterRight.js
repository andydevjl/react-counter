import React, { useState } from 'react';
import '../style.css';

 const CounterRight = () => {
     const [counter, setCounter] = useState(0)


     const  handleClickIncrement = () => {
        setCounter(counter + 1);

     }

     const handleClickDecrement = () => {
         setCounter(counter -1)
         
         
     }

     const handleClickReset = () => {
         setCounter(0)
     }
     

     return (
         <div className='buttons'>
             {counter}
              <button data-testid='plus' className='buttons-right' onClick={handleClickIncrement}>
                +
            </button>
            <button data-testid='minus' className='buttons-right' onClick={handleClickDecrement}>
                -
            </button>
            <p>
            <button data-testid='reset' className='reset-button-right' onClick={handleClickReset}>Reset</button>
            </p>
         </div>
     )
 }


 export default CounterRight;