import React from 'react';
import Special from './Special';
import Friend from './Friend';


const Cousin = ({name, asset}) => {
    return (
        <div>
            <h3>{name}</h3>
            {
                name === 'Upoma' && <Special asset={asset}></Special>
            }

            {
                name === 'Sonia' && <Friend></Friend>
            }
        </div>
    );
};

export default Cousin;