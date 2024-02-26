import React, { useEffect, useState } from 'react';
// import { throttleFunc } from './helper';
import './_css.scss';

function InfiniteScroll() {

    const [displayElements, setDisplayElements] = useState(50);

    const isScrolledToEnd = () => {
        const scrollTop = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        return scrollTop + windowHeight >= documentHeight;
    }

    const handleScroll = () => {
        if (isScrolledToEnd) {
            setDisplayElements(prevCount => prevCount + 50) 
        }
    }

    useEffect(() => {
        // window.addEventListener('scroll', throttleFunc(handleScroll, 500))
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const renderListElements = [...Array(displayElements)].map((_, index) => (
        <div key={index} className='elemContainer'>
            <div className='dummyPic'></div>
            <label className='nameLabel'>{`name_${index + 1}`}</label>
        </div>
    ))

    return (<div className='mainContainer'>
        {renderListElements}
    </div>)
}

export default InfiniteScroll;
