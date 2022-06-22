import React from 'react';
import {useState, useEffect} from 'react';

//Will be used to store the interval for the displayed timer
let storedInterval;

const Timer =()=>{
    const [countdown, setcountdown] = useState('00:00');
    const [incrementMinute, setincrementMinute] = useState(0)


//Starts the displayed timer countdown
    const startTimer =()=>{
        let startTime = new Date();
        startTime.setMinutes(startTime.getMinutes() +incrementMinute);
        
        storedInterval = setInterval(()=>{
            let total = Date.parse(startTime) - Date.parse(new Date());
            const seconds = Math.floor((total / 1000) % 60);
            const minutes = Math.floor((total / 1000 / 60) % 60);
            setcountdown((minutes >9 ? minutes: '0'+minutes)+':'+(seconds >9 ? seconds: '0'+seconds))
            if(total === 0){
                clearInterval(storedInterval)
            };
        },1000)

    }

    const increaseTime = () => {
        if(incrementMinute < 60 ){
            setincrementMinute((x)=>x+1);
        }
    }

    const decreaseTime = () =>{
        if(incrementMinute <= 1){
            alert('cannot due negative time, amigo');
        }else{
            setincrementMinute((x)=>x-1);
        }
    }

    const stopTimer = () =>{
        setincrementMinute(0);
        setcountdown('00:00');
        clearInterval(storedInterval)
    }
//When and only when incrementMinute's state updates, reflect that change on the display
    useEffect(() => {
        setcountdown((incrementMinute >9 ? incrementMinute: '0'+incrementMinute)+':00')
    },[incrementMinute]);
    
    return(
        <div>
            <h2 id="h2Holder">{countdown}</h2>
            <button type="button" id="increaseTime" onClick={increaseTime}> + 1 minute</button>
            <button type="button" id="decreaseTime" onClick={decreaseTime}> - 1 minute</button>
            <button type="button" id="startCountdown" onClick={startTimer}> start</button>
            <button type="button" id="cancelCountdown" onClick={stopTimer}> stop</button>
        </div>

    );
}

export default Timer