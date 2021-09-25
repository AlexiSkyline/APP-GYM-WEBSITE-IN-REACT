import React from 'react'
import { Featurebox } from './Featurebox';
import img1 from '../images/1.svg';
import img2 from '../images/2.svg';
import img3 from '../images/3.svg';
import img4 from '../images/4.svg';

export const Feature = () => {
    return (
        <div id='features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                <Featurebox image={ img1 } title='WeightLifting'/>
                <Featurebox image={ img2 } title='Specific Muscle'/>
                <Featurebox image={ img3 } title='Flex Your Muscle'/>
                <Featurebox image={ img4 } title='Cardio Exercise'/>
            </div>
        </div>
    )
}
