import React from 'react';
import Cousin from './Cousin';

const Aunt = () => {
    return (
        <div>
            <h3>Aunt</h3>
            <section className='flex'>
                <Cousin name='Upoma'></Cousin>
                <Cousin name='Sonia'></Cousin>
                <Cousin name='Lamia'></Cousin>
            </section>
        </div>
    );
};

export default Aunt;