import React, { useEffect, useRef, useState } from "react";

import { 
    START,
    PAUSE,
    CONTINUE,
    Hours,
    Minutes,
    Seconds,
    maxMins,
    maxSecs,
    buttonNameClassNameMapper,
} from './constants'

import './timer.scss';

function Timer() {

    const [firstButtonText, seFirstButtonText] = useState(START);
    const [isForwardTimer, setIsForwardTime] = useState(true);
    const hoursRef = useRef(0);
    const minutesRef = useRef(0);
    const secondsRef = useRef(0);
    const timerRef = useRef(null)
    // let timer;

    useEffect(() => {
        hoursRef.current.value = 0;
        minutesRef.current.value = 0;
        secondsRef.current.value = 0;
    }, [])

    // useEffect(() => {
    //     console.log('component updated: ', timer)
    // })

    const handleForwardTime = prevButtonText => {
        let seconds = Number(secondsRef.current.value)
        let minutes = Number(minutesRef.current.value)
        let hours = Number(hoursRef.current.value)

        if ([START, CONTINUE].includes(prevButtonText)) {
            timerRef.current = setInterval(() => {
                seconds = seconds + 1
                if (seconds === maxSecs) {
                    minutes = minutes + 1
                    seconds = 0
                    minutesRef.current.value = String(minutes)
                    secondsRef.current.value = String(seconds)
                    return
                }
                if (minutes === maxMins) {
                    hours = hours + 1
                    minutes = 0
                    hoursRef.current.value = String(hours)
                    minutesRef.current.value = String(minutes)
                    return
                }
                secondsRef.current.value = String(seconds)
            }, 1000)
        } else {
            clearInterval(timerRef.current)
        }
    }

    const setFirstButtonTxt = buttonText => {
        if (buttonText  === START) {
            seFirstButtonText(PAUSE)
        }
        else if (buttonText === PAUSE) {
            seFirstButtonText(CONTINUE)
        }
        else if (buttonText === CONTINUE) {
            seFirstButtonText(PAUSE)
        }
    }
    
    const handleBackwardTimer = prevButtonText => {
        let seconds = Number(secondsRef.current.value)
        let minutes = Number(minutesRef.current.value)
        let hours = Number(hoursRef.current.value)
        let totalSecs = seconds + (minutes * 60) + (hours * 3600)
        if ([START, CONTINUE].includes(prevButtonText)) {
            timerRef.current = setInterval(() => {
               if(totalSecs) {
                    totalSecs = totalSecs - 1;
                    let newminutes = Math.floor(totalSecs / 60)
                    let newhours = Math.floor(totalSecs / 3600)
                    let newseconds = totalSecs % 60
                    secondsRef.current.value = String(newseconds)
                    minutesRef.current.value = String(newminutes)
                    hoursRef.current.value = String(newhours)
               } else {
                    handleReset()
               }
            }, 1000)
        } else {
            clearInterval(timerRef.current)
        }
        
    }

    const onFirstButtonClick = e => {
        const buttonText = e.target.innerHTML;
        setFirstButtonTxt(buttonText);
        if (isForwardTimer) {
            handleForwardTime(buttonText)
        } else {
            handleBackwardTimer(buttonText)
        }
    }

    const isAllZeroes = () => {
        if (
            !Number(hoursRef.current.value) && 
            !Number(minutesRef.current.value) &&
            !Number(secondsRef.current.value)
            ) {
                return true
        }
        return false
    }

    const handleTimeEntry = e => {
        let elemId = e.target.getAttribute('id');
        let valueEntered = Number(e.target.value);
        if (!valueEntered) {
            valueEntered = 0;
        }
        /**
         * because non-zero values have been entered, the timer will not start
         * in a forward manner (as in timer started cuting from from zero onwards)
         * like a stop watch
         */
        if (!isAllZeroes()) {
            setIsForwardTime(false);
        }

        if (elemId === Hours) {
            hoursRef.current.value = valueEntered;
        }
        else if (elemId === Minutes) {
            minutesRef.current.value = valueEntered
        }
        else if (elemId === Seconds) {
            secondsRef.current.value = valueEntered
        }
    }

    const getRef = () => ({
        Hours: hoursRef,
        Minutes: minutesRef,
        Seconds: secondsRef,
    })

    const handleReset = () => {
        seFirstButtonText(START);
        clearInterval(timerRef.current)
        hoursRef.current.value = 0;
        minutesRef.current.value = 0;
        secondsRef.current.value = 0;
    }

    let renderTimeSlots = (heading) => (
        <>
            <div>{heading}</div>
            <input
                id={heading}
                type="number"
                onChange={handleTimeEntry}
                ref={getRef()[heading]}
            />
        </>
    )

    return (
        <div id="timerContainer">
            <div>Countdown Timer</div>
            <div className="timerSlotsContainer">
                <div className="hours">{renderTimeSlots(Hours)}</div>
                <div className="minutes">{renderTimeSlots(Minutes)}</div>
                <div className="seconds">{renderTimeSlots(Seconds)}</div>
            </div>
            <div className="buttonContainer">
                <button
                    onClick={onFirstButtonClick}
                    className={buttonNameClassNameMapper[firstButtonText]}
                >
                    {firstButtonText}
                </button>
                <button onClick={handleReset} className="reset">Reset</button>
            </div>
        </div>
    )
}

export default Timer;