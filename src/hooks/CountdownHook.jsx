import React from 'react';
import moment from 'moment';



const CountdownHook = () => {
    const [intervalSpeed, setIntervalSpeed] = React.useState(1000)
    const [startCountdown, setCountdown] = React.useState(false);
    const [eventTime, setEventTime] = React.useState();
    const [visualDuration, setVisualDuration] = React.useState();
    const [controls, setControls] = React.useState(false)

    const [halfDuration, setHalfDuration] = React.useState()
    const [highlights, setHighlights] = React.useState();


    React.useEffect(()=>{
        if(startCountdown) {
            const currentTime = moment().unix();
            const diffTime = eventTime - currentTime;
            let duration = moment.duration(diffTime*1000, 'milliseconds');
            setHalfDuration(duration/2);
            setVisualDuration(duration);
        }
    },[startCountdown, eventTime])
    
    React.useEffect(()=>{
        const getHalfDuration = moment.duration(halfDuration, 'milliseconds').seconds();
        let tempInterval = null;
        if(visualDuration) {
            let duration = visualDuration;
            tempInterval = setInterval(()=>{
                    if(!controls) {
                        duration = moment.duration(duration - 1000, 'milliseconds');
                        
                        let updateHighlights = null
                        if(duration.seconds() <= getHalfDuration) {
                            updateHighlights = {
                                text: 'More than halfway there!',
                                style: 'normal'
                            }
                        }

                        if(duration.seconds() <= 20) {
                            updateHighlights = {
                                text: 'More than halfway there!',
                                style: 'alert'
                            };
                        }

                        if(duration.seconds() <= 10) {
                            updateHighlights = {
                                text: 'More than halfway there!',
                                style: 'alert',
                                animate: true
                            }
                        }

                        setHighlights(updateHighlights); 

                        if(duration.seconds() >= 0 ) { 
                            setVisualDuration(duration);
                        }
                        else {
                            setHighlights({
                                text: 'Times up!',
                                style: 'normal'
                            });
                            reset();
                            clearInterval(tempInterval);
                            return;
                        }
                    }
            }, intervalSpeed);
        }
        else {
            tempInterval && clearInterval(tempInterval)
        }
        return ()=>{clearInterval(tempInterval)}
    },[visualDuration, controls, intervalSpeed]);

    const reset = () => {
        setVisualDuration()
        setEventTime(null);
        setCountdown(false)
    } 

    const start = (mins)=>{
        if(!startCountdown) { 
            setEventTime(moment().add(mins,'m').unix());
            setCountdown(true); 
        } 
    }

    const generalControls = () => {
        setControls(!controls)
    }

    const speedControls = (v) => {
        setIntervalSpeed(1000/v);
    }

    return  { startCountdown, visualDuration, controls, highlights,  start, speedControls, generalControls}
}

export default CountdownHook;