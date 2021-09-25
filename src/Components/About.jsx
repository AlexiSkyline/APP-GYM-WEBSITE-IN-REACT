import React from 'react'
import aboutimg from '../images/about.png';

export const About = () => {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={aboutimg} alt="" />
            </div>

            <div className='about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem, aspernatur beatae animi exercitationem quisquam laboriosam iste error quia est ea deleniti, quasi itaque ipsum inventore! Eligendi maiores accusamus pariatur.</p>
                <button>READ MORE</button>
            </div>
        </div>
    )
}
