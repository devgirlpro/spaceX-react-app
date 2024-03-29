import React, { useEffect, useState } from 'react';
import './Rockets.css';

const RocketsCard = ({ rocketsInfo, openModalPage }) => {
    return (
        <>
            <div className='container'>
                {rocketsInfo.map((rocket) => {
                    return (
                        <div key={rocket.id} className='card'>
                            <img
                                src={rocket.flickr_images[1]}
                                alt={rocket.name}
                                className='rocket-image lazyload'
                            />
                            <div className='content'>
                                <h5>{rocket.name}</h5>
                                <p>{rocket.description}</p>
                                {rocketsInfo.length > 0 && (
                                    <a
                                        onClick={() => openModalPage(rocket)}
                                        className='btn'>
                                        view more
                                    </a>
                                )}
                                <hr />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default RocketsCard;
