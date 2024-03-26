import React, { useEffect, useState } from 'react';
import './rockets.css';
import Modal from './Modal';

const RocketsCard = () => {
    const [rocketsInfo, setRocketsInfo] = useState([]);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const rocketsApiLink = 'https://api.spacexdata.com/v4/rockets';

    const fetchRockets = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(rocketsApiLink);
            const data = await response.json();
            console.log('data => ', data);
            setRocketsInfo(data);
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchRockets();
    }, []);

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
                                <a href={rocket.wikipedia} className='btn'>
                                    view more
                                </a>

                                <hr />
                            </div>
                        </div>
                    );
                })}
            </div>
            <Modal />
        </>
    );
};

export default RocketsCard;
