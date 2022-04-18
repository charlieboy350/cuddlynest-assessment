import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';


const CountdownInput = (props) => {
    const [mins, setMins] = React.useState('');
    
    const getMins = (e) =>{
        const value = e.target.value;
        if(value < 0 || parseInt(value) == null) {
            return false;
        }
        setMins(parseInt(value)); 
    }

    
    return (
            <div className='countDownInput flex justify-center items-center'>
                <p>Countdown:</p>
                <input min={0} type={'number'} placeholder="(Min)" value={mins || ''} onChange={getMins}/>
                <button onClick={e=>props.start(mins)} disabled={!props.disabled || !mins || mins===''}>start</button>
            </div>
    )
}



CountdownInput.propTypes = {
    name: PropTypes.string
  };
export default CountdownInput;