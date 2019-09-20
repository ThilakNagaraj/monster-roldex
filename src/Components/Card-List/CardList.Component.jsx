import React from 'react';
import './CardList.Style.css'
import '../Card/Card.component'
import { Card } from '../Card/Card.component';

export const CardLists = (props) =>  {
    
    return(
            <div className= 'card-list' > 
                { 
                 props.monsters.map(monster => 
                <Card key={monster.id} monster={monster}/>
                 )}      
            </div>
            
        )
}

