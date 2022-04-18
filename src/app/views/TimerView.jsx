import React from 'react';
import {Link} from 'react-router-dom';
import { FaRegPauseCircle,FaRegPlayCircle  } from "react-icons/fa";
import moment from 'moment';

// components
import CountdownInput from '../components/CountdownInput';
import RadioInput from '../components/RadioInput';

// hooks
import CountdownHook from '../../hooks/CountdownHook';

const TimerView = () => {
    const { startCountdown, visualDuration, controls, highlights,  start, speedControls, generalControls} = CountdownHook()
    
    

   

    return (
        <div className='timerView h-full relative flex justify-center items-center w-full flex-col'>
            
            <CountdownInput start={start} disabled={!startCountdown}/>
            <div className={` text-center mt-10 mb-6 ${highlights?.style ? 'opacity-100' : 'opacity-0'} ${highlights?.style === 'alert' ? 'text-red-700' : ''} ${highlights?.animate ? 'blink':''}`}>
                <h4>{highlights?.text || ' '} </h4>
            </div>


            <div className='timer text-center mb-6 flex justify-center items-center relative'>
                <h1 className={`${highlights?.animate ? 'blink':''}`}>{startCountdown && visualDuration ? moment.utc(visualDuration.as('milliseconds')).format('mm:ss') : '00:00'}</h1>
                <div onClick={generalControls} className='ml-4 cursor-pointer absolute right-[-90px]'>
                    {startCountdown && (!controls ? <FaRegPauseCircle className='text-[65px]' title="Pause"/>: <FaRegPlayCircle className='text-[65px]' title="Play"/>)}
                </div>
            </div>

            <div className='timer text-center mb-6 flex justify-center items-center relative'>
                <RadioInput speedControls={speedControls}/>
            </div>
            
        </div>
    )
}

export default TimerView;