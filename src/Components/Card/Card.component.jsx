import React from 'react';
import './Card.style.css';

export const Card = (props) => (
 
    <div className='card-container'> 
        <img 
            alt="Monster" 
            src={`https://robohash.org/${props.monster.id}/set=set2&size=50X50`}
            
        />
            <h1>{props.monster.name}</h1>
            <p>{props.monster.email}</p>
    </div>

)