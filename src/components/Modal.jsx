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
                <div className='title'>{rocket && <h1>{rocket.name}</h1>}</div>
                <div className='body'>
                    <div className='image-container'>
                        {rocket &&
                            rocket.flickr_images.map((imageUrl, index) => (
                                <img key={index} src={imageUrl} alt='Image' />
                            ))}
                    </div>
                    <div className='modalContent'>

                        <div className='modalContentBox'>
                            <h4>Country</h4> <p>{rocket.country}</p>
                        </div>

                        <div className='modalContentBox'>
                            <h4>company</h4>
                            <p>{rocket.company}</p>
                        </div>

                        <div className='modalContentBox'>
                            <h4>Height</h4>
                            <p>{rocket.height.feet} Feet</p>
                        </div>

                        <div className='modalContentBox'>
                            <h4>Diameter</h4>
                            <p>{rocket.diameter.feet} Feet</p>
                        </div>

                        <div className='modalContentBox'>
                            <h4>Mass</h4>
                            <p>{rocket.mass.kg / 1000} Tonne</p>
                        </div>

                        <div className='modalContentBox'>
                            <h4>Active</h4>
                            <p>{rocket.active ? 'YES' : 'NO'}</p>
                        </div>

                        <div className='modalContentBox'>
                            <h4>Cost/Launch</h4>
                            <p>{rocket.cost_per_launch / 1000000} Million</p>
                        </div>
                        
                    </div>
                </div>
                <div className='footer'>
                    <button id='cancelBtn' onClick={closeModalPage}>
                        Cancel
                    </button>
                    <button onClick={logRocket}>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
