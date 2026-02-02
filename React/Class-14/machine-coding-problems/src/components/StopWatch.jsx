import React, { useCallback, useRef, useState } from 'react'
import { formatToHHMMSS } from '../utils/dataTimeFormat';

const StopWatch = () => {

    const [timer, setTimer] = useState(0);

    const timerIdRef = useRef(null);

    const startClickHandler = useCallback(() => {
        timerIdRef.current = setInterval(() => {
            setTimer((prevState) => prevState + 1);
        }, 1000);
    }, []);

    const stopClickHandler = useCallback(() => {
        console.log(`Value of timerId ${timerIdRef.current}`);
        clearInterval(timerIdRef.current);
    }, []);

    const resetClickHandler = useCallback(() => {
        clearInterval(timerIdRef.current);
        setTimer(0);
    }, []);

    return (
        <div>
            <h2>Time: {formatToHHMMSS(timer)}</h2>
            <button onClick={startClickHandler}>Start</button>
            <button onClick={stopClickHandler}>Stop</button>
            <button onClick={resetClickHandler}>Reset</button>
        </div>
    )
}

export default StopWatch
