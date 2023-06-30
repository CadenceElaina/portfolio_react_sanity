import React from 'react';
import { SiGithub, SiReplit, SiFreecodecamp, SiLinkedin, SiCodepen } from 'react-icons/si';
const SocialMedia = () => {
    return (
        <div className='app__social'>
            <div>
                <a href='https://github.com/CadenceElaina' target="_blank" rel="noreferrer">
                    <SiGithub />
                </a>
            </div>
            <div>
                <a href='https://www.linkedin.com/in/cooper-burwell-674147195/' target="_blank" rel="noreferrer">
                    <SiLinkedin />
                </a>
            </div>
            <div>
                <a href='https://replit.com/@cadenceelaina' target="_blank" rel="noreferrer">
                    <SiReplit />
                </a>
            </div>
            <div>
                <a href='https://www.freecodecamp.org/CadenceElaina' target="_blank" rel="noreferrer">
                    <SiFreecodecamp />
                </a>
            </div>
            <div>
                <a href='https://codepen.io/cadenceElaina' target="_blank" rel="noreferrer">
                    <SiCodepen />
                </a>
            </div>
        </div>
    )
}

export default SocialMedia
