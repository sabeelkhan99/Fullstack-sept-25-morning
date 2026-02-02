import React from 'react'
import StopWatch from './components/StopWatch'
import "./App.css";
import Carousel from './components/Carousel';
import Happy from './components/Happy';
import Modal from './components/Modal';
import useVisibility from './hooks/useVisibility';

const App = () => {

    const { visibility:isOpen, hide: hideModal, show: showModal } = useVisibility(false);

    return (
        <div>
            <h1>Machine Coding Problems</h1>
            {/* <StopWatch/> */}
            {/* <Carousel/> */}
            {/* <Happy/> */} 
            {isOpen && <Modal hideModal={hideModal} />}
            <button onClick={showModal}>Open Modal</button>
        </div>
    )
}

export default App
