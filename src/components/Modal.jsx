import React from 'react';
import './Modal.css';

const Modal = ({ closeModalPage }) => {
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <div className='titleCloseBtn'>
                    <button onClick={closeModalPage}>X</button>
                </div>
                <div className='title'>
                    {/* <h1>{rocketsInfo.name}</h1> */}
                    <h1>Title modal page</h1>
                </div>
                <div className='body'>
                    {/* <img
                        src={rocketsInfo.flickr_images[1]}
                        alt={rocketsInfo.name}
                    /> */}
                    {/* <p>{rocketsInfo.country}</p> */}
                    {/* <p>{rocketsInfo.company}</p> */}
                    {/* <p>{rocketsInfo.height.meters}</p> */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque est ab, eius inventore id voluptatum
                        necessitatibus quia minus. Maiores, nobis. Doloremque,
                        earum! Exercitationem molestiae amet ipsa repellendus
                        commodi odit id!
                    </p>
                </div>
                <div className='footer'>
                    <button id='cancleBtn' onClick={closeModalPage}>
                        Cancle
                    </button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
