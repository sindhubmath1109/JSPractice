import React, { useState, useEffect } from 'react';

const VideoStopMotionPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTick, setCurrentTick] = useState(0);

  let interval;
  let buttonPlayStates = {
    play: 'Play',
    pause: 'Pause'
  }

  const images = [
    'https://placebear.com/g/200/100',
    'https://placebear.com/g/200/101',
    'https://placebear.com/g/200/102',
    'https://placebear.com/g/200/103',
    'https://placebear.com/g/200/104',
    'https://placebear.com/g/200/105',
    'https://placebear.com/g/200/106',
    'https://placebear.com/g/200/107',
  ];

  function renderTicks(key, index) {
    return (
      <div
        key={key}
        onClick={() => {setCurrentTick(index)}}
        style={{
          height: "20px",
          width: "20px",
          border: "0.5px solid black",
          backgroundColor: index === currentTick ? "blue" : "white"
        }}
      ></div>
    )
  }

  function controlImgDisplay() {
    setIsPlaying(!isPlaying)
    // if (isPlaying) {
    //   // means, button has been changed to pause, so pause / clear the timer
    //   clearInterval(interval);
    // } 
    // else {
    //   // means, it has been changed to play, so change the current tick
    //   if (currentTick === images.length - 1) {
    //     setCurrentTick(0)
    //   }
    //   else {
    //     setCurrentTick(currentTick + 1);
    //   }
    // }
  }

  useEffect(() => {
    if (isPlaying) {
      interval = setInterval(() => {
        if (currentTick === images.length - 1) {
          setCurrentTick(0)
        }
        else {
          setCurrentTick(currentTick + 1);
        }
      }, 2000)
    }
    // cleanup and clear the timer before unmount 
    return () => clearInterval(interval);

  }, [currentTick, isPlaying])

  // useEffect(() => {
  //   interval = setInterval(() => {
  //     if (currentTick === images.length - 1) {
  //       setCurrentTick(0)
  //     }
  //     else {
  //       setCurrentTick(currentTick + 1);
  //     }
  //   }, 2000)
  //   // cleanup and clear the timer before unmount 
  //   return () => clearInterval(interval);

  // }, [currentTick])

  return (
    <div>
      {/* display image */}
      <img
        src={images[currentTick]}
        style={{
          height: "100px",
          width: "200px",
        }}
      />
      {/* display ticks */}
      <div style={{
        marginTop: "10px",
        display: "flex",
        gap: "5px",
      }}>
        {images.map((imageUrl, index) => {
          return renderTicks(`img_${index}`, index)
        })}
      </div>
      {/* display Play pause button */}
      <button
        onClick={controlImgDisplay}
        style={{
          marginTop: "12px"
        }}
      >
        {isPlaying ? buttonPlayStates.pause : buttonPlayStates.play}
      </button>
    </div>
  )

};

export default VideoStopMotionPlayer;
