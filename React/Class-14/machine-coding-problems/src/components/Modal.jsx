import React from 'react'

const Modal = ({ hideModal }) => {
    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>This is a modal heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci numquam quo quibusdam autem eveniet iusto ratione, praesentium laboriosam. Ratione consequatur eum dolor sit at cum quia aperiam aliquam laboriosam soluta?</p>
                <button onClick={hideModal}>Close</button>
            </div>
        </div>
    )
}

export default Modal
