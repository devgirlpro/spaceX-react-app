import React, { useEffect, useState } from 'react';
import './rockets.css';

const Rockets = () => {
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
            <div className='wrapper'>
                {rocketsInfo.map((rocket) => {
                    return (
                        <div key={rocket.id} className='rocket-card'>
                            <img
                                src={rocket.flickr_images[1]}
                                alt={rocket.name}
                                className='rocket-image lazyload'
                            />
                            <div className='rocket-content'>
                                <h5>{rocket.name}</h5>
                                <p>{rocket.description}</p>
                                <a href={rocket.wikipedia}>Wikipedia</a>

                                <hr />
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Rockets;
