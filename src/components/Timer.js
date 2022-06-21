import React from 'react';
import {useState, useEffect} from 'react';


const Timer =()=>{
    const [countdown, setcountdown] = useState('00:00');
    const [increment, setincrement] = useState(0)

    const startTimer =()=>{
        let startTime = new Date();
        startTime.setSeconds(startTime.getSeconds() + increment);
        let passedTime = setInterval(()=>{
            let total = Date.parse(startTime) - Date.parse(new Date());
            let seconds = Math.floor((total / 1000) % 60);
            setincrement(seconds);
            setcountdown('00:'+(seconds >9 ? seconds: '0'+seconds))
            if(total === 0){
                clearInterval(passedTime)
            };
        },1000)
    }

    const increaseTime = () => {
        setincrement((x)=>x+10);
    }

    const decreaseTime = () =>{
        if(increment <= 9){
            alert('cannot due negative time, amigo');
        }else{
            setincrement((x)=>x-10);
        }
    }

    useEffect(() => {
        setcountdown('00:'+(increment >9 ? increment: '0'+increment))
    });
    
    return(
        <div>
            <h2 id="h2Holder">{countdown}</h2>
            <button type="button" id="increaseTime" onClick={increaseTime}> + 10 seconds</button>
            <button type="button" id="decreaseTime" onClick={decreaseTime}> - 10 seconds</button>
            <button type="button" id="startCountdown" onClick={startTimer}> start</button>
        </div>

    );
}

export default Timer