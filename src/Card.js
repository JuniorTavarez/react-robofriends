import React from 'react';

const Card = () => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='Robots' src='https://robohash.org/test?size=200x200' />
            <div>
                <h2>Junior Tavarez</h2>
                <p> JuniorTavarez@gmail.com</p>   
            </div>
        </div>
    );
}

export default Card;