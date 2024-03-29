import React from 'react';
import './Modal.css';

const Modal = ({ closeModalPage, rocket }) => {
    const logRocket = (rocket) => {
        console.log('logRocket ===>', rocket);
    };
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={closeModalPage}>X</button>
                </div>
                <div className='title'>
                    {rocket && <h1>{rocket.name}</h1> }
                </div>
                <div className='body'>
                    {rocket && (
                        <>
                            <img
                                src={rocket.flickr_images[1]}
                                alt={rocket.name}
                            />
                            <p>Country: {rocket.country}</p>
                            <p>Company: {rocket.company}</p>
                            <p>Height (meters): {rocket.height.meters}</p>
                            {/* Add more info as needed from the `rocket` object */}
                        </>
                    )}
                    {/* <img
                        src={rocketsInfo.flickr_images[1]}
                        alt={rocketsInfo.name}
                    /> */}
                    {/* <p>{rocketsInfo.country}</p> */}
                    {/* <p>{rocketsInfo.company}</p> */}
                    {/* <p>{rocketsInfo.height.meters}</p> */}
                </div>
                <div className='footer'>
                    <button id='cancleBtn' onClick={closeModalPage}>
                        Cancle
                    </button>
                    <button onClick={logRocket}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
