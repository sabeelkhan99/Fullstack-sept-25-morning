import React, { useState, useRef } from 'react'

const Timer = () => {

    // state survives re-render
    const [timer, setTimer] = useState(0);
    const [timerId, setTimerId] = useState(null);

    const timerRef = useRef(null); // {current: null}

    // Normal variable do not survive re-renders
    // let timerId = null;

    const startTimerHandler = () => {
        const newTimerId = setInterval(() => {
            setTimer((prevState) => prevState + 1);
        }, 1000);

        timerRef.current = newTimerId;
        console.log(`creating a timer with id ${newTimerId}`);
    }

    const stopTimerHandler = () => {
        clearInterval(timerRef.current);
        console.log(`Timer with id ${timerRef.current} got cleared`);
    }

    return (
        <div>
            <h2>Time: {timer}</h2>
            <button onClick={startTimerHandler}>Start</button>
            <button onClick={stopTimerHandler}>Stop</button>
        </div>
    )
}

export default Timer
